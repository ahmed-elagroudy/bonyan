import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import "./HeaderMob.css";
import Logo from "../../Svg/BLogoW.svg";
import HeaderMobIcon from "../../Svg/Header/HeaderMobClose.svg";
import HeaderMobClose from "../../Svg/Header/HeaderMobIcon.svg";
import { menu, contactLink } from "./HeaderData";

export default function EnglishHeaderMobile() {
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showDropdown && menuRef.current && !menuRef.current.contains(event.target) && buttonRef.current && !buttonRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    const handleScroll = () => {
      if (showDropdown) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showDropdown]);

  const handleLanguageChange = () => {
    const currentPath = location.pathname;
    const isArabic = currentPath.endsWith("/ar");
    const basePath = isArabic ? currentPath.slice(0, -3) : currentPath;
    const newPath = isArabic ? basePath : `${basePath}${basePath.endsWith("/") ? "ar" : "/ar"}`;
    navigate(newPath, { replace: true });
    setShowDropdown(false);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setShowDropdown(false);
  };

  return (
    <>
      <div className="Header_Main_Mob">
        <div className="Header_Main_Container">
          <div className="Header_Container" dir="rtl">
            <div className="Logo">
              <Link to="/ar">
                <img src={Logo} alt="Logo" className="Header_Logo_Mob" />
              </Link>
            </div>
            <div className="OpenIcon_Mob">
              <div onClick={handleLanguageChange} className="CLMob FLeowB24pxFW7">
                EN
              </div>
              <button ref={buttonRef} className="OpenIcon_Mob_Button" onClick={toggleDropdown}>
                <img src={showDropdown ? HeaderMobClose : HeaderMobIcon} alt="MenuIcon" className="MenuIcon_Mob" />
              </button>
            </div>
          </div>
        </div>
        {showDropdown && (
          <div className="DropdownMenu ar FLeowB20pxFW7" ref={menuRef} dir="rtl">
            <ul>
              {menu.map(({ labelAr, toAr }) => (
                <li key={toAr} onClick={() => handleNavigation(toAr)}>
                  {labelAr}
                </li>
              ))}
              <li onClick={() => handleNavigation(contactLink.toAr)}>{contactLink.labelAr}</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
