import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getFirestore, onSnapshot, setDoc } from "firebase/firestore";
import { useEffect, useState, createContext, useContext, useMemo } from "react";
import { useAuth } from "./auth";

const appContext = createContext();

export function useApp() {
  return useContext(appContext);
}

export function AppProvider(props) {
  const { user, app } = useAuth();
  const [theme, changeTheme] = useState();

  useEffect(() => {
    if (!!app) {
      if (!!user) {
        const unsub = onSnapshot(
          doc(getFirestore(app), "users", `${user?.uid}`),
          (doc) => {
            const data = doc.data();

            if (data?.theme && data?.theme !== theme) {
              changeTheme(data?.theme);
            }
          }
        );

        onAuthStateChanged(getAuth(app), (currentUser) => {
          if (!currentUser) {
            console.log("Unsubsribing");
            return unsub();
          }
        });
      }
    }
  });

  useEffect(() => {
    if (!!theme) {
      const r = document.querySelector(":root");
      r.style.setProperty("--text-subheader", `rgba(${theme}, 1)`);
      r.style.setProperty("--text-active", `rgba(${theme}, 1)`);

      if (!!app) {
        setDoc(doc(getFirestore(app), "users", `${user?.uid}`), {
          theme,
        }).catch((error) => console.log(error?.code));
      }
    }
  }, [theme]);

  return <appContext.Provider value={{ theme, changeTheme }} {...props} />;
}
