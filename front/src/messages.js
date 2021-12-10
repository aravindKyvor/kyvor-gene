
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();


export const successMessage = () => {
    toast.success("Success Notification!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: false
    });
}