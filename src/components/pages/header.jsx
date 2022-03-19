import Image from "next/image";
import { header_style } from "../../styles";

/**
 *
 * @param {JSX} children - This `replaces the Header children ` used to set custom widgets for Header
 * @returns {JSX}
 * @param {JSX} title - This sets the page name or title
 * @returns {JSX}
 */
export default function Header({ children, title }) {
  return (
    children ?? (
      <div className={header_style.root}>
        <div className={header_style.logo}>
          <Image
            src="/assets/res/logo.svg"
            alt="App Logo"
            width="40px"
            height="40px"
          />
        </div>
        <div className={header_style.page}>
          <h1> {title} </h1>
          <div className={header_style.controls}>
            <Theme_Switcher />
            <Profile />
          </div>
        </div>
      </div>
    )
  );
}

function Theme_Switcher() {
  return <i className={`${header_style.theme_switcher} icon-light_switcher`} />;
}

function Profile() {
  return <div className={header_style.profile}></div>;
}
