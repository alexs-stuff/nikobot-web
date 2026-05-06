import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { Icon } from "@iconify/react";
import ButtonReact from "../ButtonReact";

type NavbarButtonReactProps = {
  href?: string;
  label?: string;
  icon?: string;
  className?: string;
  children?: ReactNode;
};

export default function NavbarButtonReact({
  href,
  label,
  icon,
  className,
  children,
}: NavbarButtonReactProps) {
  return (
    <ButtonReact
      className={twMerge("ml:px-4 gap-2 px-2", className)}
      onClick={() => {
        if (href) window.location.href = href;
      }}
    >
      {icon && <Icon icon={icon} className="text-2xl" />}

      {label && (
        <span className="ml:block hidden text-center">
          {label}
        </span>
      )}

      {children}
    </ButtonReact>
  );
}