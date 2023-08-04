import Joi from 'joi';
import RequestValidator from '../../commonUtils/requestValidator';

export default async (req, _, next) => {
  const itemsToValidate = {
    wallet_id: req.body.wallet_id,
    amount: req.body.amount,
    type: req.body.type,
    status: req.body.status,
    remarks: req.body.remarks
    
  };

  const rulesForValidation = {
    wallet_id: Joi.number().required(),
    amount: Joi.number().precision(4).required(),
    type: Joi.number().required(),
    status: Joi.number(),
    remarks: Joi.string(),
  };

  return RequestValidator(itemsToValidate, rulesForValidation)
    .then((__) => next())
    .catch(next);
};
