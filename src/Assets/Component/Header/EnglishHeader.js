import "./Header.css";
import { useLocation, useNavigate, Link } from "react-router-dom";
import BLogo from "../../Svg/BLogoW.svg";
import GLIcon from "../../Images/GlobalLang.png";
import { menu, contactLink } from "./HeaderData";

export default function EnglishHeader() {
  const location = useLocation();
  const navigate = useNavigate();
  const isActive = (path) => location.pathname === path;

  const handleLanguageChange = () => {
    const currentPath = location.pathname;
    const isArabic = currentPath.endsWith("/ar");
    const basePath = isArabic ? currentPath.slice(0, -3) : currentPath;
    const newPath = isArabic ? basePath : `${basePath}${basePath.endsWith("/") ? "ar" : "/ar"}`;
    navigate(newPath, { replace: true });
  };

  return (
    <>
      <div className="HeadEn">
        <div className="HeaderC">
          <div>
            <Link to="/">
              <img src={BLogo} alt="" className="BLogo" />
            </Link>
          </div>
          <div className="HeadLinks">
            {menu.map(({ label, to }) => (
              <Link to={to} key={to} className={isActive(to) ? "active" : ""}>
                <div className={`HeaderLaT FLeowB20pxFW7 ${isActive(to) ? "active" : ""}`}>{label}</div>
              </Link>
            ))}
          </div>
          <div className="HeaderLC">
            <div>
              <button className="HP3Btn" onClick={handleLanguageChange}>
                <div className="FLeowB16pxFW7">AR</div>
                <img src={GLIcon} alt="" className="HLImg" />
              </button>
            </div>
            <Link to={contactLink.to} className="HP3BtnC">
              <div className="FLeowB16pxFW7">{contactLink.label}</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
