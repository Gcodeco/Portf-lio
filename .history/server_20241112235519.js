const express = require('express');
const path = require('path'); // Importando o módulo path para facilitar o caminho dos arquivos
const app = express();


app.use(express.static(path.join(__dirname, 'public')));

// Servindo o arquivo HTML corretamente
app.get('/', (req, res) => {
    // Aqui estamos enviando o arquivo 'index.html' que deve estar na pasta 'public'
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Configuração da porta
const PORT = process.env.PORT || 3000;

// Inicializando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na http://localhost:${PORT}`);
});
