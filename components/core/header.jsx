import Image from "next/image";
import { useState, useEffect, useRef, createRef } from "react";
import { header } from "../../styles";
import { useAuth } from "@core/hooks/auth";
import { Button } from "..";
import { useRouter } from "next/router";
import { getAuth, signOut } from "firebase/auth";
import { ClickAwayListener, PopperUnstyled } from "@mui/base";

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
          <span>
            <h1> {title}</h1>
          </span>
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

  useEffect(() => {
    const theme = isDarkTheme ? "dark" : "light";
    document.querySelector("html").setAttribute("theme", theme);
  }, [isDarkTheme]);

  const mqListener = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  return [isDarkTheme, mqListener];
};

export function Theme_Switcher() {
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
  const { user } = useAuth();
  const router = useRouter();

  const logout = () =>
    signOut(getAuth())
      .then(() => {
        router.push("/");
      })
      .catch((error) => {
        toast.error(`Unable to logout, ErrorCode: ${error?.code}`);
      });

  const [open, close] = useState(false);
  const anchorEl = useRef(null);

  return (
    <ClickAwayListener onClickAway={() => close(false)}>
      <div>
        <div
          className={header.profile}
          ref={anchorEl}
          onClick={() => close((prev) => !prev)}
        >
          {user?.photoURL && <img src={user.photoURL} alt="" layout="fill" />}
        </div>
        <PopperUnstyled open={open} anchorEl={anchorEl.current}>
          <div className={header.detail}>
            <p>{user?.displayName?.toLocaleUpperCase() ?? "UserName"}</p>
            <Button onClick={() => logout()}>Logout</Button>
          </div>
        </PopperUnstyled>
      </div>
    </ClickAwayListener>
  );
}
