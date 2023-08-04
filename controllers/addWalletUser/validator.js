import Joi from 'joi';
import RequestValidator from '../../commonUtils/requestValidator';

export default async (req, _, next) => {
  const itemsToValidate = {
    id: req.body.id,
    is_active: req.body.is_active,
  };

  const rulesForValidation = {
    id: Joi.number().required(),
    is_active: Joi.number().required(),
  };

  return RequestValidator(itemsToValidate, rulesForValidation)
    .then((__) => next())
    .catch(next);
};
