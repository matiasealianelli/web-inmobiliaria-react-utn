import { useEffect, useState } from "react";
import "../../styles/header.css";
import BtnMenuClose from "../ui/btnCloseMenuNav/btnMenuClose.JSX";
import BtnMenu from "../ui/btnMenuNav/btnMenu.jsx";
import Logo from "../ui/logo/logo.jsx";
import NavBar from "../ui/navBar/navBar.jsx";

export default function Header() {
  const [menuActivo, setMenuActivo] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let valueInitHeader = 0;
      let heightScroll = document.documentElement.scrollTop;
      if (heightScroll === valueInitHeader) {
        document.querySelector("header").style.backgroundColor = "transparent";
      } else if (heightScroll > valueInitHeader) {
        document.querySelector("header").style.backgroundColor = "#223d74";
        document.querySelector("header").style.transition = "all 0.3s ease";
      } else if (heightScroll < valueInitHeader) {
        document.querySelector("header").style.backgroundColor = "transparent";
      }
    });
  }, []);
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
