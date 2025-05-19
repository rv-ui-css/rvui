import { twMerge } from "tailwind-merge";
import type { MouseEventHandler, ReactNode } from "react";

export function Button(props: IProps) {
  function checkRounded() {
    switch (props.rounded) {
      case "full":
        return "rounded-full";
      case "small":
        return "rounded-xs";
      case "large":
        return "rounded-lg";
      case "medium":
        return "rounded-md";
      default:
        return "rounded-md";
    }
  }

  function checkVariant() {
    const colorClasses = {
      primary:
        "border-primary-main text-primary-main bg-transparent hover:bg-primary-main/5 active:bg-primary-main/10",
      info: "border-blue-500 text-blue-500 bg-transparent hover:bg-blue-500/5 active:bg-blue-500/10",
      error:
        "border-red-500 text-red-500 bg-transparent hover:bg-red-500/5 active:bg-red-500/10",
      gray: "border-gray-300 text-gray-600 bg-transparent hover:bg-gray-500/5 active:bg-gray-500/10",
      white:
        "border-white text-white bg-transparent hover:bg-white/5 active:bg-white/10",
    };

    const solidClasses = {
      primary:
        "bg-primary-main text-white border-primary-main hover:bg-primary-dark active:bg-primary-light",
      info: "bg-blue-500 text-white border-blue-500 hover:bg-blue-600 active:bg-blue-400",
      error:
        "bg-red-500 text-white border-red-500 hover:bg-red-600 active:bg-red-400",
      gray: "bg-gray-300 text-white border-gray-600 hover:bg-gray-600 active:bg-gray-400",
      white:
        "bg-white text-primary-main border-white hover:bg-gray-100 active:bg-gray-200",
    };

    const textClasses = {
      primary: "text-primary-main hover:underline border-none",
      info: "text-blue-500 hover:underline border-none",
      error: "text-red-500 hover:underline border-none",
      gray: "text-gray-500 hover:underline border-none",
      white: "text-white hover:underline border-none",
    };

    if (props.variant === "outlined") {
      return colorClasses[props.color || "primary"];
    }
    if (props.variant === "text") {
      return textClasses[props.color || "primary"];
    }
    return solidClasses[props.color || "primary"];
  }

  function checkSize() {
    switch (props.size) {
      case "sm":
        return "h-[32px] text-sm px-3";
      default:
        return "h-field-height px-3";
    }
  }

  return (
    <button
      onClick={(e) =>
        !props.disable && !props.loading && props.onClick && props.onClick(e)
      }
      type={props.type || "submit"}
      disabled={props.disable}
      data-testid={props.dataTest}
      className={twMerge(
        "border-2 duration-200 cursor-pointer",
        !props.disable && "active:scale-[98%]",
        checkVariant(),
        checkRounded(),
        checkSize(),
        props.disable ? "opacity-50 cursor-not-allowed" : "",
        props.className,
        props.fullWidth && "w-full",
        props.disableUppercase ? "" : "uppercase"
      )}
    >
      <div className="flex items-center justify-center text-center gap-2">
        {props.startIcon && <span>{props.startIcon}</span>}
        {props.loading ? "loading..." : props.children}
        {props.endIcon && <span>{props.endIcon}</span>}
      </div>
    </button>
  );
}

export function LinkButton({ children, className }: LinkProps) {
  return (
    <div className={twMerge("text-primary-dark hover:underline", className)}>
      {children}
    </div>
  );
}

interface IProps {
  children: ReactNode;
  rounded?: "full" | "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  loading?: boolean;
  className?: string;
  type?: "submit" | "reset" | "button";
  variant?: "outlined" | "solid" | "text";
  size?: "sm" | "default";
  disable?: boolean;
  color?: "primary" | "info" | "error" | "gray" | "white";
  fullWidth?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  dataTest?: string;
  disableUppercase?: boolean;
}

interface LinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}
