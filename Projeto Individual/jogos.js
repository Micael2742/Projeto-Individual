const quizData = {
  citologia: {
    label: 'Citologia',
    questions: [
      { text: 'Qual organela produz grande parte do ATP em células eucarióticas?', answers: ['Ribossomo', 'Mitocôndria', 'Lisossomo', 'Complexo de Golgi'], correct: 1 },
      { text: 'Qual estrutura controla a entrada e a saída de substâncias?', answers: ['Membrana plasmática', 'Nucléolo', 'Centríolo', 'Parede óssea'], correct: 0 },
      { text: 'A mitose gera, ao final, células-filhas:', answers: ['Sempre haploides', 'Sem material genético', 'Geneticamente idênticas', 'Com quatro núcleos'], correct: 2 },
      { text: 'Qual organela participa da digestão intracelular?', answers: ['Cloroplasto', 'Centríolo', 'Nucléolo', 'Lisossomo'], correct: 3 },
      { text: 'Em células vegetais, a fotossíntese ocorre principalmente no:', answers: ['Ribossomo', 'Cloroplasto', 'Vacúolo', 'Lisossomo'], correct: 1 },
      { text: 'O material gelatinoso onde ficam as organelas é o:', answers: ['Núcleo', 'Cromossomo', 'Envelope nuclear', 'Citoplasma'], correct: 3 },
      { text: 'Qual estrutura delimita o núcleo em uma célula eucariótica?', answers: ['Parede celular', 'Envelope nuclear', 'Citoesqueleto', 'Ribossomo'], correct: 1 },
      { text: 'Os ribossomos são responsáveis pela produção de:', answers: ['Lipídios', 'Oxigênio', 'Proteínas', 'DNA'], correct: 2 },
      { text: 'A principal função do complexo de Golgi é:', answers: ['Produzir ATP', 'Duplicar cromossomos', 'Captar luz', 'Modificar e empacotar moléculas'], correct: 3 },
      { text: 'A estrutura que organiza os microtúbulos durante a divisão celular é o:', answers: ['Vacúolo', 'Centríolo', 'Nucléolo', 'Cloroplasto'], correct: 1 }
    ]
  },
  genetica: {
    label: 'Genética',
    questions: [
      { text: 'Qual molécula armazena a maior parte das informações hereditárias?', answers: ['ATP', 'RNA mensageiro', 'DNA', 'Glicose'], correct: 2 },
      { text: 'Como chamamos uma versão alternativa de um gene?', answers: ['Tecido', 'Alelo', 'Cariótipo', 'Enzima'], correct: 1 },
      { text: 'A meiose é importante porque aumenta a variabilidade e forma:', answers: ['Gametas', 'Células da pele', 'Plaquetas', 'Fibras musculares'], correct: 0 },
      { text: 'A unidade funcional da hereditariedade é o:', answers: ['Tecido', 'Órgão', 'Ribossomo', 'Gene'], correct: 3 },
      { text: 'A estrutura formada por DNA associado a proteínas é o:', answers: ['Lisossomo', 'Cromossomo', 'ATP', 'Centríolo'], correct: 1 },
      { text: 'O RNA mensageiro leva instruções do DNA até o:', answers: ['Vacúolo', 'Cloroplasto', 'Ribossomo', 'Lisossomo'], correct: 2 },
      { text: 'Quando os dois alelos são iguais, o indivíduo é:', answers: ['Heterozigoto', 'Poliploide', 'Recessivo obrigatório', 'Homozigoto'], correct: 3 },
      { text: 'A expressão observável de uma característica é o:', answers: ['Genótipo', 'Alelo', 'Fenótipo', 'Códon'], correct: 2 },
      { text: 'A duplicação do DNA acontece antes da:', answers: ['Digestão', 'Fotossíntese', 'Respiração externa', 'Divisão celular'], correct: 3 },
      { text: 'Uma alteração na sequência do DNA é chamada de:', answers: ['Tradução', 'Mutação', 'Osmose', 'Transcrição'], correct: 1 }
    ]
  },
  ecologia: {
    label: 'Ecologia',
    questions: [
      { text: 'Qual nível reúne seres vivos e fatores não vivos de uma área?', answers: ['População', 'Espécie', 'Ecossistema', 'Organismo'], correct: 2 },
      { text: 'Em uma cadeia alimentar, plantas são geralmente:', answers: ['Decompositoras', 'Produtoras', 'Consumidoras terciárias', 'Parasitas'], correct: 1 },
      { text: 'A relação em que ambos os organismos se beneficiam é:', answers: ['Predação', 'Competição', 'Mutualismo', 'Amensalismo'], correct: 2 },
      { text: 'Organismos que decompõem matéria orgânica são:', answers: ['Produtores', 'Consumidores primários', 'Predadores', 'Decompositores'], correct: 3 },
      { text: 'O conjunto de indivíduos da mesma espécie em uma área é uma:', answers: ['Comunidade', 'População', 'Biosfera', 'Bioma'], correct: 1 },
      { text: 'A energia disponível tende a diminuir a cada:', answers: ['Habitat', 'Nicho', 'Ciclo da água', 'Nível trófico'], correct: 3 },
      { text: 'O local onde uma espécie vive é seu:', answers: ['Nicho', 'Habitat', 'Bioma', 'Ecótipo'], correct: 1 },
      { text: 'A competição ocorre quando organismos disputam:', answers: ['O mesmo DNA', 'A mesma célula', 'Recursos limitados', 'A luz da Lua'], correct: 2 },
      { text: 'O conjunto de relações de uma espécie com o ambiente é seu:', answers: ['Habitat', 'Bioma', 'Ecossistema', 'Nicho ecológico'], correct: 3 },
      { text: 'A sequência alimentar começa, em geral, com:', answers: ['Predadores', 'Decompositores', 'Produtores', 'Parasitas'], correct: 2 }
    ]
  },
  evolucao: {
    label: 'Evolução',
    questions: [
      { text: 'A seleção natural atua diretamente sobre:', answers: ['Planetas', 'Características observáveis', 'Fósseis isolados', 'A idade da Terra'], correct: 1 },
      { text: 'Uma característica que melhora a sobrevivência em certo ambiente é uma:', answers: ['Extinção', 'Mutação sempre prejudicial', 'Adaptação', 'Célula-tronco'], correct: 2 },
      { text: 'A fonte primária de novas variações genéticas é:', answers: ['Digestão', 'Respiração', 'Fotossíntese', 'Mutação'], correct: 3 },
      { text: 'A seleção natural favorece características que aumentam:', answers: ['Sobrevivência e reprodução', 'O tamanho do planeta', 'A idade dos fósseis', 'A quantidade de água'], correct: 0 },
      { text: 'Estruturas com mesma origem evolutiva são chamadas de:', answers: ['Análogas', 'Vestigiais apenas', 'Homólogas', 'Sintéticas'], correct: 2 },
      { text: 'O isolamento entre populações pode favorecer a:', answers: ['Digestão', 'Especiação', 'Fotossíntese', 'Respiração celular'], correct: 1 },
      { text: 'A seleção natural atua sobre indivíduos, mas muda a frequência de características na:', answers: ['Célula isolada', 'Rocha', 'Atmosfera', 'População'], correct: 3 },
      { text: 'Fósseis são evidências importantes da:', answers: ['Osmose', 'Mitose', 'Evolução', 'Homeostase'], correct: 2 },
      { text: 'A migração de alelos entre populações é chamada de:', answers: ['Deriva térmica', 'Fluxo gênico', 'Seleção artificial', 'Clonagem'], correct: 1 },
      { text: 'A seleção sexual está relacionada principalmente à escolha de:', answers: ['Alimentos', 'Habitats geológicos', 'Células somáticas', 'Parceiros reprodutivos'], correct: 3 }
    ]
  }
};

