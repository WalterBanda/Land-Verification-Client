import { components } from "../../styles";

export function Button({ onClick, className, children }) {
  return (
    <button onClick={onClick} className={`${className} ${components.button}`}>
      {children}
    </button>
  );
}

export function Authlet({ icon, callback, className }) {
  return (
    <button className={`${className} ${components.authlet}`} onClick={callback}>
      <i className={icon ?? "verifier-info"} />
    </button>
  );
}