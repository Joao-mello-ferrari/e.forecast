import { createContext, useContext, useState, useCallback } from "react";
import ToastContainer from "../components/Toasts";

import { v4 } from 'uuid';

import { Toast } from '../interfaces/toasts'

interface ToastsContextProps{
  addToast: (toast: Toast) => void;
  removeToast: (toastId: string | undefined) => void;
}

interface ToastsProviderProps{
  children: React.ReactNode;
}

type AddCallBackType = (toast: Toast) => void;
type RemoveCallBackType = (toastId: string | undefined) => void;

const ToastContext = createContext({} as ToastsContextProps);

export const ToastProvider = ({ children }: ToastsProviderProps) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback<AddCallBackType>((newToast) =>{
    newToast = { ...newToast, id:v4() }

    setToasts(current => [...current, newToast]);
  },[])

  const removeToast = useCallback<RemoveCallBackType>((toastId) =>{
    setToasts(toasts => toasts.filter((item)=> item.id !== toastId))
  },[]);
  
  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      <ToastContainer toasts={toasts}/>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  return context;
};
