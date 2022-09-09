import express from 'express'
import { body } from 'express-validator'
import { admin, añadir, guardar } from '../controllers/gastoController.js'
import protegerRuta from '../middleware/protegerRuta.js'

const router = express.Router()
router.get('/mis-gastos', protegerRuta, admin)
router.get('/gastos/nuevo-gasto', protegerRuta, añadir)
router.post('/gastos/nuevo-gasto',
    protegerRuta,
    body('importe').notEmpty().withMessage('El Importe del Gasto es Obligatorio'),
    body('detalle').notEmpty().withMessage('El Detalle no puede ir vacio').isLength({max:50}).withMessage('El Detalle es muy largo'),
    body('categoria').isNumeric().withMessage('Seleccione una categoria'),
    body('mediopago').isNumeric().withMessage('Seleccione un Medio de Pago'),
    guardar
)
export default router