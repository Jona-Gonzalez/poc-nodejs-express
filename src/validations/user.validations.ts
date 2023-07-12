import { checkSchema } from 'express-validator';

function validateEditUserDataBody() {
  return checkSchema({
    name: {
      in: ['body'],
      isString: true,
      errorMessage: 'Name is required',
      trim: true,
      escape: true,
      isLength: {
        errorMessage: 'Name should be at least 3 chars long',
        options: { min: 3 },
      },
    },
    lastName: {
      in: ['body'],
      isString: true,
      errorMessage: 'Last name is required',
      trim: true,
      escape: true,
      isLength: {
        errorMessage: 'Last name should be at least 3 chars long',
        options: { min: 3 },
      },
    },
  });
}

export { validateEditUserDataBody };
