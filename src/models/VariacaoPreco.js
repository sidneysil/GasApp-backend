const mongoose = require('mongoose');

const VariacaoPrecoSchema = mongoose.Schema({
    cep: String,
    variacao: String,
    
});

module.exports = mongoose.model('VariacaoPreco', VariacaoPrecoSchema);