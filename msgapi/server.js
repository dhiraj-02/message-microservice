const axios = require('axios');
const express = require('express');

const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());

app.use(express.json());

app.use(bodyParser.urlencoded({extended : true}));

app.post("/sendotp",async(req,res)=>{
    var num = req.body.number;
    console.log(num);
    var otp = Math.floor(1000 + Math.random() * 9000);
    for(var i=0;i<=1000;i++){};
    console.log(otp);
    const encodedParams = new URLSearchParams();
    encodedParams.set('sms', num);
    encodedParams.set('message', otp);
    encodedParams.set('senderid', 'MyCompany');
    encodedParams.set('schedule', '1377959755');
    encodedParams.set('return', 'http://yourwebsite.com');
    encodedParams.set('key', '39A75FC4-446D-C195-626D-1513DE2CFFDA');
    encodedParams.set('username', '01fe20bcs108@kletech.ac.in');

    const options = {
        method: 'POST',
        url: 'https://inteltech.p.rapidapi.com/send.php',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': '10e8fd0a24mshf748a1ac786c18cp178f6djsnf843fbe55c55',
            'X-RapidAPI-Host': 'inteltech.p.rapidapi.com'
        },
        data: encodedParams,
    };

    try{
        const response = await axios.request(options);
        console.log(response.data);
        //var response = {"data":"error"};
        if(response.data.length<150)
        {
            res.json({otp:"error"});
        }
        else{
            res.json({otp: otp});
        }

    } catch (error) {
        console.error(error);
        res.status(400).json({otp:"error"});
    }
})

app.listen(9000);

