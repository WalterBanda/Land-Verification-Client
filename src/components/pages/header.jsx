import { header_style } from "../../styles";

/**
 *
 * @param {JSX} children - This `replaces the Header children ` used to set custom widgets for Header
 * @returns
 */
export default function Header({ children }) {
  return children ?? <div className={header_style.root}>
      
  </div>;
}
