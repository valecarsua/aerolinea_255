const express=require('express')

const app= express()

const path =require('path')
const hbs =require('hbs')


const puerto= 5078

app.use(express.static('public'))

//configuracion del directorio de las vistas hbs
app.set('views', path.join(__dirname+'/public/views'))
app.set('view engine','hbs')

//configuracion del directorio con archivos parcial
hbs.registerPartials(__dirname+'/public/views/partials') 

app.get('/', (req,res)=>{
   // res.write(home)
    //res.end()
    res.render('disponibilidad',
    {
        titulo:'Disponibilidad', 
    })
}
)

app.listen(puerto, ()=>{
    console.log(`Escuchando el puerto ${puerto}`)
})