import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

class Toast {
   LoginSuccess = () => {
      toast("Logged in Succesfully!")
   }

   Logout = () => {
      toast("Logout Succesfully!")
   }

   UsernameLengthError = () => {
      toast('Username Should in the lenght between 6-15')
   }

   UsernameNullError = () => {
      toast('Username Should not be blank')
   }

   PasswordNullError = () => {
      toast('Password should not be blank')
   }

   PasswordLengthError = () => {
      toast('Username Should in the lenght between 6-15')
   }
}

export default Toast