/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { SingUpFromSection, LoginFormSection } from "../../components";
import "./login-singUp.modules.css";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
interface iProps {
  setIsNavbarShow: any;
}
const LoginSighup = (props: iProps) => {
  const { setIsNavbarShow } = props;
  const navigate = useNavigate();
  useEffect(() => {
    setIsNavbarShow(false);
  }, [setIsNavbarShow]);

  const handleBack = () => {
    setIsNavbarShow(true);
    navigate("/");
  };
  return (
    <section className="login_sighup___from">
      <MdOutlineKeyboardBackspace
        onClick={handleBack}
        className="from___back--icon"
      />
      <div className="login_sighup___from--fromSection">
        <Routes>
          <Route path="register" element={<SingUpFromSection />} />
          <Route path="login" element={<LoginFormSection />} />
        </Routes>
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
