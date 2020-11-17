const VariacaoPreco = require("../models/VariacaoPreco");

module.exports = {

    async store(req, res) {
        const { cep, variacao } = req.body;
        const { user_id } = req.headers;


        const variacaopreco = await VariacaoPreco.create({
            cep,
            variacao,
        })

        return res.json(
            variacaopreco
        );


    },

    async show(req, res) {
        const variacaopreco = await VariacaoPreco.find()
        return res.json(variacaopreco);
    },

    async index(req, res) {
        const { _id } = req.headers;
        const variacaopreco = await VariacaoPreco.findById(_id);
        return res.json(variacaopreco);
    },

    async update(req, res) {
        const { _id } = req.headers;
        const { cep, variacao } = req.body;

        const variacaopreco = await VariacaoPreco.findByIdAndUpdate(_id,
            { cep, variacao }, { new: true });

        return res.json(variacaopreco);
    },

    async delete(req, res) {
        const { _id } = req.headers;
        const variacaopreco = await VariacaoPreco.findByIdAndDelete(_id)
        return res.json({ 'message': 'Ok. Variacao deletada com sucesso.' });
    }


}