import { ComponentPropsWithoutRef, forwardRef } from "react";

import { cn } from "@/lib/cn";

type ButtonProps = ComponentPropsWithoutRef<"button">;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "rounded bg-blue-500 px-4 py-2 font-sans font-bold text-white hover:bg-blue-700",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  ),
);

Button.displayName = "Button";

export default Button;
