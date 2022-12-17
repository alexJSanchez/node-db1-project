const accountMod = require('./accounts-model')
exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)
}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

exports.checkAccountId = async (req, res, next) => {
  // DO YOUR MAGIC
  try{
    const account = await accountMod.getById(req.params.id)
    if(!account){
      res.status(400).json({
        message: 'no post here'
      })
    }else{
      req.accId = account
    }
  }catch(err){
    res.status(500).json({
      message: 'problem finding user'
    })
  }
}


