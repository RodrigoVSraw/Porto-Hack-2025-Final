// --- LÓGICA PARA ABRIR/FECHAR BARRA LATERAL ---
const menuBtn = document.getElementById('menu-btn');
const sidebarMenu = document.getElementById('sidebar-menu');
const closeBtn = document.getElementById('close-btn');
const overlay = document.getElementById('overlay');
const mainBanner = document.querySelector('.main-banner');

function adjustSidebarPosition() {
  if (!mainBanner || !sidebarMenu) return;
  const bannerHeight = mainBanner.offsetHeight;
  sidebarMenu.style.top = bannerHeight + 'px';
  sidebarMenu.style.height = `calc(100vh - ${bannerHeight}px)`;
}

window.addEventListener('load', adjustSidebarPosition);
window.addEventListener('resize', adjustSidebarPosition);

function openMenu() {
  if (!sidebarMenu || !overlay || !menuBtn) return;
  sidebarMenu.classList.add('open');
  overlay.classList.add('show');
  menuBtn.classList.add('active');
}

function closeMenu() {
  if (!sidebarMenu || !overlay || !menuBtn) return;
  sidebarMenu.classList.remove('open');
  overlay.classList.remove('show');
  menuBtn.classList.remove('active');
}

if (menuBtn && closeBtn && overlay) {
  menuBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);
}


// --- LÓGICA DO WIDGET DE STATUS (RELÓGIO E DATA) ---
function updateClock() {
  const timeElement = document.getElementById('time-display');
  const dateElement = document.getElementById('date-display');

  if (timeElement && dateElement) {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    timeElement.innerText = `${hours}:${minutes}:${seconds}`;

    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    const dateString = now.toLocaleDateString('pt-BR', options);
    dateElement.innerText = dateString.charAt(0).toUpperCase() + dateString.slice(1);
  }
}

// Inicia o relógio apenas se os elementos do chat/widget existirem
if (document.getElementById('chat-messages')) {
  setInterval(updateClock, 1000);
  updateClock();
}


// --- LÓGICA DO CHAT (só roda na página principal) ---

if (document.getElementById('chat-messages')) {

  const N8N_WEBHOOK_URL = 'https://n8n.hackathon.souamigu.org.br/webhook/Brainstorm';

  const chatMessages = document.getElementById('chat-messages');
  const userInput = document.getElementById('user-input');
  const sendBtn = document.getElementById('send-btn');

  userInput.addEventListener('input', () => {
    if (userInput.value.trim() !== '') {
      sendBtn.classList.add('typing');
    } else {
      sendBtn.classList.remove('typing');
    }
  });

  function addMessage(text, ...classes) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', ...classes);
    messageElement.innerText = text;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return messageElement;
  }

  async function handleUserMessage() {
    const messageText = userInput.value.trim();
    if (messageText === '') return;

    addMessage(messageText, 'user');
    userInput.value = '';
    sendBtn.classList.remove('typing');

    const typingMessage = addMessage("Pensando", "bot", "typing");

    try {
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question: messageText,
        }),
      });

      if (typingMessage) {
        typingMessage.remove();
      }

      if (!response.ok) {
        throw new Error('Erro na comunicação com o servidor.');
      }

      const data = await response.json();

      const botResponse = data.output || 'Desculpe, não consegui processar sua pergunta.';
      addMessage(botResponse, 'bot');

    } catch (error) {
      if (typingMessage) {
        typingMessage.remove();
      }
      console.error('Erro:', error);
      addMessage('Houve um problema com o assistente. Tente novamente mais tarde.', 'bot');
    }
  }

  sendBtn.addEventListener('click', handleUserMessage);
  userInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      handleUserMessage();
    }
  });
}