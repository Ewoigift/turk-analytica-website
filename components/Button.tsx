import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
// NOTE: You will need to install 'class-variance-authority' for this structure:
// npm install class-variance-authority

// 1. Define button styling variants using cva
const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg font-heading transition-colors duration-200 focus:outline-none focus:ring-4 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      // Style variants based on brand colors
      variant: {
        // Brand Primary: Green (#28A745)
        primary: 
          'bg-ta-green text-white hover:bg-green-700 focus:ring-ta-green/50',
        // Brand Secondary: Teal (#17A2B8)
        secondary: 
          'bg-ta-teal text-white hover:bg-teal-600 focus:ring-ta-teal/50',
        // Outline style
        outline:
          'border border-ta-green text-ta-green hover:bg-ta-green hover:text-white focus:ring-ta-green/50',
           // Secondary outline
        secondaryOutline:
          'border border-ta-teal text-ta-teal hover:bg-ta-teal hover:text-white focus:ring-ta-teal/50',
        // Ghost (minimal) style
        ghost: 'hover:bg-gray-100 text-gray-800 focus:ring-gray-300',
      },
      // Size variants
      size: {
        default: 'h-10 px-6 py-2 text-base',
        sm: 'h-9 rounded-md px-4 text-sm',
        lg: 'h-11 rounded-lg px-8 text-lg font-semibold',
      },
    },
    // Default styles if no variant is specified
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);

// 2. Define the props type
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  // Allows the button to render as another element (like a link) if needed
  asChild?: boolean; 
}

// 3. The main Button Component
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    // If you decide to install 'radix-ui/react-slot', you can use Slot here.
    // For now, we'll keep it simple and just use a standard button.
    // const Comp = asChild ? Slot : 'button';
    const Comp = 'button';

    return (
      <Comp
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };