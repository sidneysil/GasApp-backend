const User = require('../models/User');
const Endereco = require('../models/Endereco');


module.exports =  { 

    async show(req, res){
        const { user_id } = req.headers;
        const enderecos = await Endereco.find({
            user: user_id
        })
        return res.json(enderecos);
    }
}