const memoryItems = [
  ['DNA', 'Informação hereditária'],
  ['Núcleo', 'Protege o DNA'],
  ['ATP', 'Energia celular'],
  ['Ribossomo', 'Produz proteínas']
];

let currentSubject = 'citologia';
let currentQuestion = 0;
let correctAnswers = 0;
let answered = false;
let memoryCards = [];
let openCards = [];
let memoryMoves = 0;

function getStudyProgress() {
  return JSON.parse(localStorage.getItem('study_progress') || '{"gamesPlayed":0,"subjectScores":{}}');
}

function saveQuizProgress() {
  const progress = getStudyProgress();
  progress.gamesPlayed = (progress.gamesPlayed || 0) + 1;
  progress.subjectScores = progress.subjectScores || {};
  progress.subjectScores[currentSubject] = {
    correct: correctAnswers,
    attempted: quizData[currentSubject].questions.length,
    percent: Math.round((correctAnswers / quizData[currentSubject].questions.length) * 100)
  };
  localStorage.setItem('study_progress', JSON.stringify(progress));
  document.getElementById('heroGamesPlayed').textContent = progress.gamesPlayed;
}

function renderQuestion() {
  const question = quizData[currentSubject].questions[currentQuestion];
  document.getElementById('subjectLabel').textContent = quizData[currentSubject].label;
  document.getElementById('questionNumber').textContent = `Pergunta ${String(currentQuestion + 1).padStart(2, '0')}`;
  document.getElementById('questionText').textContent = question.text;
  document.getElementById('quizScore').textContent = `${correctAnswers} acertos`;
  document.getElementById('questionCounter').textContent = `${currentQuestion + 1} / ${quizData[currentSubject].questions.length}`;
  document.getElementById('quizFeedback').textContent = '';
  const nextButton = document.getElementById('nextQuestion');
  nextButton.disabled = true;
  nextButton.textContent = currentQuestion === quizData[currentSubject].questions.length - 1 ? 'Finalizar desafio' : 'Próxima pergunta';
  answered = false;

  const answerGrid = document.getElementById('answerGrid');
  answerGrid.innerHTML = '';
  question.answers.forEach((answer, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'answer-option';
    button.textContent = answer;
    button.addEventListener('click', () => answerQuestion(index));
    answerGrid.appendChild(button);
  });
}

