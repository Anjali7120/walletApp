import Joi from 'joi';

export default async (req, _, next) => {
  const itemsToValidate = {
    id: req.query.id,
    wallet_user_id: req.body.wallet_user_id,
    balance: req.body.balance
    
  };

  const rulesForValidation = {
    id: Joi.number().required(),
    wallet_user_id: Joi.number(),
    balance: Joi.number().precision(4),
  };

  
  const tranformToErrorsArray = errorsObj => errorsObj.details.map(error => error.message);
  const options = { abortEarly: false };
  const validationsResult = Joi.validate(itemsToValidate, rulesForValidation, options);
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
