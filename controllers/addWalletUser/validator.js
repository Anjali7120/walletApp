import Joi from 'joi';
import RequestValidator from '../../commonUtils/requestValidator';

export default async (req, _, next) => {
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

  return RequestValidator(itemsToValidate, rulesForValidation)
    .then((__) => next())
    .catch(next);
};
