var  express = require('express');
var data = require('./data/test.json');


/*

import data from './data/test.json';

*/



var app = express();
const PORT = 3000;

app.set('view engine','ejs');




//app.use(express.static(__dirname));



//app.listen(3000);
app.get('/',(req,res)=>{
    var title = "Our Home Page";
 
res.render('pages/index',{title:title});
});
app.listen(PORT,()=>{

    console.log(`app is running on port ${PORT}`);
    console.log(data);
    



});



