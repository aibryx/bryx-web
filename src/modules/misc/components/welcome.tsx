import { Logo } from '@/components/logo';
import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Link, useNavigate } from 'react-router-dom';
import { AlignJustify, GithubIcon } from 'lucide-react';
import { useSession } from '@/hooks/use-session';
import { useEffect } from 'react';

export const Welcome = () => {
  const navigate = useNavigate();
  const { user } = useSession();

  useEffect(() => {
    if (user) navigate('/app/rooms');
  }, []);

  return (
    <div className="h-dvh w-full">
      <header className="container pt-2 flex justify-between items-center">
        <Logo />

        <div className="hidden md:flex gap-4">
          <ModeToggle />
          <Button size="icon" variant="outline">
            <Link target="_blank" to="https://github.com/aibryx/bryx-web">
              <GithubIcon />
            </Link>
          </Button>
          <Button asChild>
            <Link to="auth/sign-in">Войти</Link>
          </Button>
        </div>

        <div className="flex gap-2 md:hidden">
          <ModeToggle />
          <Button size="icon" variant="outline">
            <Link target="_blank" to="https://github.com/aibryx/bryx-web">
              <GithubIcon />
            </Link>
          </Button>
          <Sheet>
            <SheetTrigger>
              <Button variant="outline" size="icon">
                <AlignJustify />
              </Button>
            </SheetTrigger>
            <SheetContent side="top">
              <SheetHeader>
                <SheetTitle>
                  <Logo />
                </SheetTitle>
                <SheetDescription className="flex flex-col gap-2 pt-2 justify-between">
                  <Button asChild>
                    <Link to="auth/sign-in">Войти</Link>
                  </Button>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <main></main>
    </div>
  );
};
