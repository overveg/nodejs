var request = require('request');
var cheerio = require('cheerio');


request('http://cbr.ru/Queries/AjaxDataSource/80028?page=0&IsEng=false&type=100&_=1611511961951', function (error, response, html) {
    if (!error && response.statusCode == 200) {
        console.log('cbr*******************************************');

        var jsonData = JSON.parse(html);

        for (var i = 0; i < jsonData.length; i++) {
            console.log(jsonData[i].name_doc);
        }       
    } else {
        console.log(error, response.statusCode);
    }
});

request('http://pass-sk.ru/press-sluzhba/article?page=15', function (error, response, html) {
    if (!error && response.statusCode == 200) {

        var $ = cheerio.load(html);
        console.log('Новости Ставрополья********************************************');
        $('.news-text-page .h2 a').each(function(i, element){
            console.log($(this).text());
        });
    } else {
        console.log(error, response.statusCode);
    }
});

request('https://nplus1.ru/', function (error, response, html) {
    if (!error && response.statusCode == 200) {
        console.log('N+1********************************************');
        var $ = cheerio.load(html);
        $('.item-news h3').each(function(i, element){
            console.log($(this).text());
        });
    } else {
        console.log(error, response.statusCode);
    }
});