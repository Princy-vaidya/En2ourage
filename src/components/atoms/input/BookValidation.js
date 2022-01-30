import * as Yup from 'yup';
import AppStrings from '../../../utils/AppStrings'

export const Validate = Yup.object().shape({
  name: Yup.string()
    .required('Name is required.'),
  location: Yup.string()
    .required('Location is required.'),
  attire: Yup.string()
    .required('Attire is required.'),
  firearm: Yup.string()
    .required('Firearm is required.'),
    work: Yup.string()
    .required('Work is required.'),
   report: Yup.string()
    .required(' Required.'),
});
