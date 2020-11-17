


const { update } = require("../models/Endereco");
const Endereco = require("../models/Endereco");

module.exports = {

    // Registrar endereco
    async store(req, res){
        const data = req.body;
        const {rua, numero, cep , bairro} = data;
        const { user_id } = req.headers

       const endereco = await Endereco.create({
            rua, 
            numero,
            cep,
            bairro,
            user: user_id,

        })
        return res.json(
            endereco
            );
        
    },
    // Mostrar endereco
    async show(req, res) {
        const endereco = await Endereco.find()
        return res.json(endereco);
    },

    // Indice de enderecos

    async index(req, res) {
        const data = req.headers;
        const endereco = await Endereco.findById(data._id);
        return res.json(endereco); 
    },
    // Atualizando valores

    async update(req, res) {
        const data = req.headers;
        const {rua, numero, cep, bairro, user} = req.body;

        const endereco = await Endereco.findByIdAndUpdate(data._id, {
            rua, numero, cep, bairro, user
        },{new: true});
        return res.json(endereco);
    },
    // Deletando valores
    async delete(req, res){
        const data = req.headers;
        const endereco = await Endereco.findByIdAndDelete(data._id)
        return res.json({'message: ' : 'Ok. Deletado com sucesso!'})
    }
}





