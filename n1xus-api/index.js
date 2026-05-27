const express = require('express');
const app = express();
app.use(express.json());


const db = {
    clientes: [],
    funcionarios: [],
    produtos: []
};


app.get('/clientes', (req, res) => res.json(db.clientes));

app.post('/clientes', (req, res) => {
    const { nome, email, telefone, cpf } = req.body;
    // Gerando ID usando o timestamp atual (evita erro de biblioteca)
    const novo = { id: Date.now().toString(), nome, email, telefone, cpf };
    db.clientes.push(novo);
    res.status(201).json(novo);
});

app.put('/clientes/:id', (req, res) => {
    const index = db.clientes.findIndex(c => c.id === req.params.id);
    if (index === -1) return res.status(404).json({ erro: "Não encontrado" });
    db.clientes[index] = { ...db.clientes[index], ...req.body, id: req.params.id };
    res.json(db.clientes[index]);
});

app.delete('/clientes/:id', (req, res) => {
    const index = db.clientes.findIndex(c => c.id === req.params.id);
    if (index === -1) return res.status(404).json({ erro: "Não encontrado" });
    db.clientes.splice(index, 1);
    res.status(204).send();
});




app.get('/funcionarios', (req, res) => res.json(db.funcionarios));

app.post('/funcionarios', (req, res) => {
    const { nome, cargo, setor } = req.body;
    const novo = { id: (Date.now() + 1).toString(), nome, cargo, setor };
    db.funcionarios.push(novo);
    res.status(201).json(novo);
});




app.get('/produtos', (req, res) => res.json(db.produtos));

app.post('/produtos', (req, res) => {
    const { nome, quantidade, preco } = req.body;
    const novo = { id: (Date.now() + 2).toString(), nome, quantidade, preco };
    db.produtos.push(novo);
    res.status(201).json(novo);
});

// Inicialização
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`✅ Servidor NexusStore Online!`);
    console.log(`📍 Acesse: http://localhost:${PORT}/clientes`);
});