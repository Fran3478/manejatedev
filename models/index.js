import Gasto from './Gasto.js'
import Categoria from './Categoria.js'
import Mediopago from './Mediopago.js'
import Usuario from './Usuario.js'

Gasto.belongsTo(Categoria, { foreignKey: 'categoriaId'})

Gasto.belongsTo(Mediopago, { as: 'mediopago', foreignKey: 'mediopagoId'})

Gasto.belongsTo(Usuario, { foreignKey: 'usuarioId'})

Categoria.belongsTo(Usuario, { foreignKey: 'usuarioId'})

Mediopago.belongsTo(Usuario, { foreignKey: 'usuarioId'})

export {
    Gasto,
    Categoria,
    Mediopago,
    Usuario
}