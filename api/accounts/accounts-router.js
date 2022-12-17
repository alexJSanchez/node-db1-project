const router = require('express').Router()
const accountMod = require('./accounts-model')
const {checkAccountId} = require('./accounts-middleware')

router.get('/', async (req, res, next) => {
  // DO YOUR MAGIC
  try{
    const accounts = await accountMod.getAll()
    res.json(accounts)
    }catch(err){
      next(err)
    }
})

router.get('/:id', checkAccountId , async (req, res, next) => {
  // DO YOUR MAGIC
try{
  const account = await accountMod.getById(req.params.id)
  res.json(account) 
}catch(err){
  next(err)
}
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
  res.status(err.status || 500).json({
    message: err.message,
  })
})

module.exports = router;
