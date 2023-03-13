import React from 'react';
import { AiOutlineSetting } from 'react-icons/ai';
import { BiMicrophone } from 'react-icons/bi';
import DisplayHomeItems from './DisplayHomeItems';
import logo from '../assets/logo.JPG';
import style from '../Style/HomePage.module.css';

const HomePage = () => (
  <div className={style.container}>
    <div className={style.nav}>
      <div>
        <img src={logo} alt="logo" width="100px" />
      </div>
      <div className={style.icons}>
        <div><BiMicrophone /></div>
        <div><AiOutlineSetting /></div>
      </div>
    </div>
    <div className={style.heroSection}>
      <div className={style.heroSectionText}>
        <div>Crypto Vault</div>
        <div className={style.ptag}>40 coins</div>
      </div>
    </div>
    <DisplayHomeItems />
  </div>
);

export default HomePage;
