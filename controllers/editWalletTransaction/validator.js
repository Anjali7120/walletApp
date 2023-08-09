import Joi from 'joi';

export default async (req, _, next) => {
  const itemsToValidate = {
    id: req.query.id,
    wallet_id: req.body.wallet_id,
    amount: req.body.amount,
    balance: req.body.balance,
    type: req.body.type,
    transaction_id: req.body.transaction_id,
    remarks: req.body.remarks
    
  };

  const rulesForValidation = {
    id: Joi.number().required(),
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
        message: tranformToErrorsArray(validationsResult.error)[0]
    });
  }

};
