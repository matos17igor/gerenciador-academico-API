# Gerenciador de Tarefas Acadêmicas - API 📚

Uma API RESTful desenvolvida em Node.js para a gestão de tarefas e compromissos.

## 🛠️ Tecnologias Utilizadas

- **Node.js** com **Express** (Framework principal)
- **MySQL** com o pacote `mysql2` (Banco de dados relacional)
- **JWT (JSON Web Token)** (Autenticação e segurança de rotas)
- **Bcrypt** (Criptografia de senhas)

## 🚀 Como executar o projeto localmente

Siga o passo a passo abaixo para rodar a API na sua máquina:

### 1. Pré-requisitos

Você precisará ter instalado na sua máquina:

- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/) (Pode usar o MySQL Workbench para facilitar)

### 2. Clonar o repositório

Abra o seu terminal e rode o comando abaixo:

```bash
git clone [https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git](https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git)
cd gerenciador-academico
```

### 3. Instalar as dependências

Dentro da pasta do projeto, instale os pacotes necessários:

```bash
npm install
```

### 4. Configurar as Variáveis de Ambiente

Crie um arquivo chamado `.env` na raiz do projeto e preencha com as configurações do seu banco de dados e a sua chave secreta do JWT:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha_do_mysql
DB_NAME=nome_do_seu_banco
JWT_SECRET=sua_chave_secreta_super_segura
PORT=3000
```

### 5. Iniciar o Servidor

Com tudo configurado, basta rodar o comando:

```bash
npm run dev
```

O servidor iniciará e estará escutando na porta `http://localhost:3000`.

---

## 🔗 Endpoints da API

Abaixo estão as rotas disponíveis na aplicação.

### 👤 Autenticação e Usuários

- `POST /users/register` - Cadastra um novo aluno no sistema.
- `POST /auth/login` - Autentica o aluno e retorna um Token JWT.

### 📝 Tarefas (Necessário Token Bearer)

- `POST /tasks` - Cria uma nova tarefa acadêmica.
- `GET /tasks` - Lista todas as tarefas do aluno logado.
- `PUT /tasks/:id` - Atualiza as informações de uma tarefa específica.
- `DELETE /tasks/:id` - Deleta uma tarefa específica.
