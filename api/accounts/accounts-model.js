const db = require('../../data/db-config');

const getAll = () => {
  // DO YOUR MAGIC
 return db('accounts')
}

const getById = id => {
  // DO YOUR MAGIC
  db.select('*').from('accounts').where({id: id})
}

const create = account => {
  // DO YOUR MAGIC
}

const updateById = (id, account) => {
  // DO YOUR MAGIC
}

const deleteById = id => {
  // DO YOUR MAGIC
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
