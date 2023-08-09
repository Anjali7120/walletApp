import Joi from 'joi';

export default async (req, res, next) => {
  const itemsToValidate = {
    id: req.query.id,
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
   
  };

  const rulesForValidation = {
    id: Joi.number().required(),
    name: Joi.string(),
    email: Joi.string(),
    phone: Joi.string(),
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
