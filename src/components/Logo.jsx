/* eslint-disable react/prop-types */
import camera from "../assets/img/Camera.svg";

export const Logo = ({ text }) => {
  return (
    <div className="auth-form-logo-container">
      <img src={camera} alt="Escudo" />
      <span>&nbsp;&nbsp;{text}</span>
    </div>
  );
};
