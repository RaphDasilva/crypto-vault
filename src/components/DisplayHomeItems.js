import { useSelector } from 'react-redux';
import { IoIosArrowForward } from 'react-icons/io';
import style from '../Style/DisplayHomeItems.module.css';

const DisplayHomeItems = () => {
  const { coins, status } = useSelector((store) => store.coins);

  let outPut;
  if (status === 'loading') {
    outPut = (
      <div className="loading">
        <h5>Loading....</h5>
      </div>
    );
  }

  return (
    <div className={style.container}>
      <div>{outPut}</div>
      <input type="search" placeholder="Search" />
      <div className={style.itemWrapp}>
        {
        coins.map((item) => (
          <div key={item.id} className={style.itemContainer}>
            <div>
              <div><IoIosArrowForward /></div>
              <img className={style.img} src={item.image} alt={item.name} />
            </div>
            <div>
              <div>{item.name}</div>
              <div>
                $
                {item.current_price}
              </div>
              <div>{item.price_change_percentage_24}</div>
            </div>
          </div>
        ))
    }
      </div>
    </div>
  );
};

export default DisplayHomeItems;
