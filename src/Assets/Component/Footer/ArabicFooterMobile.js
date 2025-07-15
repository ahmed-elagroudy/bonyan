import React from "react";
import "./Footer.css";
import { RoutesAr } from "../../Hooks/RoutesDynamic/RoutesDynamic";
import { Link } from "react-router-dom";
import Logo from "../../Svg/BLogoW.svg";
import FaceBook from "../../Svg/Footer/FaceBook_Logo.svg";
import Instgram from "../../Svg/Footer/Instgram_Logo.svg";
import YouTube from "../../Svg/Footer/Youtube_Logo.svg";
export default function ArabicFooterMobile() {
  return (
    <div className="FooterEn" dir="rtl">
      <div className="FooterWebS1">
        <div>
          <Link to={RoutesAr.Home}>
            <img src={Logo} alt="" className="FooterWebS3V1Img" />
          </Link>
        </div>
        {/*  */}
        <div className="FooterMobS2 ar">
          <div className="FooterWebS1V1 ar">
            <h3>الصفحات</h3>
            <Link to={RoutesAr.Home}>الرئيسية</Link>
            <Link to={RoutesAr.About}>ماذا عنا</Link>
            <Link to={RoutesAr.Projects}>المشاريع</Link>
          </div>
          <div className="FooterMobS2L ar"></div>

          <div className="FooterWebS1V1 ar">
            <h3>مساعدة</h3>
            <Link to={RoutesAr.Contact}>تواصل معنا</Link>
            <Link to={RoutesAr.Careers}>المهن</Link>
          </div>
        </div>

        {/*  */}
        <div className="FooterWebS1V1 ar">
          <h3>للتواصل</h3>
          <a href="mailto:info@bonyan-eg.net">
            البريد <br /> info@bonyan-eg.net
          </a>
          <div className="PhoneNumberTD">
            الهاتف
            <a href="tel:+201117012317" dir="ltr">
              <br /> +201117012317
            </a>
            <a href="tel:+201117012317" dir="ltr">
              <br /> +201019299325
            </a>
          </div>
        </div>
        {/*  */}
        <div className="FooterWebS1V1 ar">
          <div className="FooterWebS1V1 ar">
            <h3>العنوان</h3>
            <div dir="rtl">
              بولجون 6 - سوديك
              <br /> كمبوند - زايد 6
            </div>
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

        {/*  */}
        <div className="FooterWebS3V2 ar">جميع الحقوق محفوظة © 2025 لمجموعة بنيان.</div>
        {/*  */}
        <div className="Footer_Soical">
          <a href="https://www.facebook.com/washyourstuff" target="blank">
            <img src={FaceBook} alt="" className="Footer_Soical_Img" />
          </a>
          <a href="https://www.instagram.com/washyourstuff?igsh=MTBoZHVuYndtaDF2bQ==" target="blank">
            <img src={Instgram} alt="" className="Footer_Soical_Img" />
          </a>
          <a href="https://www.youtube.com/@washyourstuff" target="blank">
            <img src={YouTube} alt="" className="Footer_Soical_Img" />
          </a>
        </div>
        {/*  */}
      </div>
    </div>
  );
}
