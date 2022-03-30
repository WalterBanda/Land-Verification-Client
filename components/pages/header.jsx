import Image from "next/image";
import profile from "../../public/assets/img/profile.png";
import { useState, useEffect } from "react";
import { header } from "../../styles";

export default function Header({ title, children }) {
  return (
    children ?? (
      <div className={header.root}>
        <div className={header.logo}>
          <Image
            src="/assets/res/logo.svg"
            alt="App Logo"
            width="40px"
            height="40px"
          />
        </div>
        <div className={header.page}>
          <h1> {title}</h1>
          <div className={header.controls}>
            <Theme_Switcher />
            <Profile />
          </div>
        </div>
      </div>
    )
  );
}

const useThemeDetector = () => {
  return [isDarkTheme, mqListener];
};

function Theme_Switcher() {
  const getCurrentTheme = () =>
    typeof window == "window"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
      : false;
  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={header.theme_switcher} onClick={changeTheme}>
      {isDarkTheme ? (
        <i className="verifier-dark" />
      ) : (
        <i className="verifier-light" />
      )}
    </div>
  );
}

function Profile() {
  return (
    <div className={header.profile}>
      <Image src={profile} alt="User Profile Photo" />
    </div>
  );
}
