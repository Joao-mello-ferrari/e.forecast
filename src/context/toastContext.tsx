// This file implements a Toast notification system using React Context
// It provides functionality to add and remove toast notifications throughout the application
// Toasts are temporary messages that appear and disappear automatically
import { createContext, useContext, useState, useCallback } from "react";
import ToastContainer from "../components/Toasts";

import { v4 } from 'uuid';

import { Toast } from '../interfaces/toasts'

// Interface defining the context methods available to consumers
interface ToastsContextProps{
  addToast: (toast: Toast) => void;
  removeToast: (toastId: string | undefined) => void;
}

// Props interface for the provider component
interface ToastsProviderProps{
  children: React.ReactNode;
}

// Type definitions for the callback functions
type AddCallBackType = (toast: Toast) => void;
type RemoveCallBackType = (toastId: string | undefined) => void;

// Create the context with default empty object
const ToastContext = createContext({} as ToastsContextProps);

// Provider component that wraps the app and manages toast state
export const ToastProvider = ({ children }: ToastsProviderProps) => {
  // State to store all active toasts
  const [toasts, setToasts] = useState<Toast[]>([]);

  // Memoized callback to add a new toast with unique ID
  const addToast = useCallback<AddCallBackType>((newToast) =>{
    newToast = { ...newToast, id:v4() }

    setToasts(current => [...current, newToast]);
  },[])

  // Memoized callback to remove a toast by ID
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

// Custom hook to access toast context
export const useToast = () => {
  const context = useContext(ToastContext);
  return context;
};
