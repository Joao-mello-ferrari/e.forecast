// This interface defines the structure of toast notifications used throughout the application
// Toast notifications are temporary messages that appear to provide feedback to users
export interface Toast{
  // Optional unique identifier for the toast
  id?: string;
  // Type of toast that determines its styling and icon
  type: 'success' | 'warning' | 'error';
  // Main heading text shown in the toast
  title: string;
  // Detailed message content of the toast
  message: string;
}