var  express = require('express');
var data = require('./data/test.json');


/*

import data from './data/test.json';

*/



var app = express();
const PORT = 3000;




//app.use(express.static(__dirname));



//app.listen(3000);
app.get('/',(req,res)=>{
    res.send(`app is running on port ${PORT}`);


});
app.listen(PORT,()=>{

    console.log(`app is running on port ${PORT}`);
    console.log(data);
    



});