function answerQuestion(selectedIndex) {
  if (answered) return;
  answered = true;
  const question = quizData[currentSubject].questions[currentQuestion];
  const options = document.querySelectorAll('.answer-option');
  options.forEach((option, index) => {
    option.disabled = true;
    if (index === question.correct) option.classList.add('correct');
    if (index === selectedIndex && index !== question.correct) option.classList.add('wrong');
  });

  const feedback = document.getElementById('quizFeedback');
  if (selectedIndex === question.correct) {
    correctAnswers += 1;
    feedback.textContent = 'Resposta certa. Seu raciocínio biológico está no caminho.';
    feedback.className = 'quiz-feedback is-correct';
  } else {
    feedback.textContent = `A resposta correta é: ${question.answers[question.correct]}.`;
    feedback.className = 'quiz-feedback is-wrong';
  }
  document.getElementById('quizScore').textContent = `${correctAnswers} acertos`;
  document.getElementById('nextQuestion').disabled = false;
}

function changeSubject(subject) {
  currentSubject = subject;
  currentQuestion = 0;
  correctAnswers = 0;
  document.querySelectorAll('.subject-tab').forEach((tab) => tab.classList.toggle('active', tab.dataset.subject === subject));
  renderQuestion();
}

function createMemoryBoard() {
  const board = document.getElementById('memoryBoard');
  memoryCards = [...memoryItems, ...memoryItems].sort(() => Math.random() - 0.5).map((item, index) => ({ id: index, key: item[0], detail: item[1], open: false, matched: false }));
  openCards = [];
  memoryMoves = 0;
  document.getElementById('memoryMoves').textContent = '0 movimentos';
  board.innerHTML = '';
  memoryCards.forEach((card) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'memory-card';
    button.dataset.cardId = card.id;
    button.innerHTML = '<span class="memory-back">?</span><span class="memory-front"><strong></strong><small></small></span>';
    button.addEventListener('click', () => flipMemoryCard(card.id));
    board.appendChild(button);
  });
}

function flipMemoryCard(id) {
  const card = memoryCards.find((item) => item.id === id);
  if (!card || card.open || card.matched || openCards.length === 2) return;
  card.open = true;
  openCards.push(card);
  updateMemoryCard(card);
  if (openCards.length < 2) return;

  memoryMoves += 1;
  document.getElementById('memoryMoves').textContent = `${memoryMoves} movimentos`;
  const [first, second] = openCards;
  if (first.key === second.key) {
    first.matched = true;
    second.matched = true;
    openCards = [];
    updateMemoryCard(first);
    updateMemoryCard(second);
    return;
  }

  setTimeout(() => {
    first.open = false;
    second.open = false;
    updateMemoryCard(first);
    updateMemoryCard(second);
    openCards = [];
  }, 700);
}

function updateMemoryCard(card) {
  const element = document.querySelector(`[data-card-id="${card.id}"]`);
  if (!element) return;
  element.classList.toggle('is-open', card.open);
  element.classList.toggle('is-matched', card.matched);
  element.querySelector('strong').textContent = card.key;
  element.querySelector('small').textContent = card.detail;
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.subject-tab').forEach((tab) => tab.addEventListener('click', () => changeSubject(tab.dataset.subject)));
  document.getElementById('nextQuestion').addEventListener('click', () => {
    if (currentQuestion === quizData[currentSubject].questions.length - 1) {
      saveQuizProgress();
      currentQuestion = 0;
      correctAnswers = 0;
    } else {
      currentQuestion += 1;
    }
    renderQuestion();
  });
  document.getElementById('resetMemory').addEventListener('click', createMemoryBoard);
  const progress = getStudyProgress();
  document.getElementById('heroGamesPlayed').textContent = progress.gamesPlayed || 0;
  renderQuestion();
  createMemoryBoard();
});
