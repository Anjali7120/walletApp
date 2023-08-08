import Joi from 'joi';

export default async (req, res, next) => {
  const itemsToValidate = {
    id: req.query.id,
    wallet_id: req.query.wallet_id,
    amount: req.query.amount,
    balance: req.query.balance,
    type: req.query.type,
    transaction_id: req.query.transaction_id,
    remarks: req.query.remarks
    
  };

  const rulesForValidation = {
    id: Joi.number(),
    wallet_id: Joi.number(),
    amount: Joi.number().precision(4),
    type: Joi.number(),
    balance: Joi.number().precision(4),
    transaction_id: Joi.string(),
    remarks: Joi.string(),
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
        error: tranformToErrorsArray(validationsResult.error)
    });
  }

};
