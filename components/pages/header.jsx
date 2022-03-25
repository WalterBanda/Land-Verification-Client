import Image from "next/image";
import profile from "../../public/assets/img/profile.png";
import { useState } from "react";
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

function Theme_Switcher() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
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
