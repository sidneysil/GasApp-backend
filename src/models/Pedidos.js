const mongoose = require("mongoose");

const PedidoSchema = mongoose.Schema({
  pagamento: String,
  produto: String,
  quantidade: String,
  user: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "User" 
    },
  endereco: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "Endereco" 
    },
  total: String,
  createdAtt: String,
});

module.exports = mongoose.model("Pedidos", PedidoSchema);
