# 1. Criar um projeto node.js
- npm init -y

# 2. Ajustar package.json
- Adicionar: Type: "module"
- Adicionar: "main": "server.js"
- Adicionar dentro do script: "dev": "cls && nodemon src/server.js"

# 3. Instalar as dependências
- npm i express dotenv pg @prisma/client @prisma/adapter-pg
- npm i -D nodemon prisma

# 4. inicializar prsima
- npx prisma init --datasource-provider postgresql

# 5. Configurar `.env`
- DATABASE_URL="postegresql://postgresql:amods@localhost:7777/spotify_db"

# 6. Configurar no schema.prisma
- Criar tabelas do banco

# 7. Gerar SQL
- npx prisma migrate dev --name init
- npx prisma generate

# 8. Semear dados no banco
- npx prisma db seed

# 9. Abrir prisma studio
- npx prisma studio

## Casos de erros ou atualizações do banco

### Após alterar schema.prisma
- npx prisma migrate dev --name nome_da_alteração (ex: adicionar_table_users)

### Banco inconsistente (Apaga tudo)
- npx prisma migrate reset

### Apenas popular os dados
- npx prisma db seed

### Dicas
|   comando         | Apaga dados?     | Criar migrations?  | Uso
| -------------     |---------------   | -----------------  | ---------------
|`migrate dev`      |❌ Não           | ✅SIM              | Alterar schema
|`db seed`          |❌ Não           |❌Não               | Popular dados
|`migrate resete`   |✅ SIM           |❌ Não              | Dev only
