document.addEventListener('DOMContentLoaded', () => {
  initGlobalFeatures();
  initStudyNavigation();
  initUserNavigation();

  const page = window.location.pathname.split('/').pop() || 'index.html';

  if (page === 'login.html') initLoginPage();
  if (page === 'cadastro.html') initRegisterPage();
  if (page === 'index.html' || page === '') initHomePage();
});

function initStudyNavigation() {
  document.querySelectorAll('.page-navigation').forEach((navigation) => {
    if (!navigation.querySelector('a[href="jogos.html"]')) {
      navigation.insertAdjacentHTML('beforeend', '<a href="jogos.html" class="btn btn-ghost">Mini games</a>');
    }
    if (!navigation.querySelector('a[href="conta.html"]')) {
      navigation.insertAdjacentHTML('beforeend', '<a href="conta.html" class="btn btn-ghost">Minha conta</a>');
    }
  });
}

async function initUserNavigation() {
  const mainNav = document.getElementById('mainNav');
  if (!mainNav) return;

  if (!mainNav.querySelector('a[href="jogos.html"]')) {
    mainNav.insertAdjacentHTML('beforeend', '<a href="jogos.html">Mini games</a>');
  }
  if (!mainNav.querySelector('a[href="conta.html"]')) {
    mainNav.insertAdjacentHTML('beforeend', '<a href="conta.html">Minha conta</a>');
  }

  if (typeof supabaseClient === 'undefined') return;

  const existingUserNav = mainNav.querySelector('.user-nav');
  if (existingUserNav) existingUserNav.remove();

  try {
    const { data } = await supabaseClient.auth.getUser();
    if (!data.user) return;

    const firstName = (data.user.user_metadata?.name || data.user.email?.split('@')[0] || 'Estudante').trim().split(/\s+/)[0];
    const userNav = document.createElement('span');
    userNav.className = 'user-nav';
    userNav.innerHTML = `<span class="user-nav-name">Olá, ${firstName}</span><button type="button" class="user-nav-logout">Sair</button>`;
    userNav.querySelector('.user-nav-logout').addEventListener('click', async () => {
      await supabaseClient.auth.signOut();
      window.location.reload();
    });
    mainNav.appendChild(userNav);
  } catch (error) {
    return;
  }
}

function initGlobalFeatures() {
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      mainNav.classList.toggle('open');
    });
  }

}

function initHomePage() {
  const cards = document.querySelectorAll('.card, .bio-card, .mini-card, .info-card');
  cards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-4px)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
  });
}

function initLoginPage() {
  const form = document.querySelector('.login-form');
  if (!form) return;

  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const submitButton = form.querySelector('button[type="submit"]');
  const googleButton = document.getElementById('google-login');
  const googleStatus = document.getElementById('google-login-status');

  initPasswordToggle(passwordInput);
  [emailInput, passwordInput].forEach((input) => {
    input?.addEventListener('input', () => clearError(input));
  });

  googleButton?.addEventListener('click', async () => {
    if (!isAuthServiceAvailable()) {
      if (googleStatus) {
        googleStatus.textContent = 'O serviço de autenticação não foi carregado. Verifique sua conexão e a configuração do Supabase.';
      }
      return;
    }

    googleButton.disabled = true;
    googleButton.textContent = 'Conectando ao Google...';
    if (googleStatus) googleStatus.textContent = '';

    try {
      await database.authenticateWithGoogle();
    } catch (error) {
      console.error('Falha ao entrar com o Google:', error);
      if (googleStatus) googleStatus.textContent = getAuthErrorMessage(error);
      googleButton.disabled = false;
      googleButton.textContent = 'Entrar com Google';
    }
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const isEmailValid = validateEmailField(emailInput);
    const isPasswordValid = validatePasswordField(passwordInput);
    if (!isEmailValid || !isPasswordValid) return;

    if (!isAuthServiceAvailable()) {
      showCustomError(form, 'O serviço de autenticação não foi carregado. Verifique sua conexão e a configuração do Supabase.');
      return;
    }

    setSubmitState(submitButton, true, 'Entrando...');

    try {
      await database.authenticate(emailInput.value, passwordInput.value);
      setSubmitState(submitButton, true, 'Login realizado!');
      window.location.href = 'index.html';
    } catch (error) {
      console.error('Falha ao entrar na conta:', error);
      showError(passwordInput, getAuthErrorMessage(error));
      setSubmitState(submitButton, false, 'Entrar na plataforma');
    }
  });
}

function initRegisterPage() {
  const form = document.querySelector('.register-form');
  if (!form) return;

  const nameInput = document.getElementById('reg-name');
  const emailInput = document.getElementById('reg-email');
  const passwordInput = document.getElementById('reg-password');
  const confirmInput = document.getElementById('reg-password-confirm');
  const termsCheckbox = document.getElementById('reg-terms');
  const submitButton = document.getElementById('register-submit');

  initPasswordToggle(passwordInput);
  initPasswordToggle(confirmInput);
  [nameInput, emailInput, passwordInput, confirmInput].forEach((input) => {
    input?.addEventListener('input', () => clearError(input));
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const isNameValid = validateRequiredField(nameInput, 'Digite seu nome completo.');
    const isEmailValid = validateEmailField(emailInput);
    const isPasswordValid = validatePasswordField(passwordInput);
    const passwordsMatch = validateMatchField(passwordInput, confirmInput, 'As senhas não coincidem.');
    const acceptedTerms = validateCheckbox(termsCheckbox, 'Você precisa aceitar os termos.');
    if (!isNameValid || !isEmailValid || !isPasswordValid || !passwordsMatch || !acceptedTerms) return;

    if (!isAuthServiceAvailable()) {
      showCustomError(form, 'O serviço de autenticação não foi carregado. Verifique sua conexão e a configuração do Supabase.');
      return;
    }

    setSubmitState(submitButton, true, 'Criando conta...');

    try {
      const { session } = await database.createUser({
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value
      });

      if (session) {
        setSubmitState(submitButton, true, 'Conta criada!');
        window.location.href = 'index.html';
        return;
      }

      showCustomError(form, 'Conta criada. Verifique seu e-mail para confirmar o cadastro.');
      setSubmitState(submitButton, false, 'Criar minha conta');
    } catch (error) {
      console.error('Falha ao criar a conta:', error);
      showCustomError(form, getAuthErrorMessage(error));
      setSubmitState(submitButton, false, 'Criar minha conta');
    }
  });
}

