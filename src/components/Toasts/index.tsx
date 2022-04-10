import ToastComponent from './Toast'
import { ToastsContainer } from '../../styledComponents/toasts'

import { Toast } from '../../interfaces/toasts'

interface ToastContainerProps{
  toasts: Toast[];
}
export default function ToastContainer({ toasts }: ToastContainerProps){

  return(
    <ToastsContainer>
      {toasts.map((toast)=>(
        <ToastComponent
          key={toast.id} 
          toast={toast}
        />
      ))}
    </ToastsContainer>
  )
}