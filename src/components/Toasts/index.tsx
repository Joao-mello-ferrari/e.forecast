// This component is a container for toast notifications
// It receives an array of toasts and renders them using individual ToastComponent instances
// Each toast is displayed with a unique key to ensure proper React rendering
import ToastComponent from './Toast'
import { ToastsContainer } from '../../styledComponents/toasts'

import { Toast } from '../../interfaces/toasts'

// Props interface defining the array of toasts to be displayed
interface ToastContainerProps{
  toasts: Toast[];
}

export default function ToastContainer({ toasts }: ToastContainerProps){
  return(
    <ToastsContainer>
      {/* Map through toasts array to render individual toast notifications */}
      {toasts.map((toast)=>(
        <ToastComponent
          key={toast.id} 
          toast={toast}
        />
      ))}
    </ToastsContainer>
  )
}