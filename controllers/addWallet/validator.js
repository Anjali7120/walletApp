import Joi from 'joi';

export default async (req, res, next) => {
console.log("ffkkkkkk");
  const itemsToValidate = {
    wallet_user_id: req.body.wallet_user_id,
    balance: req.body.balance
    
  };

  const rulesForValidation = {
    wallet_user_id: Joi.number().required(),
    balance: Joi.number().precision(4).required(),
  };

  
  const tranformToErrorsArray = errorsObj => errorsObj.details.map(error => error.message);
  const options = { abortEarly: false };
  const validationsResult = Joi.validate(itemsToValidate, rulesForValidation, options);
 
  console.log(validationsResult.error);
  if(validationsResult.error === null)
  {
    next();
  }

  else{
      res.status(403).send({
        message: tranformToErrorsArray(validationsResult.error)[0]
    });
  }

};
