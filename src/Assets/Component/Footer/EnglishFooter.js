import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { RoutesEn } from "../../Hooks/RoutesDynamic/RoutesDynamic";
import Logo from "../../Svg/BLogoW.svg";
import FaceBook from "../../Svg/Footer/FaceBook_Logo.svg";
import Instgram from "../../Svg/Footer/Instgram_Logo.svg";
import YouTube from "../../Svg/Footer/Youtube_Logo.svg";
export default function EnglishFooter() {
  return (
    <div className="FooterEn">
      <div className="FooterWebS1">
        {/*  */}
        <div className="FooterWebS1V1">
          <h3>Pages</h3>
          <Link to={RoutesEn.Home}>Home</Link>
          <Link to={RoutesEn.About}>About Us</Link>
          <Link to={RoutesEn.Projects}>Projects</Link>
        </div>
        <div className="FooterWebS1V1">
          <h3>Help</h3>
          <Link to={RoutesEn.Contact}>Contact us</Link>
          <Link to={RoutesEn.Careers}>Careers</Link>
        </div>
        {/*  */}
        <div className="FooterWebS1V1">
          <h3>Contact Us</h3>
          <a href="mailto:info@bonyan-eg.net">
            Email <br /> info@bonyan-eg.net
          </a>
          <div className="PhoneNumberTD">
            Phone
            <a href="tel:+201117012317" className="">
              <br /> +201117012317 <br />
              +201019299325
            </a>
          </div>
        </div>
        {/*  */}
        <div className="FooterWebS1V1">
          <div className="FooterWebS1V1">
            <h3>Locations</h3>
            Polgon 6 - Sodic <br /> Compound - Zayed 6
          </div>
        </div>
        {/*  */}
        {/*  */}
      </div>
      {/*  */}
      <div className="FooterWebS2"></div>
      {/*  */}
      <div className="FooterWebS3">
        {/*  */}
        <div>
          <Link to={RoutesEn.Home}>
            <img src={Logo} alt="" className="FooterWebS3V1Img" />
          </Link>
        </div>
        {/*  */}
        <div className="FooterWebS3V2">Copyright © 2025 Bonyan Group - All Rights Reserved.</div>
        {/*  */}
        <div className="Footer_Soical">
          <a href="" target="blank">
            <img src={FaceBook} alt="" className="Footer_Soical_Img" />
          </a>
          <a href="" target="blank">
            <img src={Instgram} alt="" className="Footer_Soical_Img" />
          </a>
          <a href="" target="blank">
            <img src={YouTube} alt="" className="Footer_Soical_Img" />
          </a>
        </div>
        {/*  */}
      </div>
    </div>
  );
}
