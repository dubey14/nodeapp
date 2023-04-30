const express = require('express');

const app = express();
const port = 9080;

app.use('/test', (request, response) =>{
    console.log(response);
    response.send('success');
});

app.listen(port,(error) => {
  if(!error){
    console.log('Connection successful: ',port);
  }
  else {
    console.log('Connection Unsucessful ',error);
  }
});