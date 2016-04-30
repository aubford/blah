var cheerio = require("cheerio");
var request = require("request");


var getExcuse = function(req, res){
	var url = "http://programmingexcuses.com";
	request(url, function(error, response, html){
		if(!error){
			$ = cheerio.load(html);
			$("a").each(function(){
				res.send($(this).text());
			})
		}
	})
}



module.exports = {
	getExcuse : getExcuse,
}