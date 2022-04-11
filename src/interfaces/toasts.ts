export interface Toast{
  id?: string;
  type: 'success' | 'warning' | 'error';
  title: string;
  message: string;
}