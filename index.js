const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, DevOps!')
});

app.get('/api/add',(req,res)=>{
    let num1 = parseInt(req.query.a) || 0;
    let num2 = parseInt(req.query.b) || 0;
    let sum = num1 + num2;
    res.json({sum:sum});
})

app.get('/api/greet',(req,res)=>{
    const name = req.query.name || 'Guest';
    res.send(`Hello, ${name}!`);
});

app.get('/new-route',(req,res)=>{
    res.send("This is a new route!");
});

app.get('/deploy',(req,res)=>{
    res.send("EC2 Deployment Working Successfully")
});


module.exports = app;

if(require.main===module){
    app.listen(3000,()=>{
        console.log('Server is running on port 3000');
    });
}
