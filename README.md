✈️ Flight On Time — Front-end

Interface web para consulta de predição de atraso de voos, permitindo que o usuário envie dados do voo, visualize o resultado da predição e compare consultas anteriores em um histórico organizado.

📌 Visão Geral

O Flight On Time (Front-end) foi desenvolvido em React, com foco em:

Boa experiência do usuário
Visualização clara das predições
Comparação entre múltiplas consultas
Organização e manutenibilidade do código
Comunicação eficiente com a API de predição
A aplicação consome uma API REST responsável por calcular a probabilidade de atraso dos voos.

🚀 Tecnologias Utilizadas

- React
- Vite
- Axios
- Tailwind CSS
- JavaScript (ES6+)

🖥️ Requisitos para Rodar o Projeto

Antes de iniciar, certifique-se de ter instalado em sua máquina:
Node.js (versão 18)
npm
Navegador moderno (Chrome, Edge, Firefox)

Verificar versões:
node -v
npm -v

📥 Clonando o Repositório
git clone https://github.com/Projeto-3-FlightOnTime/frontend.git
cd frontend

📦 Instalação das Dependências
Na raiz do projeto, execute:
npm install

⚙️ Configuração de Ambiente (.env)
A URL da API utilizada pelo front-end é configurada por variável de ambiente.
📄 Criar o arquivo .env
Na raiz do projeto, crie um arquivo chamado .env:
VITE_API_URL=http://url-do-backend

📌 Exemplo:
VITE_API_URL=http://localhost:8000


⚠️ Importante:
Adicione o arquivo .env ao .gitignore para evitar versionamento de dados sensíveis.
▶️ Executando o Projeto

Para rodar o projeto em ambiente de desenvolvimento:
npm run dev

A aplicação ficará disponível em:
http://localhost:5173

📂 Estrutura de Pastas
src/
├── components/
│   ├── Button.jsx
│   ├── SelectField.jsx
│   ├── FlightForm.jsx
│   └── FlightHistory.jsx
│
├── data/
│   ├── companhiasOptions.js
│   └── aeroportosOptions.js
│
├── hooks/
│   └── useFLightPrediction.js
│
├── utils/
│   ├── dateUtils.js
│   └── labelUtils.js
│
├── App.jsx
└── main.jsx

📁 Descrição das Pastas
components/
Componentes reutilizáveis da interface (botões, selects, cards, forms, etc.)

data/
Dados estáticos e listas auxiliares (companhias aéreas, aeroportos)

hooks/
Hooks customizados para:
Resquisicoes para o back-end

utils/
Funções utilitárias:
Formatação de datas
Formatação de label input

Validações de dados

📡 Comunicação com a API

O front-end consome uma API REST responsável pela predição de atraso de voos.

🔗 Endpoint Consumido
POST /predict

A URL base do endpoint é definida pela variável:

VITE_API_URL

📤 Exemplo de Payload Enviado
{
  "cod_companhia": "GLO",
  "cod_aeroporto_origem": "SBFZ",
  "cod_aeroporto_destino": "SBGL",
  "data_hora_partida": "2025-12-31T12:00:00.000Z"
}

📥 Exemplo de Resposta da API
{
  "status_predicao": "Pontual",
  "probabilidade": 0.30,
}

🧠 Funcionamento do Front-end
📋 Envio de Dados

Usuário preenche o formulário com dados do voo
Todos os campos são obrigatórios
Aeroporto de origem e destino não podem ser iguais

🔮 Resultado da Predição

Após uma requisição bem-sucedida:
O resultado da predição é exibido em um card
Os dados do voo são apresentados de forma amigável
O formulário é automaticamente resetado

📊 Histórico de Consultas

Cada predição bem-sucedida é salva no estado da aplicação
Os resultados são exibidos em lista
Permite comparação entre múltiplas consultas
Área de resultados possui scroll interno, evitando quebra de layout

🎨 Interface e Experiência do Usuário

Cards compactos e organizados
Labels amigáveis (descrições no lugar de códigos)
Layout totalmente responsivo

Feedback visual para:
Carregamento
Erros

Resultado da predição
🔐 Boas Práticas Aplicadas

Uso de variáveis de ambiente
Separação clara de responsabilidades
Cpmponentização
Hooks customizados
Validação no front-end
Uso correto de key em listas
Código limpo e organizado

🛠️ Possíveis Melhorias Futuras

Botão para limpar histórico
Testes automatizados

👨‍💻 Autor

Ayran Vieira
Desenvolvedor Full Stack

📧 Email: ayrandeveloper@gmail.com
🔗 LinkedIn: linkedin.com/in/ayran-vieira-dev
📸 Instagram: @ayran.code