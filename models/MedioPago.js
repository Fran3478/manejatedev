import { DataTypes } from 'sequelize'
import db from '../config/db.js'

const Mediopago = db.define('mediospago', {
    nombre: {
        type: DataTypes.STRING(30),
        allowNull: false
    }
}, {
    tableName: 'mediospago'
  })

export default Mediopago