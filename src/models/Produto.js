const mongoose = require('mongoose');

const ProdutoSchema = mongoose.Schema({
    nome_produto: String,
    preco_produto: String,
});

module.exports = mongoose.model('Produto', ProdutoSchema);