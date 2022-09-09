import { exit } from 'node:process'
import categorias from './categorias.js'
import db from '../config/db.js'
import mediospago from './mediospago.js'
import { Categoria, Mediopago } from '../models/index.js'

const importarDatos = async () => {
    try {
        await db.authenticate()

        await db.sync()

        await Promise.all([
            Categoria.bulkCreate(categorias),
            Mediopago.bulkCreate(mediospago)
        ])

        console.log('Datos Importados Correctamente')
        exit()

    } catch (error) {
        console.log(error)
        exit(1)
    }
}

const eliminarDatos = async () => {
    try {
        await db.sync({force: true})

        console.log('Datos Eliminados Correctamente')
        exit() 
    } catch (error) {
        console.log(error)
        exit(1)
    }
}

if (process.argv[2] === "-i") {
    importarDatos()
}

if (process.argv[2] === "-e") {
    eliminarDatos()
}