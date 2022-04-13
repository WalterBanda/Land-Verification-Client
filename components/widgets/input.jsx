import { useState } from "react";
import { input } from "../../styles";

export function Input({
  icon,
  icon_leading,
  hint,
  input_type,
  className,
  ref,
  onChange,
  value,
}) {
  return (
    <div
      className={`${className} ${input.email_input} 
    ${
      icon !== null && icon_leading !== null && icon_leading !== undefined
        ? icon_leading === true
          ? `${input.leading}`
          : `${input.end}`
        : ""
    }
    `}
    >
      {icon !== null ? <i className={`icon ${icon}`} /> : <></>}
      <input
        type={input_type}
        placeholder={hint ?? ""}
        ref={ref}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export function AuthInput({ type }) {
  const [typing, setTyping] = useState(false);
  const validate_email = (event) => {
    setTyping(true);
  };
  const validate_password = (event) => {
    setTyping(true);
  };

  return (
    <Input
      hint={type === "password" ? "Your Password" : "Email address"}
      icon={type === "password" ? "verifier-password" : "verifier-email"}
      input_type={type === "password" ? "password" : "email"}
      onChange={type === "password" ? validate_password : validate_email}
      className={typing ? ` ${input.auth}` : input.auth}
    />
  );
}
