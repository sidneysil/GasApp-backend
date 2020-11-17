const App = require('./App');
const mongoose = require('mongoose');

const server = App;
mongoose.connect('mongodb+srv://apigas:ospYhKMOyMJCp3Qn@bancogas.mymio.mongodb.net/gasdb?retryWrites=true&w=majority', {
    useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true,
});

server.listen(3000, () => {
    console.log('Servidor rodando...');
});