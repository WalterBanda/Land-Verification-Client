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
  const validate_email = (event) => {};
  const validate_password = (event) => {};

  return (
    <Input
      hint={type === "password" ? "password" : "Email address"}
      icon="verifier-info"
      input_type="email"
    />
  );
}
