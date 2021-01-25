const express = require('express');
const fs = require('fs');

const app = express();

https = require('https');

const IAM_TOKEN = 't1.9euelZqVlpLGlpfHjcbGmJaPjpuPze3rnpWano-KyZmLy5WRl8jPj4uSjszl8_d9WEV_-e9_dnph_N3z9z0HQ3_57392emH8.9NLNRfkjz1miNyt2uw0FVMFUTseSVmTfcgI11tH8LXKzKOVrO4irAQrv4iDW8-va85pYLtiOQ-fOBW1GBG6zBQ';
const FOLDER = 'b1g5jmfog88nao5jcctg'

app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/translate', (req, res) => {

    var options = {
        hostname: 'translate.api.cloud.yandex.net',
        path: '/translate/v2/translate/',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + IAM_TOKEN
        }
    }

    var req_t = https.request(options, (res_t) => {
        console.log('STATUS: ' + res_t.statusCode);
        console.log('HEADERS: ' + JSON.stringify(res_t.headers));
        res_t.setEncoding('utf8');
        res_t.on('data', function (chunk) {
            res.send('Перевод: ' + JSON.parse(chunk).translations[0].text);
        });
    })
    try {
        req_t.write(`{
            "folder_id": "${FOLDER}",
            "texts": ["`+ req.body.text_to_translate + `"],
            "targetLanguageCode": "en"
        }`);
      } catch (error) {
        res.send(`Произошла ошибка ${error}`);
      }
    
    req_t.end();


});

app.listen(3000, () => console.log('Listening on port 3000'));

