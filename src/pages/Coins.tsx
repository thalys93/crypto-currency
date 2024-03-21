import { useState, useEffect, useContext } from "react";
import { Container, Image, ListGroup, Row } from "react-bootstrap"
import { coinsData } from "../utils/api/CoinGecko";
import { cryptoCoinsData } from "../utils/api/DummyData";
import { WindowSizeContext } from "../utils/context/Responsive_Context";
import { Link } from "react-router-dom";

function Coins() {
  const [coins, setCoins] = useState<coinsData[]>([]);
  const [count, setCount] = useState(0);
  const windowSize = useContext(WindowSizeContext);

  useEffect(() => {
    const timer = setInterval(() => {      
      if (count < cryptoCoinsData.length) {
        setCoins(prevCoins => [...prevCoins, cryptoCoinsData[count]] as coinsData[]);
        setCount(prevCount => prevCount + 1);
      } else {
        clearInterval(timer);
      }
    }, 250);

    return () => clearInterval(timer);
  }, [count]);



  return (
    <Container>
      <Row className="mb-5">
        <div className="flex flex-row justify-center items-center mt-3 mb-5 select-none">
          <h1 className="prose:headings text-tertiaryV font-K2D text-xl"> Moedas <span className="text-lg text-purple-500 font-K2D hover:text-purple-300 transition-all">(10 primeiras)</span></h1>
        </div>
        <ListGroup className="gap-2 flex flex-col lg:p-0 p-3">
          {coins.map((coin, index) => (
            <ListGroup.Item key={index} className="flex flex-row justify-between items-center bg-slate-700 bg-opacity-40 border-slate-800 hover:border-[1px] hover:border-purple-600 animate__animated animate__fadeInLeft select-none  hover:bg-slate-500 transition-all">
              <div className="flex flex-row items-center">
                {windowSize < 768 ? (
                  <Image src={coin.image} alt={coin.name} width={30} height={30} />
                ) : (
                  <Image src={coin.image} alt={coin.name} width={60} height={60} />
                )}
                <span className="text-tertiaryV font-K2D text-md lg:text-lg ml-2 lg:ml-3 hover:text-purple-300">{coin.name}</span>
              </div>
              <div className="flex flex-row items-center lg:gap-5">
                <Link to={`/coins/${coin.id}`}>
                  <button className="p-2 rounded bg-purple-500 text-stone-50 transition-all hover:bg-purple-300 hover:text-purple-50 mr-5 w-[5.6rem] lg:w-[5rem]">
                    {windowSize < 768 ? "Ver" : "Ver mais"}
                  </button>
                </Link>
                <span className={windowSize < 768 ? "text-tertiaryV font-K2D hover:text-purple-300 w-[6rem] " : "text-tertiaryV font-K2D text-lg hover:text-purple-300 w-[8rem]"}>{coin.current_price} <span className="text-md text-slate-600"> {coin.symbol} </span></span>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Row>
    </Container>
  )
}

export default Coins