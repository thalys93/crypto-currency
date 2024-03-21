import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { coinsData } from "../utils/api/CoinGecko";
import { cryptoCoinsData } from "../utils/api/DummyData";
import { Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import { PieChart } from "@mui/x-charts";
import { WindowSizeContext } from "../utils/context/Responsive_Context";


function Coin() {
  const { id } = useParams();
  const [coin, setCoin] = useState<coinsData>();
  const [isLoading, setIsLoading] = useState(false);
  const windowSize = useContext(WindowSizeContext);

  useEffect(() => {
    const fetchCoin = async () => {
      setIsLoading(true);
      setTimeout(() => {
        cryptoCoinsData.find((item) => item.id === id && setCoin(item as coinsData))
      }, 1500)
      setTimeout(() => {
        setIsLoading(false);
      }, 2500)
    }

    fetchCoin();
  }, [coin, id])

  // className={windowSize < 768 ? 'shadow-xl p-4  ml-3 mt-3 shadow-purple-800 rounded-xl bg-slate-900 bg-opacity-45 border-b-purple-500 border-[1px] border-t-purple-500 border-l-purple-500 border-r-purple-500' : 'shadow-2xl p-4 shadow-purple-800 rounded-xl bg-slate-900 bg-opacity-45 border-b-purple-500 border-[1px] border-t-purple-500 border-l-purple-500 border-r-purple-500'}


  return (
    <Container>
      <Row className="flex flex-row justify-around">
        <Col sm={3}>
          <div className="m-3 text-center animate__animated animate__fadeInDown">            
              <h1 className={isLoading ? "text-stone-300 animate-pulse text-2xl font-K2D select-none" : "text-purple-300 text-2xl font-K2D select-none animate__animated animate__fadeIn"}>
                Detalhes da Moeda
              </h1 >        
          </div>
          {isLoading ? (
            <section className={windowSize < 768 ? "flex justify-center items-center flex-col" : "mt-5 flex justify-center items-center flex-col"}>
              <div className="w-[190px] h-[190px] bg-stone-500 rounded-full animate-pulse m-3"></div>
              <section className="text-stone-50 flex flex-col gap-2 items-start ml-5 select-none">
                <div className="w-[12rem] h-[10px] bg-stone-400 rounded animate-pulse"></div>
                <div className="w-[15rem] h-[10px] bg-stone-400 rounded animate-pulse"></div>
                <div className="w-[5rem] h-[10px] bg-stone-400 rounded animate-pulse"></div>
                <div className="w-[9rem] h-[10px] bg-stone-400 rounded animate-pulse"></div>
                <div className="w-[10rem] h-[10px] bg-stone-400 rounded animate-pulse"></div>
              </section>
            </section>
          ) : (
            <>
              <div className="flex justify-center animate__animated animate__fadeInDown">
                <Image src={coin?.image} alt={coin?.name} width={190} height={190} roundedCircle className={windowSize < 768 ? "mt-3 mb-3" : "mb-3 "} />
              </div>
              <div className="flex justify-center animate__animated animate__fadeInUp">
                <section className={windowSize < 768 ? "text-stone-50 flex flex-col gap-2 select-none" : "text-stone-50 flex flex-col gap-2 items-start select-none"}>
                  <ListGroup className="shadow-purple-800 rounded-xl shadow-xl border-[1px] border-purple-800">
                    <ListGroup.Item className="bg-slate-900 bg-opacity-45 border-b-purple-500 border-[1px] border-t-purple-500 border-l-purple-500 border-r-purple-500 text-slate-400 hover:bg-slate-700 transition-all hover:text-slate-200">
                      <span className="font-Poppins text-sm"> Nome : <span className="text-purple-400 font-Jost text-lg">{coin?.name}</span> </span>
                    </ListGroup.Item>

                    <ListGroup.Item className="bg-slate-900 bg-opacity-45 border-b-purple-500 border-[1px] border-t-purple-500 border-l-purple-500 border-r-purple-500 text-slate-400 hover:bg-slate-700 transition-all hover:text-slate-200">
                      <span className="font-Poppins text-sm"> Simbolo : <span className="text-purple-400 font-Jost text-lg capitalize">{coin?.symbol}</span> </span>
                    </ListGroup.Item>

                    <ListGroup.Item className="bg-slate-900 bg-opacity-45 border-b-purple-500 border-[1px] border-t-purple-500 border-l-purple-500 border-r-purple-500 text-slate-400 hover:bg-slate-700 transition-all hover:text-slate-200">
                      <span className="font-Poppins text-sm"> Preço Atual : <span className="text-purple-400 font-Jost text-lg">  ${coin?.current_price.toFixed(2)} </span> </span>
                    </ListGroup.Item>

                    <ListGroup.Item className="bg-slate-900 bg-opacity-45 border-b-purple-500 border-[1px] border-t-purple-500 border-l-purple-500 border-r-purple-500 text-slate-400 hover:bg-slate-700 transition-all hover:text-slate-200">
                      <span className="font-Poppins text-sm"> ATH (All Time High) : <span className="text-purple-400 font-Jost text-lg">  ${coin?.ath.toFixed(2)} </span> </span>
                    </ListGroup.Item>

                    <ListGroup.Item className="bg-slate-900 bg-opacity-45 border-b-purple-500 border-[1px] border-t-purple-500 border-l-purple-500 border-r-purple-500 text-slate-400 hover:bg-slate-700 transition-all hover:text-slate-200">
                      <span className="font-Poppins text-sm"> Alta (24h) : <span className="text-purple-400 font-Jost text-lg">  ${coin?.high_24h.toFixed(2)} </span> </span>
                    </ListGroup.Item>

                    <ListGroup.Item className="bg-slate-900 bg-opacity-45 border-b-purple-500 border-[1px] border-t-purple-500 border-l-purple-500 border-r-purple-500 text-slate-400 hover:bg-slate-700 transition-all hover:text-slate-200">
                      <span className="font-Poppins text-sm"> Baixa (24h) : <span className="text-purple-400 font-Jost text-lg">  ${coin?.low_24h.toFixed(2)} </span> </span>
                    </ListGroup.Item>
                  </ListGroup>
                </section>
              </div>
            </>
          )}
        </Col >

        <Col sm={5}>
          <section className={windowSize < 768 ? "mt-5" : ""}>
            <div className="animate__animated animate__fadeInDown">
              <h2 className={isLoading ? "text-stone-300 animate-pulse text-2xl font-K2D m-3 text-center select-none " : "text-purple-300 text-2xl font-K2D m-3 text-center select-none animate__animated animate__fadeIn"}>
                Gráfico
              </h2>
            </div>
            <div className="flex justify-center items-center h-[24rem] shadow-purple-800 rounded-xl shadow-xl border-[1px] border-purple-800 bg-slate-900 bg-opacity-45 mb-[10rem]">
              {isLoading ? (
                <section className="flex flex-col items-center gap-3">
                  <div className="w-[230px] h-[230px] bg-stone-500 rounded-full animate-pulse m-3 mt-0">
                  </div>
                  <span className="text-stone-50 font-Poppins ml-4"> Aguarde Carregando ... </span>
                </section>
              ) : (
                windowSize < 768 ? (
                  <Container fluid>
                    <PieChart
                      series={
                        [
                          {
                            data: [
                              { id: 0, value: (coin?.high_24h) as never, label: "Alta (24h)" },
                              { id: 1, value: (coin?.low_24h) as never, label: "Baixa (24h)" },
                              { id: 2, value: (coin?.current_price) as never, label: "Preço Atual $" },
                              { id: 3, value: (coin?.ath) as never, label: "ATH (All Time High)" }
                            ],
                            highlightScope: { faded: 'global', highlighted: 'item' },
                            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                          }
                        ]
                      }
                      width={450}
                      height={250}
                    />
                  </Container>
                ) : (
                  <PieChart
                    series={
                      [
                        {
                          data: [
                            { id: 0, value: (coin?.high_24h) as never, label: "Alta (24h)" },
                            { id: 1, value: (coin?.low_24h) as never, label: "Baixa (24h)" },
                            { id: 2, value: (coin?.current_price) as never, label: "Preço Atual $" },
                            { id: 3, value: (coin?.ath) as never, label: "ATH (All Time High)" }
                          ],
                          highlightScope: { faded: 'global', highlighted: 'item' },
                          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                        }
                      ]
                    }
                    width={700}
                    height={300}
                  />
                )
              )}
            </div>
          </section>
        </Col>
      </Row >
    </Container >
  )
}

export default Coin