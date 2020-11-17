const { update } = require('../models/User');
const User = require('../models/User');

module.exports = {
    
    
    async store(req, res){

        const data = req.body;
        const {name, email, telephone, provider} = data;

        const user = await User.create({
            name,
            email,
            telephone,
            provider
        })
        return res.json(
            user
        )
    },

    async show(req, res){
        const user = await User.find()
        return res.json(user)
    },

    async index(req, res){
        const data = req.headers;
        const user = await User.findById(data._id);
        return res.json(user); 
    },
    // atualiza
    async update(req, res){
        const data = req.headers;
        const {name, email, telephone, provider} = req.body;

        const user = await User.findByIdAndUpdate(data._id, {
            name, email, telephone, provider
        },{new: true});
        return res.json(user);
    },
    // delete
    async delete(req, res){
        const data = req.headers;
        const user = await User.findByIdAndDelete(data._id);
        return res.json({'message': 'Ok'});
    }
}