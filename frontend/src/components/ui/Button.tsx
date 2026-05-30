import { composeRenderProps } from 'react-aria-components/composeRenderProps';
import { Button as RACButton, type ButtonProps as RACButtonProps } from 'react-aria-components/Button';
import { tv } from 'tailwind-variants';
import { focusRing } from './utils';

export interface ButtonProps extends RACButtonProps {
  /** @default 'primary' */
  variant?: 'primary' | 'secondary' | 'destructive' | 'quiet'
}

let button = tv({
  extend: focusRing,
  base: 'relative inline-flex items-center justify-center gap-2 border border-transparent dark:border-white/10 h-9 box-border px-3.5 py-0 [&:has(>svg:only-child)]:px-0 [&:has(>svg:only-child)]:h-8 [&:has(>svg:only-child)]:w-8 font-sans text-sm text-center transition rounded-lg cursor-default [-webkit-tap-highlight-color:transparent]',
  variants: {
    variant: {
      primary: 'bg-green-600 hover:bg-green-700 pressed:bg-green-800 text-white',
      secondary: 'border-green-600 bg-white hover:bg-green-50 pressed:bg-green-100 text-green-700 dark:bg-black dark:hover:bg-green-950 dark:pressed:bg-green-900 dark:text-green-300',
      destructive: 'bg-green-700 hover:bg-green-800 pressed:bg-green-900 text-white',
      quiet: 'border-0 bg-transparent hover:bg-green-50 pressed:bg-green-100 text-green-700 dark:hover:bg-green-950 dark:pressed:bg-green-900 dark:text-green-300'
    },
    isDisabled: {
      true: 'border-transparent dark:border-transparent bg-neutral-100 dark:bg-neutral-800 text-neutral-300 dark:text-neutral-600 forced-colors:text-[GrayText]'
    },
    isPending: {
      true: 'text-transparent'
    }
  },
  defaultVariants: {
    variant: 'primary'
  },
  compoundVariants: [
    {
      variant: 'quiet',
      isDisabled: true,
      class: 'bg-transparent dark:bg-transparent'
    }
  ]
});

export function Button(props: ButtonProps) {
  return (
    <RACButton
      {...props}
      className={composeRenderProps(
        props.className,
        (className, renderProps) => button({...renderProps, variant: props.variant, className})
      )}
    >
      {composeRenderProps(props.children, (children, {isPending}) => (
        <>
          {children}
          {isPending && (
            <span aria-hidden className="flex absolute inset-0 justify-center items-center">
              <svg className="w-4 h-4 text-white animate-spin" viewBox="0 0 24 24" stroke={props.variant === 'secondary' || props.variant === 'quiet' ? 'light-dark(black, white)' : 'white'}>
                <circle cx="12" cy="12" r="10" strokeWidth="4" fill="none" className="opacity-25" />
                <circle cx="12" cy="12" r="10" strokeWidth="4" strokeLinecap="round" fill="none" pathLength="100" strokeDasharray="60 140" strokeDashoffset="0" />
              </svg>
            </span>
          )}
        </>
      ))}
    </RACButton>
  );
}
