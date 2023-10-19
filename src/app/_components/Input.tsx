import React, { forwardRef } from "react";

const Input = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      className={`input input-bordered ${props.className}`}
    />
  );
});

Input.displayName = "Input";

export default Input;
