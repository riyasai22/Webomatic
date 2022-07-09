import React, { createContext, useEffect, useState } from "react";

export const ThemesContext = createContext();

export const ThemesProvider = (props) => {
  const [theme, setThemes] = useState("light");
  const getThemes = async () => {
    const check = localStorage.getItem("colortheme");
    if (check) {
      setThemes(JSON.parse(check));
    } else {
      localStorage.setItem("colortheme", JSON.stringify(theme));
      setThemes(theme);
    }
  };
  useEffect(() => {
    getThemes();
  }, []);
  return (
    <ThemesContext.Provider value={[theme]}>
      {props.children}
    </ThemesContext.Provider>
  );
};
