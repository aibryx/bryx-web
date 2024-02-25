import { PropsWithChildren } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';
import { ThemeProvider } from '@/components/theme-provider';

const queryClient = new QueryClient();

export const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="ui-theme">
      <QueryClientProvider client={queryClient}>
        <Router>
          {children}
          <Toaster richColors />
        </Router>
      </QueryClientProvider>
    </ThemeProvider>
  );
};
