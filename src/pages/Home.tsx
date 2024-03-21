import { useContext, useEffect, useState } from 'react'
import { Container, Row, Col, Image, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { WindowSizeContext } from '../utils/context/Responsive_Context'
import DevelopersList from '../components/developersList';
import { cryptoCoinsData } from '../utils/api/DummyData';
import { coinsData } from '../utils/api/CoinGecko';

function Home() {
  const windowSize = useContext(WindowSizeContext);
  const [coins, setCoins] = useState<coinsData[]>([]);
  const [count, setCount] = useState(0);  

  useEffect(() => {
    const timer = setInterval(() => {
      if (count < cryptoCoinsData.length) {
        setCoins(prevCoins => [...prevCoins, cryptoCoinsData[count]].sort(() => Math.random() - Math.random()).slice(0,3) as coinsData[]);
        setCount(prevCount => prevCount + 1);
                
      } else {
        clearInterval(timer);
      }
    }, 10)

    return () => clearInterval(timer);
  }, [count])

  return (
    <Container>
      <Row className='flex-1 items-center mt-[3rem] lg:mt-[9rem] mb-[3rem] lg:mb-[10rem] animate__animated animate__fadeIn'>
        <Col sm className={windowSize < 768 ? 'mb-4' : ''}>        
            <div className='flex flex-wrap gap-3 justify-center items-center mb-3'>
              <ListGroup className='shadow-2xl shadow-purple-800 animate__animated animate__fadeInLeft'>
                {coins.map((coin, index) => (
                  <ListGroup.Item key={index} className='select-none bg-slate-700 bg-opacity-35 text-purple-200 font-Jost border-purple-700  text-xl flex flex-row items-center gap-5 hover:text-purple-500 transition-all'>
                    <Image src={coin.image} className='w-[3rem] h-[3rem] object-cover' />
                    {coin.name}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </div>          
        </Col>
        <Col sm className={windowSize < 768 ? 'shadow-xl p-4 w-[23rem] ml-3 mt-3 shadow-purple-800 rounded-xl bg-slate-900 bg-opacity-45 border-b-purple-500 border-[1px] border-t-purple-500 border-l-purple-500 border-r-purple-500' : 'shadow-2xl p-4 shadow-purple-800 rounded-xl bg-slate-900 bg-opacity-45 border-b-purple-500 border-[1px] border-t-purple-500 border-l-purple-500 border-r-purple-500'}>
          <section>
            <div className={windowSize < 768 ? 'flex flex-col text-center justify-center gap-2 items-center' : 'flex flex-col text-start justify-center gap-2'}>
              <h1 className='font-Jost text-tertiaryV text-sm ml-1 select-none'> Crypto Currency - a moeda do Presente.</h1>
              <span className={windowSize < 768 ? 'text-slate-50 text-xl font-K2D select-none w-[25rem]' : 'text-slate-50 text-3xl font-Poppins font-light select-none w-[25rem]'}>
                Conectando o futuro com a <span className='text-purple-500 font-medium transition-all hover:text-purple-300'>moeda do presente</span>
              </span>

              <div className='flex flex-row gap-3 mt-3'>
                <Link to='/wallet'>
                  <button className='bg-purple-500 text-lg border-[1px] border-purple-500 p-2 rounded-lg text-stone-50 font-Poppins w-[10rem] hover:bg-purple-400 hover:border-purple-400 hover:text-purple-100 transition-all'>
                    Carteira
                  </button>
                </Link>

                <Link to='/coins'>
                  <button className='border-purple-500 border-[1px] text-lg  p-2 rounded-lg text-purple-500 font-poppins w-[10rem] hover:border-purple-300 hover:text-purple-300 transition-all'>
                    Moedas
                  </button>
                </Link>
              </div>
            </div>

            <DevelopersList />
          </section>
        </Col>
      </Row>
    </Container>
  )
}

export default Home