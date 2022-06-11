// Paso 1
const express = require('express')
const path = require('path')
const expressFileUpload = require('express-fileupload')
const bodyParser = require('body-parser')
const app = express()
const fs = require('fs')
app.listen(3000)

app.use(express.static('assets'))

// Integrar el paquete body parser usando el método “use” de la constante “app”.
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Integrar el paquete express-fileupload definiendo 5MB como límite del peso de las canciones.
app.use(
    expressFileUpload({
        limits: { fileSize: 5000000 },
        abortOnLimit: true,
        responseOnLimit:
            'El archivo supera el limite permitido',
    })
)

app.get('/', (req, res)=> {
    res.sendFile(__dirname + '/formulario.html')
})

app.post("/imagen", (req, res) => {
    const { posicion } = req.body
    const { target_file } = req.files
    const ruta = path.join(__dirname, 'assets','imgs', `imagen-${posicion}.jpg`)
    target_file.mv(ruta, (err) => {
        res.redirect('/collage');
    });
});

app.get('/collage', (req, res)=> {
    res.sendFile(__dirname + '/collage.html')
})

app.get('/deleteImg/:nombre', (req, res) => {
    const { nombre } = req.params 
    const ruta = path.join(__dirname, 'assets','imgs', nombre)
    fs.unlink(ruta, (err) => {
        res.redirect('/collage')
    }) 
}) 

