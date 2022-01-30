import * as Yup from 'yup';
import AppStrings from '../../../utils/AppStrings'

export const Validate = Yup.object().shape({
  
  fname: Yup.string()
    .min(3, AppStrings.invalid_firstname)
    .required(AppStrings.firstname_required),
  lname: Yup.string()
    .min(3, AppStrings.invalide_lastname)
    .required(AppStrings.lastname_required),
    email: Yup.string()
    .email(AppStrings.invalid_email)
    .required(AppStrings.email_required),
  password: Yup.string()
  .min(6, AppStrings.invalid_password),
  // .matches(
  //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]/,
  //   "Password must contain Alphabates, Number & Special Character.(Ex:-Test@123)"
  //   )
  //   .required(AppStrings.pass_required),
    cfpass: Yup.string()
    .required('Confirm password is required.')
    .oneOf(
      [Yup.ref('password'), null],
       'Passwords must match',
     )
  
});
