import { useState } from "react";
import "../../styles/header.css";
import BtnMenuClose from "../ui/btnCloseMenuNav/btnMenuClose.JSX";
import BtnMenu from "../ui/btnMenuNav/btnMenu.jsx";
import Logo from "../ui/logo/logo.jsx";
import NavBar from "../ui/navBar/navBar.jsx";

export default function Header() {
  const [menuActivo, setMenuActivo] = useState(false);

  return (
    <>
      <header className="header">
        <Logo />
        <NavBar className={menuActivo ? "nav-bar active" : "nav-bar"} />
        {menuActivo && (
          <>
            <BtnMenuClose
              className={menuActivo ? "visible" : "hidden"}
              onClose={() => setMenuActivo(false)}
            />
          </>
        )}
        {!menuActivo && (
          <BtnMenu
            className={menuActivo ? "visible" : "hidden"}
            onOpen={() => setMenuActivo(true)}
          />
        )}
      </header>
    </>
  );
}