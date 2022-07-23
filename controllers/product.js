var Product = require('../services/product');
var nd = require('../helpers/network_data');

class ProductController{
    static async list(req, res){
       const products = await Product.getAll();
       const data = await nd((req.query.from || 'USD') , (req.query.to || 'CAD'));

       const mproducts = products.map((p) => {
        let product = p;
        product.price = (p.price * data.result).toFixed(2);
        return product;
       })
       res.json(mproducts);
    }

    static async details(req, res){
        const data = await nd((req.query.from || 'USD') , (req.query.to || 'CAD'));
        let product= await Product.visit(req.params.id);
        product.price = (product.price * data.result).toFixed(2);
        res.json(product);
    }
}

module.exports = ProductController;