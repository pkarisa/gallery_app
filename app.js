
// Set a static folder
app.use(express.static('public'));


app.get('/', (request,response)=>{
   response.render('index');
})


// Define the port number
const PORT = 5000;

app.listen(PORT, ()=>{
   console.log(`Server is listening on port ${PORT}`)
});