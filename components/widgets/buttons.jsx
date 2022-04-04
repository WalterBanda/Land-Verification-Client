import { components } from "../../styles";

export function Button({ onClick, className, children }) {
  return (
    <button onClick={onClick} className={`${className} ${components.button}`}>
      {children}
    </button>
  );
}
