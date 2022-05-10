const express = require('express')
const app = express()
const fs = require('fs')
const { filter } = require('minimatch')
const Contenedor = require('./class')


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
    const randomNumber = Math.round((Math.random()*3))
    if(randomNumber === 0){
        randomNumber++
    }
    const filterRandom = productsParsed.find((x)=> x.id === randomNumber)
    console.log(filterRandom)
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
