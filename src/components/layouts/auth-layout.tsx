import { PropsWithChildren } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Logo } from '../logo';
import { ModeToggle } from '../mode-toggle';

export const AuthLayout = ({ children }: PropsWithChildren) => {
  const { pathname } = useLocation();

  const isSignInPage = pathname === '/auth/sign-in';

  return (
    <>
      <div className="container relative h-dvh flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="absolute left-4 top-4 lg:hidden">
          <Logo />
        </div>
        <div className="absolute right-4 top-4 ">
          <ModeToggle />
        </div>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-zinc-900" />
          <Logo />
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;This library has saved me countless hours of work and helped me deliver
                stunning designs to my clients faster than ever before.&rdquo;
              </p>
              <footer className="text-sm">Sofia Davis</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8 h-full">
          <div className="mx-auto flex w-full h-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                {isSignInPage ? 'Добро пожаловать в bryx' : 'Создать аккаунт'}
              </h1>
              <p className="text-sm text-muted-foreground">
                {isSignInPage ? 'Войдите в свой аккаунт' : 'Создайте новый аккаунт'}
              </p>
            </div>
            {children}
            <p className="px-8 text-center text-sm text-muted-foreground">
              Нажимая продолжить, вы соглашаетесь с нашими{' '}
              <Link to="/terms" className="underline underline-offset-4 hover:text-primary">
                Условиями использования
              </Link>{' '}
              и{' '}
              <Link to="/privacy" className="underline underline-offset-4 hover:text-primary">
                Политикой конфиденциальности
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
