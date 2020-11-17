const Produto = require('../models/Produto');


module.exports = {


    // Registrar produto

    async store(req, res) {
        const { nome_produto, preco_produto } = req.body;

        const produto = await Produto.create({
            nome_produto,
            preco_produto,
        })

        return res.json(produto);
    },

    // Mostrar produto

    async show(req, res) {
        const produto = await Produto.find()
        return res.json(produto);
    },

    // Indice de produtos
    async index(req, res) {
        const { _id } = req.headers;
        const produto = await Produto.findById(_id)
        return res.json(produto);
    },
    // Atualizar produto

    async update(req, res) {
        const { _id } = req.headers;
        const { nome_produto, preco_produto } = req.body;

        const produto = await Produto.findByIdAndUpdate(_id, 
            { nome_produto, preco_produto }, { new: true });

        return res.json(produto);
    },

    // Deletar produto

    async delete(req, res) {
        const { _id } = req.headers;
        const produto = await Produto.findByIdAndDelete(_id)
        return res.json({'message' : 'Ok. Produto deletado com sucesso!'});
    }
}
