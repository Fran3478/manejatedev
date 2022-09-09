import { DataTypes } from 'sequelize'
import db from '../config/db.js'

const Gasto = db.define('gastos', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    importe: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    detalle: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    cuotas: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
})

export default Gasto