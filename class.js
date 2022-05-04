const fs = require('fs')

class Contenedor {
    
    constructor(file) {
        this.file = file
    }
    static idCounter = 1

    async save(product) {
        product.id = Contenedor.idCounter++
        const contenido = JSON.parse(await fs.promises.readFile(this.file))
        contenido.push(product)
        await fs.promises.writeFile(this.file, JSON.stringify(contenido))
    }
    async getById(id) {
        const contenido = JSON.parse(await fs.promises.readFile(this.file))
        const [filtrado] = contenido.filter((prod)=> prod.id === id)
        return filtrado
    }
    async getAll() {
        try {
            const contenido = await fs.promises.readFile(this.file)
            console.log('contenido ==> ', contenido)
            if(JSON.parse(contenido)){
                const parseContenido = JSON.parse(contenido)
                return parseContenido
            }else{
                return []
            }
        } catch (error) {
            console.log('err', error);
            return []
        }
    }
    async deleteById(id) {
        const contenido = JSON.parse(await fs.promises.readFile(this.file))
        const prodEliminado = contenido.filter((prod)=> prod.id !== id)
        return prodEliminado
    }
    async deleteAll() {
        try {
            const contenido = await fs.promises.readFile(this.file)
            const nuevoContenido = await fs.promises.writeFile(this.file, JSON.parse('[]'))
            return []
        } catch (error) {
            console.log('err', error);
            return []
        }      
    }
}
module.exports = Contenedor
