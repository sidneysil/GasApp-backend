const mongoose = require("mongoose");

const EnderecoSchema = new mongoose.Schema({
    rua: String, 
    numero: String,
    cep: String,
    bairro: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,    
        ref: 'User'
    }
})
module.exports = mongoose.model("Endereco", EnderecoSchema)