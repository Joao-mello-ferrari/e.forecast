import { useEffect } from "react";
import { useToast } from '../../../context/toastContext'

import { FiCheckCircle, FiAlertCircle, FiXCircle, FiX } from "react-icons/fi";

import { Toast as StyledToast } from '../../../styledComponents/toasts'
import { Toast as IToast } from "../../../interfaces/toasts";

const icons = {
  success: <FiCheckCircle />,
  warning: <FiAlertCircle />,
  error: <FiXCircle />
}

const bg = {
  success: "#b7fa9f",
  warning: "#ffe893",
  error: "#FF978B"
}

interface ToastProps{
  toast: IToast;
}

export default function Toast({ toast }: ToastProps){
  const { removeToast } = useToast();

  useEffect(()=>{
    const removeTimer = setTimeout(()=>{
      removeToast(toast.id);
    },3000);

    return ()=>{
      clearTimeout(removeTimer);
    }
    
  },[toast.id, removeToast]);

  return(
    <StyledToast style={{backgroundColor: bg[toast.type]}}>
      { icons[toast.type] }
      <div>
        <strong>{toast.title}</strong>
        {toast.message && <p>{toast.message}</p>}
      </div>
      <FiX onClick={()=>{removeToast(toast.id)}}/>
    </StyledToast>
  )
}