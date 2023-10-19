import React, { forwardRef } from "react";

const Form = forwardRef<
  HTMLFormElement,
  React.FormHTMLAttributes<HTMLFormElement>
>((props, ref) => {
  return (
    <form
      {...props}
      ref={ref}
      className={`card card-bordered m-4 bg-base-100 p-4 shadow-lg ${props.className}`}
    />
  );
});

Form.displayName = "Form";

export default Form;
