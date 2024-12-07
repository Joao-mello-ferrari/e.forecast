// This component represents a toast notification that can display success, warning, or error messages
// It automatically disappears after 3 seconds and can be manually closed by the user
import { useEffect } from "react";
import { useToast } from '../../../context/toastContext'

import { FiCheckCircle, FiAlertCircle, FiXCircle, FiX } from "react-icons/fi";

import { Toast as StyledToast } from '../../../styledComponents/toasts'
import { Toast as IToast } from "../../../interfaces/toasts";

// Icons mapping for different toast types
const icons = {
  success: <FiCheckCircle />,
  warning: <FiAlertCircle />,
  error: <FiXCircle />
}

// Background colors for different toast types
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

  // Effect to automatically remove toast after 3 seconds
  useEffect(()=>{
    const removeTimer = setTimeout(()=>{
      removeToast(toast.id);
    },3000);

    // Cleanup timeout on unmount
    return ()=>{
      clearTimeout(removeTimer);
    }
    
  },[toast.id, removeToast]);

  return(
    // Render toast with appropriate background color based on type
    <StyledToast style={{backgroundColor: bg[toast.type]}}>
      { icons[toast.type] }
      <div>
        <strong>{toast.title}</strong>
        {toast.message && <p>{toast.message}</p>}
      </div>
      {/* Close button to manually remove toast */}
      <FiX onClick={()=>{removeToast(toast.id)}}/>
    </StyledToast>
  )
}