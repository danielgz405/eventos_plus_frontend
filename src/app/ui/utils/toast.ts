import { toast } from 'react-toastify';

export const Alert = (message: string, type: 'success' | 'error' | 'warning' | 'info') =>
  toast[type](message, {
    position: 'bottom-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: 'dark',
  });
