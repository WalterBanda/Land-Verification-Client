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
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const theme = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkTheme(theme.matches);
    theme.addEventListener("change", (e) => {
      if (e.matches) {
        setIsDarkTheme(true);
      } else {
        setIsDarkTheme(false);
      }
    });
  }, []);

  // useEffect(() => {
  //   // const theme = isDarkTheme ? "dark" : "light";
  //   // document.querySelector("html").setAttribute("theme", theme);
  // }, [isDarkTheme]);

  const mqListener = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  return [isDarkTheme, mqListener];
};

function Theme_Switcher() {
  const [isDarkTheme, changeTheme] = useThemeDetector();

  return (
    <div className={header.theme_switcher} onClick={changeTheme}>
      {isDarkTheme ? (
        <i className="verifier-light" />
      ) : (
        <i className="verifier-dark" />
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
