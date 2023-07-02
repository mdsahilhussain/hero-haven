/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import { SingUpFromSection } from "../../components";
import "./login-singUp.modules.css";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
interface iProps {
  setIsNavbarShow: any;
}
const LoginSighup = (props: iProps) => {
  const { setIsNavbarShow } = props;

  useEffect(() => {
    setIsNavbarShow(false);
  }, []);

  const handleBack = () => {
    setIsNavbarShow(true);
  };
  return (
    <section className="login_sighup___from">
      <MdOutlineKeyboardBackspace
        onClick={handleBack}
        className="from___back--icon"
      />
      <div className="login_sighup___from--fromSection">
        <SingUpFromSection />
      </div>
      <div className="login_sighup___from--banner">
        <div className="from__banner">
          <div className="from__banner--detail glassmorphism">
            <h1>
              <span>Hero Haven</span>
            </h1>
            <h5>
              Choose from a diverse collection of high-quality designs
              meticulously crafted to enhance your website's visual appeal,
              engage users, and boost conversions. Our hero sections are
              carefully designed to leave a lasting impression and create an
              immersive experience for your visitors.
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginSighup;