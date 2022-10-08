const app = require('./src/config/server')
const porta = process.env.PORT;

app.listen(porta, () => console.log(`API rodando na porta ${porta}`))