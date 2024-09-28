import './global.css';

import { Helmet, HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'sonner';

import { router } from './routes';
import { ThemeProvider } from './theme/theme-provider';

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="system" storageKey="pizzashop-theme">
        <Helmet titleTemplate="%s | pizza.shop" />
        <Toaster richColors />
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}
