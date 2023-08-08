import Joi from 'joi';

export default async (req, _, next) => {
  const itemsToValidate = {
    id: req.query.id,
    wallet_id: req.body.wallet_id,
    amount: req.body.amount,
    type: req.body.type,
    status: req.body.status,
    remarks: req.body.remarks
    
  };

  const rulesForValidation = {
    id: Joi.number().required(),
    wallet_id: Joi.number(),
    amount: Joi.number().precision(4),
    type: Joi.number(),
    status: Joi.number(),
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
        error: tranformToErrorsArray
    });
  }

};
