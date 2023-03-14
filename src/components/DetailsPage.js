import React, { useEffect } from 'react';
import { useLocation, NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  AiOutlineSetting,
  AiFillFacebook, AiFillGithub, AiFillTwitterCircle, AiFillRedditCircle,
} from 'react-icons/ai';
import { BiMicrophone } from 'react-icons/bi';
import { IoIosArrowBack } from 'react-icons/io';
import { getDetails } from '../redux/DetailsPage/DetailsPageSlice';
import style from '../Style/DetailsPage.module.css';
import logo from '../assets/logo.png';
import Footer from './Footer';

const DetailsPage = () => {
  const { detail, status } = useSelector((store) => store.details);
  const dispatch = useDispatch();
  const { coinId } = useParams();
  const location = useLocation();

  useEffect(() => {
    dispatch(getDetails(coinId));
  }, [dispatch, coinId]);

  let outPut;
  if (status === 'loading') {
    outPut = (
      <div className="loading">
        <h5>Loading....</h5>
      </div>
    );
  }

  console.log(detail);
  return (
    <>
      {detail && (
        <div className={style.container}>
          <div className={style.nav}>
            <div className={style.info}>
              {location.pathname !== '/' && (
                <div className="headerBackIcon">
                  <NavLink to="/">
                    <IoIosArrowBack className={style.arrow} />
                  </NavLink>
                </div>
              )}
              <div>
                <img src={logo} alt="logo" width="100px" />
              </div>
            </div>
            <div className={style.icons}>
              <div>
                <BiMicrophone />
              </div>
              <div>
                <AiOutlineSetting />
              </div>
            </div>
          </div>
          <div>{outPut}</div>
          <div className={style.heroSection}>
            <div className={style.heroSectionText}>
              <div className={style.img}>
                <img src={detail.image.large} alt={detail.name} width="100px" />
              </div>
              <div>
                <div>{detail.name}</div>
                <div className={style.ptag}>
                  <div>
                    (
                    {detail.symbol}
                    )
                  </div>
                  {' '}
                  $
                  {detail.market_data.current_price.usd}
                </div>
              </div>
            </div>
          </div>

          <div className={style.coinDetailsHeader}>
            <h3>Coin Details</h3>
          </div>
          <div className={style.coinDetailsInfo}>
            <table>
              <tbody>
                <tr>
                  <td>Name: </td>
                  <td>{detail.name}</td>
                </tr>
                <tr>
                  <td>USD Price: </td>
                  <td>
                    $
                    {detail.market_data?.current_price
                      ? detail.market_data.current_price.usd
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>EUR Price: </td>
                  <td>
                    &#8364;
                    {detail.market_data?.current_price
                      ? detail.market_data.current_price.eur
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>GBP Price: </td>
                  <td>
                    &#163;
                    {detail.market_data?.current_price
                      ? detail.market_data.current_price.gbp
                      : null}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="coinDetails">
            <div className={style.coinDetailsHeader}>
              <h3>More Info</h3>
            </div>
            <div className={style.coinDetailsInfo}>
              <table>
                <tbody>
                  <tr>
                    <td>Market Rank: </td>
                    <td>{detail.market_cap_rank}</td>
                  </tr>
                  <tr>
                    <td>Percentage Change: </td>
                    <td>
                      {detail.market_data
                        ? detail.market_data.price_change_percentage_24h
                        : null}
                    </td>
                  </tr>
                  <tr>
                    <td>Circulating Supply: </td>
                    <td>
                      {detail.market_data
                        ? detail.market_data.circulating_supply
                        : null}
                    </td>
                  </tr>
                  <tr>
                    <td>Market Supply: </td>
                    <td>
                      {detail.market_data
                        ? detail.market_data.total_supply
                        : null}
                    </td>
                  </tr>
                  <tr>
                    <td>Market Cap: </td>
                    <td>
                      $
                      {detail.market_data?.market_cap
                        ? detail.market_data.market_cap.usd
                        : null}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="coinDetails">
            <div className={style.coinDetailsHeader}>
              <h3>Socials</h3>
            </div>
            <div className={style.coinDetailsInfo}>
              <ul>
                <li>
                  <AiFillFacebook className={style.detailsIcons} />
                </li>
                <li>
                  <AiFillTwitterCircle className={style.detailsIcons} />
                </li>
                <li>
                  <AiFillGithub className={style.detailsIcons} />
                </li>
                <li>
                  <AiFillRedditCircle className={style.detailsIcons} />
                </li>
              </ul>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default DetailsPage;
