import React, { ReactNode } from 'react';
import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ children, asChild }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={clsx(
        'py-4 px-3 bg-cyan-500 hover:bg-cyan-300 transition-colors w-full rounded font-semibold text-black text-sm focus:ring-2 ring-white'
      )}
    >
      {children}
    </Comp>
  );
}
