
// Set a static folder
app.use(express.static('public'));


app.get('/', (request,response)=>{
   response.render('index');
})

// Import express package
const express = require('express');
const upload = require('./upload');

app.get('/', (request,response)=>{
   response.render('index');
})

// route to handle image upload
app.post('/upload', (request,response)=>{
   upload(request,response, (err)=>{
       if (err){
           console.log(err)
       }else{
           console.log(request.file)
           response.send('test');
       }
   })
})


// Define the port number
const PORT = 5000;

app.listen(PORT, ()=>{
   console.log(`Server is listening on port ${PORT}`)
});