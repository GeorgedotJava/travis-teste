const express = require('express')
const app = express()


app.get('/', (req, res) =>{
    res.send('Olá Jovem Dinâmico')
})


app.listen(8000, (req, res) => {
    console.log('Server ON')
})