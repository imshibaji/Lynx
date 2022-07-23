const { default: axios } = require("axios");
const CS = require('../services/currency');

async function getNetWorkData(from, to){
    let data, o_frm, o_to;
    let apiData = await CS.get();

    if(typeof apiData != 'undefined'){
      data = JSON.parse(apiData.data);
      o_frm = data.query.from ;
      o_to = data.query.to;
      // console.log(data);
    }
    if(data == null || o_frm != from || o_to != to){
        o_frm = from;
        o_to = to;
        const requestOptions = {
          headers: {
            "apikey": process.env.API_KEY || ""
          }
        };

        const res = await axios.get("https://api.apilayer.com/currency_data/convert?to="+to+"&from="+from+"&amount=1", requestOptions);
        await CS.delete();
        // console.log(res.toString());
        await CS.set(res.data);
    }
    
    apiData = await CS.get();
    if(typeof apiData != 'undefined'){
      return JSON.parse(apiData.data);
    }else{
      return {};
    }
}

module.exports = getNetWorkData;