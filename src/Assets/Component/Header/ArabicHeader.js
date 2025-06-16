import "./Header.css";
import { useLocation, useNavigate, Link } from "react-router-dom";
import BLogo from "../../Svg/BLogoW.svg";
import GLIcon from "../../Images/GlobalLang.png";
import { menu, contactLink } from "./HeaderData";

export default function ArabicHeader() {
  const location = useLocation();
  const navigate = useNavigate();
  const isActive = (path) => location.pathname === path;

  const handleLanguageSwitch = () => {
    const currentPath = location.pathname;
    const isArabic = currentPath.includes("/ar");

    if (isArabic) {
      const basePath = currentPath.slice(0, -3);

      const newPath = basePath === "" ? "/" : basePath;

      navigate(newPath, { replace: true });
    }
  };
  return (
    <>
      <div className="HeadEn">
        <div className="HeaderC" dir="rtl">
          <div>
            <Link to="/ar">
              <img src={BLogo} alt="" className="BLogo" />
            </Link>
          </div>
          <div className="HeadLinks">
            {menu.map(({ labelAr, toAr }) => (
              <Link to={toAr} key={toAr} className={isActive(toAr) ? "active" : ""}>
                <div className={`HeaderLaTAr FLeowB20pxFW7  ${isActive(toAr) ? "active" : ""}`}>{labelAr}</div>
              </Link>
            ))}
          </div>
          <div className="HeaderLC">
            <div>
              <button className="HP3Btn" onClick={handleLanguageSwitch}>
                <img src={GLIcon} alt="" className="HLImg" />
                <div className="FLeowB16pxFW7">EN</div>
              </button>
            </div>
            <Link to={contactLink.toAr} className="HP3BtnC">
              <div className="FLeowB16pxFW7 HeaderLaTAr">{contactLink.labelAr}</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
