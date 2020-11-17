const express = require('express');
const routes = new express.Router();

const User = require('./controllers/UserController');
const Endereco = require('./controllers/EnderecoController');
const VariacaoPreco = require('./controllers/VariacaoPrecoController');
const EnderecoUserController = require('./controllers/EnderecoUserController');
const Produto = require('./controllers/ProdutoController');
const Pedidos = require('./controllers/PedidosController');

//routes.get  listagem de informacoes
// routes.post  enviar informacoes
// routes.put  atualiza informacoes
// routes.delete  deleta informacoes

routes.get('/', (req, res) => {
    return res.json({
        'message' : 'Ola mundo'
    })
});
// rotas do usuario
routes.post('/adduser', User.store);
routes.get('/user', User.show);
routes.get('/user_id', User.index);
routes.put('/userupdate', User.update);
routes.delete('/deleteuser', User.delete);
// rotas do endereco
routes.post('/addendereco', Endereco.store);
routes.get('/enderecos', Endereco.show);
routes.get('/endereco_id', Endereco.index);
routes.put('/enderecoupdate', Endereco.update);
routes.delete('/deletarendereco', Endereco.delete);
routes.get('/endereco_user', EnderecoUserController.show);
// rotas da variacao de preco
routes.post('/criar_variacao', VariacaoPreco.store);
routes.get('/variacao', VariacaoPreco.show);
routes.get('/variacao_id', VariacaoPreco.index);
routes.put('/atualiza_variacao', VariacaoPreco.update);
routes.delete('/deleta_variacao', VariacaoPreco.delete);
// rotas do produto
routes.post('/criar_produto', Produto.store);
routes.get('/produtos', Produto.show);
routes.get('/produto_id', Produto.index);
routes.put('/atualiza_produto', Produto.update);
routes.delete('/deleta_produto', Produto.delete);

// rotas do pedido

routes.post('/criar_pedido', Pedidos.store);


module.exports = routes;
