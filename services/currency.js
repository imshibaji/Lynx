const db = require('../dbc/dbconnect');

class CurrencyService{
    static table = 'currency';
    static async set(datas){
        await db(CurrencyService.table).insert({data: datas});
    }

    static async get(){
        return await db(CurrencyService.table).first();
    }

    static async delete(data){
        return await db(CurrencyService.table).first().del();
    }
}

module.exports = CurrencyService;