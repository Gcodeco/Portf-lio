const express = require ('express');
const app = express();
const indexRoutes = require('/routes/index')

app.use('/', indexRoutes)

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('index.html')
})


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta${PORT}`);
});