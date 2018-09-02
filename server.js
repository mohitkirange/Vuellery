const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();

const collections = require('./db.json');

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.set('PORT', process.env.PORT || 5555);


app.get('/api/collections', (req, res) => {
  res.json(collections);
});


app.listen(app.get('PORT'), () => 
  console.log('Listening at ' + app.get('PORT')))