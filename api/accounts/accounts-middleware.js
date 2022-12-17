const accountMod = require('./accounts-model')
exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)
   const {name , budget} = req.body;
   name.trim();
    const error = { status: 400 }
   if(name === undefined || budget === undefined){
    error.message = "name and budget are required"
    next(error)
   }else if(typeof name !== 'string'){
    error.message = "name of account must be a string"
    next(error)
   }else if(name.length < 3){
    error.message= "too short"
    next(error)
   }else{
    res.accPayload = req.body;
    next()
   }
}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
  next()
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


