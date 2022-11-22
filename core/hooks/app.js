import { useEffect, useState, createContext, useContext } from "react";

const appContext = createContext();

export function useApp() {
  return useContext(appContext);
}

export function AppProvider(props) {
  const [theme, changeTheme] = useState("0, 144, 255");

  useEffect(() => {
    const r = document.querySelector(":root");
    r.style.setProperty("--text-subheader", `rgba(${theme}, 1)`);
    r.style.setProperty("--text-active", `rgba(${theme}, 1)`);
  }, [theme]);

  return <appContext.Provider value={{ theme, changeTheme }} {...props} />;
}
