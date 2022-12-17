const router = require('express').Router()
const accountMod = require('./accounts-model')

router.get('/', async (req, res, next) => {
  // DO YOUR MAGIC
  const accounts = await accountMod.getAll()
  res.json(accounts)
  next()
})

router.get('/:id', async (req, res, next) => {
  // DO YOUR MAGIC
  const accountById = await accountMod.getById(req.params.id)
  res.json(accountById)
  next()
})

router.post('/', (req, res, next) => {
  // DO YOUR MAGIC
})

router.put('/:id', (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
})

module.exports = router;
