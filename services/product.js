const db = require('../dbc/dbconnect');

class ProductService{
    static table = 'product';

    static async getTop(limit = 5){
        return await db(ProductService.table).select().where('productViewed', '>', 0).orderBy('productViewed', 'desc').limit(limit);
    }
    static async getAll(){
        return await db(ProductService.table).select().orderBy('productViewed', 'desc');
    }

    static async getOneById(id){
        return await db(ProductService.table).where('id', '=', parseInt(id)).first();
    }

    static async create(data){
        return await db(ProductService.table).insert(data);
    }

    static async updateById(id, data){
        return await db(ProductService.table).where('id', '=', id).update(data);
    }

    static async delete(id){
        return await db(ProductService.table).where('id', '=', id).del();
    }

    static async visit(id){
        const product = await ProductService.getOneById(id);
        let count =  parseInt(product.productViewed) + 1;
        await ProductService.updateById(id, {productViewed: count});
        return await ProductService.getOneById(id);
    }
}

module.exports = ProductService;