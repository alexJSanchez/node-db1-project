const router = require('express').Router()
const accountMod = require('./accounts-model')
const {checkAccountId, checkAccountNameUnique, checkAccountPayload} = require('./accounts-middleware')

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
  res.json(req.accId) 
}catch(err){
  next(err)
}
})

router.post('/', checkAccountPayload, checkAccountNameUnique, async (req, res, next) => {
  // DO YOUR MAGIC
  // try{
  //   const post = await accountMod.create({name: "william", budget: 2750})
  //   res.json(post)
  // }catch(err){
  //   next(err)
  // }
  try{
    const createdPost = await accountMod.create(req.body)
    res.status(201).json(createdPost)
  }catch(err){
    next(err)
  }
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
