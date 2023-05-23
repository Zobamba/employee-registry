import { body, validationResult } from 'express-validator';

export const EmployeeFormConstraints = [
  body('fullName')
    .exists()
    .withMessage('fullName field is require')
    .isLength({ min: 1 })
    .withMessage('fullName field is require')
    .isString()
    .withMessage('the fullName must be a string')
    .trim(),

  body('jobTitle')
    .exists()
    .withMessage('jobTitle field is require')
    .isLength({ min: 1 })
    .withMessage('jobTitle field is require')
    .isString()
    .withMessage('the jobTitle must be a string')
    .trim(),

  body('phoneNumber')
    .exists()
    .withMessage('phoneNumber field is required')
    .isLength({ min: 1 })
    .withMessage('phoneNumber field is required')
    .isString()
    .withMessage('the phoneNumber must be a string')
    .trim(),

  body('email')
    .exists()
    .withMessage('email is required')
    .isLength({ min: 1 })
    .withMessage('email is required')
    .isEmail()
    .withMessage('email field must contain a valid email address')
    .trim(),

  body('address')
    .exists()
    .withMessage('address field is required')
    .isLength({ min: 1 })
    .withMessage('address field is required')
    .isString()
    .withMessage('the address must be a string')
    .trim(),

  body('city')
    .exists()
    .withMessage('city field is required')
    .isLength({ min: 1 })
    .withMessage('city field is required')
    .isString()
    .withMessage('the city must be a string')
    .trim(),

  body('state')
    .exists()
    .withMessage('state field is required')
    .isLength({ min: 1 })
    .withMessage('state field is required')
    .isString()
    .withMessage('the state must be a string')
    .trim(),

  body('contacts')
    .exists()
    .withMessage('the contacts field is required')
    .isArray()
    .withMessage('the contacts field must be an array')
    .isLength({ min: 1 })
    .withMessage('at least one contact is needed')
    .custom((value) => {
      let noErrors = true;
      for (let i = 0; i < value.length; i += 1) {
        if (value[i].title === undefined || typeof value[i].title !== 'string') {
          noErrors = false;
          break;
        }
      }
      return noErrors;
    })
    .withMessage('you have not specified the title of a contact. It is also possible you have supplied a title that is not a string.')
    .custom((value) => {
      let noErrors = true;
      for (let i = 0; i < value.length; i += 1) {
        if (value[i].phoneNumber === undefined || typeof value[i].phoneNumber !== 'string') {
          noErrors = false;
          break;
        }
      }
      return noErrors;
    })
    .withMessage('you have not specified the phoneNumber of a contact. It is also possible you have supplied a phoneNumber that is not a string.')
    .custom((value) => {
      let noErrors = true;
      for (let i = 0; i < value.length; i += 1) {
        if (value[i].relationship === undefined || typeof value[i].relationship !== 'string') {
          noErrors = false;
          break;
        }
      }
      return noErrors;
    })
    .withMessage('you have not specified the relationship of a contact. It is also possible you have supplied a relationship that is not a string.')
];

export const validateFormData = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
