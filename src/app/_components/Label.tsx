import React, { forwardRef } from "react";

const Label = forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>((props, ref) => {
  return (
    <label
      {...props}
      ref={ref}
      className={`text-lg font-bold text-gray-700 ${props.className}`}
    />
  );
});

Label.displayName = "Label";

export default Label;
