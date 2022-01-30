import * as Yup from 'yup';
import AppStrings from '../../../utils/AppStrings'

export const Validate = Yup.object().shape({
  
  fullname: Yup.string()
  .min(3, 'Minimum 3 character required.')
    .required('Full name is required.'),
  address: Yup.string()
  .min(3, 'Minimum 3 character required.')
    .required('Address is required.'),
    city: Yup.string()
  .min(3, 'Minimum 3 character required.')
    .required('City is required.'),
   zipcode: Yup.string()
    .required('Zipcode is rquired.'),
  country:Yup.string()
  .required('Country is required.'),
});
