import moment from "moment";
import * as React from "react";
// import { Avatar } from "react-lorem-ipsum";
import image from '../../../assets/perfil-black.jpg'
export const Header = () => (
  <header>
    <span className="date">{moment().format("DD-MM-YYYY")}</span>
    <h3>Today</h3>
    <div className="avatar">
      <img src={image} alt="" />
    </div>
  </header>
);
