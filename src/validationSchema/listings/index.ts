import * as yup from 'yup';

export const listingValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().nullable(),
  price: yup.number().integer().required(),
  agency_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
