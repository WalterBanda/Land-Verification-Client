import { input } from "../../styles";

export function Input({ icon, icon_leading, hint, input_type, className }) {
  return (
    <div
      className={`${className} ${input.email_input} 
    ${
      icon !== null && icon_leading !== null && icon_leading !== undefined
        ? icon_leading === true
          ? `${input.leading}`
          : `${input.end}`
        : ''
    }
    `}
    >
      {console.log(icon_leading)}
      {icon !== null ? <i className={`icon ${icon}`} /> : <></>}
      <input type={input_type} placeholder={hint ?? ""} />
    </div>
  );
}
