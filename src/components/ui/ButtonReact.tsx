import type { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ButtonReactProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
};

export default function ButtonReact({
  className,
  children,
  ...rest
}: ButtonReactProps) {
  return (
    <button
      className={twMerge(
        "min-h-10 w-auto bg-primary-bg border border-primary-border rounded-[10px] hover:bg-primary-bg-hover transition-[127ms] flex flex-row items-center justify-center px-6",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}