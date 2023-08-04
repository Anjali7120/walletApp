import Joi from 'joi';
import { BadRequestError } from './errors';

const tranformToErrorsArray = errorsObj => errorsObj.details.map(error => error.message);

export default async (itemsToValidate, rulesForValidaton) => {
  const options = { abortEarly: false };
  const validationsResult = Joi.validate(itemsToValidate, rulesForValidaton, options);

  if(validationsResult.error === null)
  {
    return true;
  }
  else{
    throw new BadRequestError('Bad Request', tranformToErrorsArray(validationsResult.error))
  }

  // return validationsResult.error === null ? true : throw new BadRequestError('Bad Request', tranformToErrorsArray(validationsResult.error));
};
