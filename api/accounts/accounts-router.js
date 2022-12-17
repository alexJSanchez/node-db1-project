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

router.post('/', checkAccountPayload,checkAccountNameUnique,  async (req, res, next) => {
  // DO YOUR MAGIC
  // try{
  //   const post = await accountMod.create({name: "william", budget: 2750})
  //   res.json(post)
  // }catch(err){
  //   next(err)
  // }
  try{
    const createdPost = await accountMod.create({
      name: req.body.name.trim(), 
      budget: req.body.budget})
    res.status(201).json(createdPost)
  }catch(err){
    next(err)
  }
})

router.put('/:id',checkAccountId,checkAccountPayload,checkAccountNameUnique, async (req, res, next) => {
  // DO YOUR MAGIC
  try{
    const createdPost = await accountMod.updateById(req.params.id, {
      name: req.body.name.trim(), 
      budget: req.body.budget})
    res.status(200).json(req.body)
  }catch(err){
    next(err)
  }
});

router.delete('/:id',checkAccountId, async (req, res, next) => {
  // DO YOUR MAGIC
  try{
   const deletedPost = await accountMod.getById(req.params.id)
   const deletedRes = await accountMod.deleteById(req.params.id)
   res.json(deletedPost)
  }catch(err){
    next(err)
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
  res.status(err.status || 500).json({
    message: err.message,
  })
})

module.exports = router;
