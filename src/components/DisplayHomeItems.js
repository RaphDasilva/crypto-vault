import { useSelector } from 'react-redux';

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
    <>
      <div>{outPut}</div>
      {
        coins.map((item) => (
          <div key={item.id}>
            <div>click</div>
            <img src={item.image} alt={item.name} />
            <div>{item.name}</div>
            <div>
              $
              {item.current_price}
            </div>
            <div>{item.price_change_percentage_24}</div>
          </div>
        ))
    }
    </>
  );
};

export default DisplayHomeItems;
