import { useSelector } from 'react-redux';
import { BsArrowRightCircle } from 'react-icons/bs';
import { useNavigate, useSearchParams } from 'react-router-dom';
import style from '../Style/DisplayHomeItems.module.css';

const DisplayHomeItems = () => {
  const [search, setSearch] = useSearchParams();
  const { coins, status } = useSelector((store) => store.coins);
  const navigate = useNavigate();

  const clickArrow = (id) => {
    navigate(`/details/${id}`);
  };

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
      <input
        type="text"
        placeholder="Search Here"
        value={search.get('filter') || ''}
        onChange={(e) => {
          const filter = e.target.value;
          if (filter) {
            setSearch({ filter });
          } else {
            setSearch({});
          }
        }}
      />
      <div className={style.itemWrapp}>
        {coins
          .filter((coin) => {
            const filter = search.get('filter');
            if (!filter) return true;
            const name = coin.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((item) => (
            <div key={item.id} className={style.itemContainer}>
              <div className={style.items}>
                <img className={style.img} src={item.image} alt={item.name} />
                <div>
                  <BsArrowRightCircle
                    className={style.arrowRight}
                    title="backIcon"
                    onClick={() => clickArrow(item.id)}
                  />
                </div>
              </div>
              <div className={style.itemText}>
                <div className={style.coinName}>{item.name}</div>
                <div className={style.coinPrice}>
                  $
                  {item.current_price}
                </div>
                <div
                  className={
                    item.price_change_percentage_24h < 0
                      ? style.priceLess
                      : style.priceMore
                  }
                >
                  {item.price_change_percentage_24h}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DisplayHomeItems;
