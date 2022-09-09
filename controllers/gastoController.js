import { validationResult } from 'express-validator'
import { Gasto, Categoria, Mediopago } from '../models/index.js'


const admin = async (req, res) => {

    const { id } = req.usuario

    const [categorias, mediospago] = await Promise.all([
        Categoria.findAll(),
        Mediopago.findAll()
    ])
    if(categorias.length === 0 && mediospago.length === 0) {
        res.render('gastos/admin', {
            pagina: 'Mis Gastos',
            errores: true,
            csrfToken: req.csrfToken()
        })
    } else {
        res.render('gastos/admin', {
            pagina: 'Mis Gastos',
            csrfToken: req.csrfToken()
        })
    }

}


const añadir = async (req, res) => {

    const { id } = req.usuario

    const [categorias, mediospago] = await Promise.all([
        Categoria.findAll(),
        Mediopago.findAll()
    ])

    res.render('gastos/nuevo-gasto', {
        pagina: 'Nuevo Gasto',
        csrfToken: req.csrfToken(),
        categorias,
        mediospago,
        datos: {}
    })
}

const guardar = async (req,res) => {

    const { id } = req.usuario

    let resultado = validationResult(req)

    const [categorias, mediospago] = await Promise.all([
        Categoria.findAll(),
        Mediopago.findAll()
    ])

    if (!resultado.isEmpty()) {
        return res.render('gastos/nuevo-gasto', {
            pagina: 'Nuevo Gasto',
            csrfToken: req.csrfToken(),
            categorias,
            mediospago,
            errores: resultado.array(),
            datos: req.body
        })
    }

    const { importe, detalle, cuotas, categoria: categoriaId, mediopago: mediopagoId } = req.body
    const { id: usuarioId } = req.usuario

    try {
        const gastoGuardado = await Gasto.create({
            importe,
            detalle,
            cuotas,
            categoriaId,
            mediopagoId,
            usuarioId
        })


        return res.redirect('/gastos/nuevo-gasto')
    } catch (error) {
        console.log(error)
    }
}

export {
    admin,
    añadir,
    guardar
}