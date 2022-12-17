const accountMod = require('./accounts-model')
const db = require('../../data/db-config')
exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)
  const {name , budget} = req.body;
   
  const error = { status: 400 }

   if(name === undefined || budget === undefined){
    error.message = "name and budget are required"
   }else if(name.trim().length < 3 || name.trim().length > 100){
    error.message= "name of account must be between 3 and 100"
   }else if(typeof budget !== 'number' || isNaN(budget)){
    error.message = "budget of account must be a number"
   }else if(budget < 0 || budget > 1000000){
    error.message= "budget of account is too large or too small"
   }
   if (error.message){
    next(error)
   }else{
    next()
   }
   
}

exports.checkAccountNameUnique = async (req, res, next) => {
  // DO YOUR MAGIC
  try{
    const existing = await db('accounts')
    .where('name', req.body.name)
    .first()

    if(existing){
      next({status: 400, message: 'that name is taken'})
    }else{
      next()
    }
  }catch(err){
    next(err)
  }
}

exports.checkAccountId = async (req, res, next) => {
  // DO YOUR MAGIC
  try{
    const account = await accountMod.getById(req.params.id)
    if(!account){
      next({
        status: 404,
        message: 'account not found'
      })
    }else{
      req.accId = account;
      next()
    }
  }catch(err){
    next(err)
  }
}


