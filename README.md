# 🔱 POSEIDON SYNC

## Um Ecossistema de Inteligência Artificial para Sincronização de Operações Portuárias

> Projeto finalista do **Porto Hack Santos 2025**, desenvolvido pela equipe **Brainstorm**.

---

### O Problema: A Dessincronização do Porto

As operações em um porto complexo como o de Santos envolvem dezenas de stakeholders. Nossa pesquisa, baseada nos materiais do desafio, identificou "dores" críticas causadas pela falta de comunicação em tempo real:

* **Informações Defasadas:** Terminais Portuários frequentemente lidam com informações sobre "Navios Atracados" e "Atracações Programadas" que estão desatualizadas em relação à realidade.
* **Atraso na Confirmação:** Para os Rebocadores, a informação que mais sofre atraso é a "confirmação do horário das manobras", o que impacta diretamente o planejamento e a eficiência.
* **Comunicação Manual:** A Autoridade Portuária ainda depende de informações tramitadas por e-mail para processos críticos como atracação e desatracação.

Essa fragmentação gera retrabalho, atrasos e custos desnecessários em toda a cadeia logística.

### ✨ Nossa Solução: POSEIDON SYNC

O POSEIDON SYNC é uma plataforma centralizadora que utiliza Inteligência Artificial para criar uma "orquestra sincronizada" no porto. Nossa missão é transformar dados fragmentados em inteligência acionável e colaborativa.

A plataforma consiste em uma interface web moderna com um painel de status em tempo real e um poderoso chatbot, que serve como ponto único de contato para consulta de informações e disparo de ações.

### 📸 Demonstração Visual

**Interface Principal:**
<img width="1873" height="966" alt="Página Principal" src="https://github.com/user-attachments/assets/002453ca-08d2-46c6-aa89-528f25aba0fa" />


**Página de Login:**
<img width="1873" height="969" alt="Tela de Login" src="https://github.com/user-attachments/assets/bd7090d1-6e1d-4f0a-9b0b-3af616533892" />


**Interação com a IA:**
<img width="1031" height="722" alt="Chat com IA" src="https://github.com/user-attachments/assets/a2a7d8dd-35f7-45f8-9b9d-54b3fd565bde" />


---

### 🚀 Funcionalidades Principais

* **Painel de Status em Tempo Real:** Um widget com informações vitais sobre as condições atuais em Santos (horário, clima, maré).
* **Chatbot com IA Conversacional:** Um assistente inteligente capaz de entender perguntas em linguagem natural, buscar informações em múltiplas APIs e fornecer resumos detalhados sobre o status dos navios.
* **Sistema de Alertas Inteligentes:** A IA pode interpretar comandos para enviar notificações para canais específicos no Slack, ou até mesmo inferir quais stakeholders devem ser alertados com base no conteúdo da mensagem.
* **Interface Futurista:** Um design moderno em "dark mode" com efeitos de "vidro fosco" (Glassmorphism) e micro-interações para uma experiência de usuário agradável.
* **Autenticação:** Páginas dedicadas para Login e Cadastro.

---

### 💻 Tecnologias Utilizadas

#### [**Frontend**](Front-end)
* **HTML5**
* **CSS3** (Layout com Flexbox, Animações com Keyframes, Design Responsivo)
* **JavaScript (ES6+)** (Manipulação do DOM, `fetch` API para comunicação assíncrona com o backend)

#### [**Backend**](Back-end/WorkflowFinal.json) 
* **n8n.io:** Plataforma low-code utilizada como orquestrador principal do fluxo de trabalho.
    * **Webhook:** Para receber as requisições do frontend.
    * **AI Agent:** Para processar a linguagem natural e utilizar ferramentas.
* **OpenAI API:** Como modelo de linguagem para a inteligência do chatbot.
* **Slack API:** Para o envio de notificações aos canais dos stakeholders.

---

### 🛠️ Como Executar o Projeto

#### **Frontend**
1.  Baixe os arquivos do repositório.
2.  Certifique-se de ter a extensão **"Live Server"** no Visual Studio Code.
3.  Clique com o botão direito no arquivo `index.html` e selecione "Open with Live Server".

#### **Backend**
1.  Crie uma instância do n8n.
2.  Importe o arquivo **`WorkflowFinal.json`** para criar um novo workflow.
3.  Configure as credenciais necessárias para os nós (OpenAI, Slack, etc.).
4.  Copie a **URL de Produção** do nó `Webhook` e cole na variável `N8N_WEBHOOK_URL` dentro do arquivo `script.js`.
5.  **Ative** o workflow.

---

### 👥 Equipe Brainstorm

* **[Rodrigo Raw]** - Líder e Desenvolvedor FullStack
* **[Cássio Weissheimer]** - Desenvolvedor Backend
* **[Henrique Santos]** - Desenvolvedor Backend
* **[Vitor Pinheiro]** - Pitch e Pesquisa

---

### 🙏 Agradecimentos

Agradecemos imensamente à **ABTRA**, ao **Instituto Amigu** e a todos os mentores do **Porto Hack Santos 2025** pelo suporte, pela organização impecável e pela oportunidade de trabalhar em um desafio tão relevante para o setor portuário brasileiro.
