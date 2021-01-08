import moment from "moment";
import * as React from "react";
// import { Avatar } from "react-lorem-ipsum";
import image from '../../../assets/perfil-black.jpg'
export const Header = () => (
  <header className="headerr">
    <span className="date">{moment().format("DD-MM-YYYY")}</span>
    <h3>Let's &nbsp; do &nbsp;it</h3>
    <div id="avatar">
      <img src={image} alt="" />
    </div>
  </header>
);
