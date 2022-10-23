import React, { InputHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div
      className={clsx(
        'h-12 flex items-center gap-3 py-4 px-3 rounded w-full  bg-gray-800  focus-within:ring-2 ring-cyan-300'
      )}
    >
      {props.children}
    </div>
  );
}

export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputIcon({ children }: TextInputIconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>;
}

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className={
        'bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none'
      }
      {...props}
    />
  );
}

export const TextInput = {
  Root: TextInputRoot,
  Icon: TextInputIcon,
  Input: TextInputInput,
};
