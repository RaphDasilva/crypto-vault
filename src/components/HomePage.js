import React from 'react';
import { AiOutlineSetting } from 'react-icons/ai';
import { BiMicrophone } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import DisplayHomeItems from './DisplayHomeItems';
import logo from '../assets/logo.png';
import style from '../Style/HomePage.module.css';
import Footer from './Footer';
import chart from '../assets/chart.png';

const HomePage = () => {
  const { coins } = useSelector((store) => store.coins);
  return (
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
        <img src={chart} alt="chart" />
        <div className={style.heroSectionText}>
          <div>Crypto Vault</div>
          <div className={style.ptag}>
            {coins.length}
            {' '}
            Coins Listed
          </div>
        </div>
      </div>
      <DisplayHomeItems />
      <Footer />
    </div>
  );
};
export default HomePage;
