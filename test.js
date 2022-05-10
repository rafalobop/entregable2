const Contenedor = require('./class')


const ejecutarProductos = async () => {
    const productos = new Contenedor('productos.txt')
    // await productos.save({ title: 'lapicera', price: 30, thumbnail: 'https://artelibre.com.ar/images/LAPICERA%20BIC%20CRISTAL%20NEGRO%20FINO.jpg' })
    // await productos.save({ title: 'cuaderno', price:80, thumbnail:'https://png.pngtree.com/png-vector/20190214/ourlarge/pngtree-vector-spiral-notebook-icon-png-image_509658.jpg'})
    // await productos.save({title:'lapiz', price: 15, thumbnail:'https://w7.pngwing.com/pngs/6/56/png-transparent-pencil-drawing-by-eraser-pencil-orange-by.png'})

    //console.log('GET ALL',await productos.getAll())
    //console.log('GET BY ID', await productos.getById(1))
    // console.log('DELETE ONE', await productos.deleteById(3))
    // console.log('DELETE ALL', await productos.deleteAll()) 
} 

ejecutarProductos() 


