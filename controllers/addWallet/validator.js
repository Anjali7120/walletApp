import Joi from 'joi';
import RequestValidator from '../../commonUtils/requestValidator';

export default async (req, _, next) => {
  const itemsToValidate = {
    wallet_user_id: req.body.wallet_user_id,
    balance: req.body.balance
    
  };

  const rulesForValidation = {
    wallet_user_id: Joi.number().required(),
    balance: Joi.number().precision(4).required(),
  };

  return RequestValidator(itemsToValidate, rulesForValidation)
    .then((__) => next())
    .catch(next);
};
