const express = require('express')
const app = express()
const fs = require('fs')


app.get('/productos', async (req, res) => {
    const products = await fs.promises.readFile('productos.txt')
    const productsParsed = JSON.parse(products)
    res.send({
        msg: 'Productos encontrados',
        products: productsParsed,
        code: 2

    })
})
app.get('/productoRandom', async (req, res) => {
    const products = await fs.promises.readFile('productos.txt')
    const productsParsed = JSON.parse(products)
    let randomNumber = Math.round((Math.random()*3))
    if(randomNumber === 0){
        while(randomNumber <= 3){
            randomNumber++
        break;
        }
    }
    const filterRandom = productsParsed.find((x)=> x.id === randomNumber)
    res.send({
        msg: 'Productos encontrados',
        products: filterRandom,
        code: 2

    })
})
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log('Servidor corriendo en puerto:', PORT)
})
server.on("error", error => console.log('Error en el server:', error))
