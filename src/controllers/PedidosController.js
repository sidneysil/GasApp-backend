const Pedidos = require('../models/Pedidos');

module.exports = {

    async store(req, res) {

        const data = req.body;
        const { pagamento, produto, quantidade, total, user, endereco } = data;

        const pedidos = await Pedidos.create({
            pagamento,
            produto,
            quantidade,
            total,
            user,
            endereco
        })
        return res.json(
            pedidos
        )

    },

}

//.populate('endereco').populate('user')