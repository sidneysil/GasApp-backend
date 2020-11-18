const Pedidos = require("../models/Pedidos");

module.exports = {
  async store(req, res) {
    const { pagamento, produto, quantidade, total, user, endereco } = req.body;

    const pedidos = await Pedidos.create({
      pagamento,
      produto,
      quantidade,
      total,
      user,
      endereco,
    });
    return res.json(pedidos);
  },

  async show(req, res) {
    const pedidos = await Pedidos.find().populate("user").populate("endereco");

    return res.json(pedidos);
  },

  async index(req, res) {
    const { pedido_id } = req.headers;

    const pedidos = await Pedidos.findById(pedido_id)
      .populate("user")
      .populate("endereco");

    return res.json(pedidos);
  },

  async update(req, res) {
    const { pagamento, produto, quantidade, total, endereco } = req.body;
    const { pedido_id } = req.headers;

    const pedidos = await Pedidos.findByIdAndUpdate(
      pedido_id,
      {
        pagamento,
        produto,
        quantidade,
        total,
        endereco,
      },
      { new: true }
    );

    return res.json(pedidos);
  },

  async delete(req, res) {
    const { pedido_id } = req.headers;

    await Pedidos.findByIdAndDelete(pedido_id);

    return res.json({'message' : 'Ok. Pedido deletado com sucesso!'});
  },
};
