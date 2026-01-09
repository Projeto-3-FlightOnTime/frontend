# ✈️ Flight On Time — Front-end

Interface web para consulta de **predição de atraso de voos**, permitindo que o usuário envie dados do voo, visualize o resultado da predição e compare consultas anteriores em uma lista de histórico.

---

## 📌 Visão Geral

O Front-end do **Flight On Time** foi desenvolvido em **React**, com foco em:
- Experiência do usuário
- Visualização clara das predições
- Comparação de resultados
- Boas práticas de organização de código

A aplicação consome uma **API REST** responsável por realizar a predição de atraso de voos.

---

## 🚀 Tecnologias Utilizadas

- **React**
- **Vite**
- **Axios**
- **Tailwind CSS**
- **JavaScript (ES6+)**

---

## 📂 Estrutura de Pastas

```text
src/
├── components/
│   ├── Button.jsx
│   └── SelectField.jsx
├── data/
│   ├── companhiasOptions.js
│   └── aeroportosOptions.js
├── App.jsx
└── main.jsx

# ⚙️ Configuração de Ambiente — Flight On Time (Front-end)

Este documento descreve como configurar o ambiente, executar o projeto e entender o funcionamento do front-end da aplicação **Flight On Time**.

---

## 📄 Configuração de Ambiente (.env)

A URL da API utilizada pelo front-end é configurada via variável de ambiente.

### 📁 Criar o arquivo `.env`

Na raiz do projeto, crie um arquivo chamado `.env` com o seguinte conteúdo:

``env
VITE_API_URL=http://(url do back-end)

Adicione o arquivo .env ao .gitignore para evitar versionamento de dados sensíveis:

▶️ Iniciando o Projeto
1️⃣ Pré-requisitos

## Certifique-se de ter instalado:

Node.js (versão 18 ou superior recomendada)
npm ou yarn

2️⃣ Instalar as dependências

No terminal, na pasta raiz do projeto, execute:

npm install

ou, se estiver usando yarn:

yarn install

3️⃣ Executar o projeto em ambiente de desenvolvimento
npm run dev

O projeto ficará disponível em:

http://localhost:5173

📡 Comunicação com a API

O front-end se comunica com uma API REST responsável pela predição de atrasos de voo.

Endpoint Consumido
POST /predict


A URL base do endpoint é definida pela variável VITE_API_URL.

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
  "mensagem": "Alta chance de o voo ocorrer sem atrasos."
}

🧠 Funcionamento do Front-end
📋 Envio de Dados
O usuário preenche o formulário com os dados do voo
Todos os campos são obrigatórios
Origem e destino não podem ser iguais

🔮 Resultado da Predição
Após uma requisição bem-sucedida:
O resultado da predição é exibido
Os dados do voo enviado também são mostrados
Os inputs do formulário são automaticamente resetados

📊 Histórico de Consultas
Cada consulta bem-sucedida é salva no estado da aplicação
Os resultados são exibidos um abaixo do outro
Permite comparação entre diferentes consultas
A área de resultados possui scroll interno, evitando que a página quebre

🎨 Interface e Experiência do Usuário
Cards compactos para exibição dos resultados
Labels amigáveis (nome descritivo ao invés de códigos)
Layout responsivo
Scroll interno na área de resultados
Feedback visual para erro e carregamento

🧩 Componentes Envolvidos
🔹 Área de Resultado
Exibe:
Companhia aérea
Aeroporto de origem
Aeroporto de destino
Data e hora do voo
Status da predição
Probabilidade de atraso/pontualidade

🔐 Boas Práticas Aplicadas
Uso de variáveis de ambiente
Separação de responsabilidades
Componentização
Validação no front-end
Uso correto de key em listas
Código limpo e organizado

🛠️ Possíveis Melhorias Futuras

Persistência do histórico com localStorage
Filtro e ordenação dos resultados
Botão para limpar histórico
Melhorias visuais por status da predição
Testes automatizados

👨‍💻 Autor
Ayran Vieira
Desenvolvedor Full Stack
📧 Email: ayrandeveloper@gmail.com
🔗 LinkedIn: https://www.linkedin.com/in/ayran-vieira-dev
📸 Instagram: @ayran.code
