document.addEventListener('DOMContentLoaded', async () => {
  const accountAction = document.getElementById('accountAction');
  const profileName = document.getElementById('profileName');
  const profileEmail = document.getElementById('profileEmail');
  const profileAvatar = document.getElementById('profileAvatar');

  if (typeof supabaseClient !== 'undefined') {
    try {
      const { data } = await supabaseClient.auth.getUser();
      const user = data.user;

      if (user) {
        const name = user.user_metadata?.name || user.email?.split('@')[0] || 'Estudante';
        profileName.textContent = name;
        profileEmail.textContent = user.email || 'Conta conectada';
        profileAvatar.textContent = name.charAt(0).toUpperCase();
        accountAction.textContent = 'Sair da conta';
        accountAction.href = '#sair';
        accountAction.addEventListener('click', async (event) => {
          event.preventDefault();
          await supabaseClient.auth.signOut();
          window.location.reload();
        });
      }
    } catch (error) {
      profileEmail.textContent = 'Não foi possível carregar a sessão agora.';
    }
  }

  const progress = JSON.parse(localStorage.getItem('study_progress') || '{}');
  const subjectScores = progress.subjectScores || {};
  const values = Object.values(subjectScores);
  const totalCorrect = values.reduce((sum, value) => sum + value.correct, 0);
  const totalAttempted = values.reduce((sum, value) => sum + (value.attempted || 0), 0);
  const accuracyRate = totalAttempted ? Math.round((totalCorrect / totalAttempted) * 100) : 0;

  document.getElementById('gamesPlayed').textContent = progress.gamesPlayed || 0;
  document.getElementById('questionsCorrect').textContent = totalCorrect;
  document.getElementById('accuracyRate').textContent = `${accuracyRate}%`;

  Object.entries(subjectScores).forEach(([subject, value]) => {
    const label = document.querySelector(`[data-progress-subject="${subject}"]`);
    const bar = document.querySelector(`[data-progress-bar="${subject}"]`);
    if (label) label.textContent = `${value.percent}%`;
    if (bar) bar.style.width = `${value.percent}%`;
  });
});
