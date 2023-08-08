import Joi from 'joi';

export default async (req, res, next) => {
  const itemsToValidate = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
   
  };

  const rulesForValidation = {
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
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