function isAuthServiceAvailable() {
  return typeof database !== 'undefined' && typeof supabaseClient !== 'undefined';
}

function setSubmitState(button, disabled, text) {
  if (!button) return;
  button.disabled = disabled;
  button.textContent = text;
}

function getAuthErrorMessage(error) {
  const messages = {
    'Invalid login credentials': 'E-mail ou senha incorretos.',
    'User already registered': 'Este e-mail já está cadastrado.',
    'Email not confirmed': 'Confirme seu e-mail antes de entrar.',
    'email rate limit exceeded': 'O limite de envio de e-mails foi atingido. Aguarde alguns minutos e tente novamente.',
    'Failed to fetch': 'Não foi possível conectar ao Supabase. Verifique sua conexão e a URL do projeto.',
    'Database error saving new user': 'O Supabase não conseguiu salvar o novo usuário. Verifique as configurações de autenticação e os gatilhos do banco de dados.'
  };

  const codeMessages = {
    invalid_credentials: messages['Invalid login credentials'],
    email_not_confirmed: messages['Email not confirmed'],
    over_email_send_rate_limit: messages['email rate limit exceeded'],
    signup_disabled: 'O cadastro está desativado nas configurações de autenticação do Supabase.',
    email_address_invalid: 'O Supabase recusou esse endereço de e-mail. Confira o endereço e as configurações do projeto.'
  };

  return codeMessages[error?.code] || messages[error?.message] || 'Não foi possível concluir a operação. Consulte o console do navegador para ver o erro retornado pelo Supabase.';
}

function validateRequiredField(input, message) {
  if (!input) return true;
  if (!input.value.trim()) {
    showError(input, message);
    return false;
  }
  return true;
}

function validateEmailField(input) {
  if (!input) return true;

  const value = input.value.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!value) {
    showError(input, 'O e-mail é obrigatório.');
    return false;
  }

  if (!regex.test(value)) {
    showError(input, 'Digite um e-mail válido.');
    return false;
  }

  return true;
}

function validatePasswordField(input, minLength = 6) {
  if (!input) return true;

  const value = input.value;

  if (!value) {
    showError(input, 'A senha é obrigatória.');
    return false;
  }

  if (value.length < minLength) {
    showError(input, `A senha deve ter pelo menos ${minLength} caracteres.`);
    return false;
  }

  return true;
}

function validateMatchField(inputA, inputB, message) {
  if (!inputA || !inputB) return true;
  if (inputB.value !== inputA.value) {
    showError(inputB, message);
    return false;
  }
  return true;
}

function validateCheckbox(checkbox, message) {
  if (!checkbox) return true;
  if (!checkbox.checked) {
    const container = checkbox.closest('.form-options');
    showCustomError(container, message);
    return false;
  }
  return true;
}

function showError(input, message) {
  if (!input) return;

  const wrapper = input.closest('.input-wrapper');
  const group = input.closest('.form-group');
  clearError(input);

  if (wrapper) wrapper.classList.add('input-error');

  const errorText = document.createElement('span');
  errorText.className = 'error-message';
  errorText.textContent = message;

  if (group) group.appendChild(errorText);
}

function clearError(input) {
  if (!input) return;

  const wrapper = input.closest('.input-wrapper');
  const group = input.closest('.form-group');

  if (wrapper) wrapper.classList.remove('input-error');
  if (group) {
    const existingError = group.querySelector('.error-message');
    if (existingError) existingError.remove();
  }
}

function showCustomError(container, message) {
  if (!container) return;
  clearCustomError(container);

  const errorText = document.createElement('span');
  errorText.className = 'error-message custom-error';
  errorText.textContent = message;
  container.appendChild(errorText);
}

function clearCustomError(container) {
  if (!container) return;
  const existingError = container.querySelector('.custom-error');
  if (existingError) existingError.remove();
}

function initPasswordToggle(passwordInput) {
  if (!passwordInput) return;

  const wrapper = passwordInput.closest('.input-wrapper');
  if (!wrapper || wrapper.querySelector('.password-toggle')) return;

  const toggleBtn = document.createElement('button');
  toggleBtn.type = 'button';
  toggleBtn.className = 'password-toggle';
  toggleBtn.setAttribute('aria-label', 'Alternar visibilidade');
  toggleBtn.innerHTML = `
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  `;

  wrapper.appendChild(toggleBtn);

  toggleBtn.addEventListener('click', () => {
    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';
    toggleBtn.classList.toggle('active', isPassword);
  });
}
