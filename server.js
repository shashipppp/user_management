const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const api = require('./server/router/api');

const port = 3000;

const app = express();



app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

app.use(express.static(path.join(__dirname,'dist')));
app.use('/card_image',express.static(path.join(__dirname,'images/card')));

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());
app.use(cors());

app.use('/api', api);

app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname,'dist/myapp/index.html'));
});

app.listen(port, function(){
console.log('sever is running on local host: '+ port );
});