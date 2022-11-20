import { forwardRef, useState } from "react";
import { input } from "../../styles";

export const Input = forwardRef(
  ({ icon, icon_leading, hint, input_type, className, ...props }, ref) => {
    return (
      <div
        className={`${className} ${input.email_input} ${
          icon && icon_leading ? `${input.leading}` : `${input.end}`
        }`}
      >
        {icon && <i className={`icon ${icon}`} />}
        <input type={input_type} placeholder={hint} ref={ref} {...props} />
      </div>
    );
  }
);
