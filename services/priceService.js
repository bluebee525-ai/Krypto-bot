const axios = require("axios")

async function getPrice(coin){

const res = await axios.get(
"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,litecoin,tether&vs_currencies=usd"
)

switch(coin){

case "BTC": return res.data.bitcoin.usd
case "ETH": return res.data.ethereum.usd
case "BNB": return res.data.binancecoin.usd
case "LTC": return res.data.litecoin.usd
case "USDT": return res.data.tether.usd

}

}

module.exports = { getPrice }
