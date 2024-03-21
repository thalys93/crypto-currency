/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container, Row, Col, Image, Spinner } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import { WindowSizeContext } from '../utils/context/Responsive_Context';
import { desktopSection, mobileSection } from '../utils/helpers/tailwindConstants';
import { Cardholder, Check, Plugs, PlugsConnected, Plus, User, X } from '@phosphor-icons/react';
import { ethers } from 'ethers';
import { useCookies } from 'react-cookie';

function Wallet() {
  const windowSize = useContext(WindowSizeContext);

  const [balance, setBalance] = useState('');
  const [connected, setConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [cookies, setCookie] = useCookies(['walletData']);

  const pressedConnectWallet = async () => {
    if (connected) return console.log('Wallet já conectada!');
    const walletResponse = await connectWallet();
    if (walletResponse.err) {
      alert(`Meta Mask não está conectado! : ${walletResponse.err}` );
      return;
    }
    if (walletResponse.status === '🦊 Meta Mask não está instalado no navegador!') {
      alert('Meta Mask não está instalado no navegador!');
      return;
    } else {
      setConnected(walletResponse.connectedStatus);
      setWalletAddress(walletResponse.address);
      if (walletResponse.connectedStatus) {
        getUserBalance(walletResponse.address);

        const walletData = {
          connected: walletResponse.connectedStatus,
          address: walletResponse.address,
        }

        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 1);

        setCookie('walletData', walletData, { path: '/', expires: expirationDate });
      }
    }
  }

  const connectWallet = async () => {
    if ((window as any).ethereum) {
      try {
        const address = await (window as any).ethereum.request({
          method: 'eth_requestAccounts',
        });

        return {
          connectedStatus: true,
          status: '🦊 Meta Mask está conectado!',
          address
        }
      } catch (r) {
        return {
          connectedStatus: false,
          status: '🦊 Meta Mask não está conectado!',
          err: r,
        }
      }

    } else {
      return {
        connectedStatus: false,
        status: '🦊 Meta Mask não está instalado no navegador!',
      }
    }
  }

  const getUserBalance = async (userWallet: string) => {
    (window as any).ethereum.request({ method: 'eth_getBalance', params: userWallet })
      .then((balance: ethers.BigNumberish): any => {
        console.log(balance);
        setBalance(ethers.formatEther(balance));
      }).catch((e: any) => {
        console.log(e);
      })
  }

  const disconnectWallet = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setConnected(false);
      setWalletAddress('');
      setBalance('');
      setIsLoading(false);
      setCookie('walletData', { connected: false, address: '', balance: '' }, { path: '/', expires: new Date(0) });
    }, 2500)
  }


  useEffect(() => {
    const checkCookies = () => {
      if (cookies.walletData) {
        setConnected(cookies.walletData.connected);
        setWalletAddress(cookies.walletData.address);
        getUserBalance(cookies.walletData.address);
      }
    }
    checkCookies();
  }, [cookies.walletData])

  return (
    <Container>
      <Row>
        <Col sm className='mt-5'>
          <section className={windowSize < 768 ? mobileSection : desktopSection}>
            <h1 className='text-center text-slate-50 text-xl font-K2D select-none'> Minha Carteira </h1>
            <p className='text-center text-slate-400 font-Poppins text-md select-none'> Veja seu saldo restante </p>
            <div className='bg-slate-700 bg-opacity-35 rounded p-3 mt-3 flex flex-row gap-3 select-none transition-all text-slate-50 hover:text-yellow-500'>
              <Cardholder size={30} />
              <span className='font-Poppins text-2xl'>
                {balance ? (
                  <span> Saldo: {balance} USD </span>
                ) : (
                  <span> Saldo: Indisponivel </span>
                )}
              </span>
            </div>
            {connected ? (
              <div className='bg-emerald-700 bg-opacity-35 rounded p-3 mt-3 flex flex-row gap-3 select-none text-slate-50 hover:text-emerald-400 transition-all'>
                <PlugsConnected size={30} />
                <span className='font-Poppins text-2xl'> Conectado </span>
              </div>
            ) : (
              <div className='bg-rose-700 bg-opacity-35 rounded p-3 mt-3 flex flex-row gap-3 select-none text-slate-50 hover:text-rose-400 transition-all'>
                <Plugs size={30} />
                <span className='font-Poppins text-2xl'> Desconectado </span>
              </div>
            )}

            <div className='bg-slate-700 bg-opacity-35 rounded p-3 mt-3 flex flex-row gap-3 items-center select-none break-all transition-all text-slate-50 hover:text-blue-400'>
              <User size={30} className={windowSize < 768 ? 'mb-[1.9rem]' : ''} />
              <span className='font-Poppins text-2xl'> Conta:
                {connected ? (
                  <span className={windowSize < 768 ? 'text-sm text-slate-500 ml-2' : 'text-sm text-slate-500 ml-2'}>{walletAddress}</span>
                ) : (
                  <span className='text-rose-500 ml-2'>Desconectado</span>
                )}
              </span>
            </div>

            <div className='flex flex-row items-center justify-center mt-4 gap-4'>
              {connected ? (
                <div>
                  <button className='flex flex-row gap-2 items-center bg-emerald-600 text-slate-50 p-2 rounded hover:bg-emerald-400 transition-all'> <Check size={25} /> Carteira Conectada </button>
                </div>
              ) : (
                <div>
                  <button onClick={() => pressedConnectWallet()} className='flex flex-row gap-2 items-center bg-purple-600 text-slate-50 p-2 rounded hover:bg-purple-400 transition-all'> <Plus size={25} /> Conectar Carteira </button>
                </div>
              )}
              {!connected ? (
                <div>
                  <button disabled className='flex flex-row gap-2 items-center bg-rose-800 text-rose-300 p-2 rounded hover:bg-rose-800 transition-all'> <X size={25} /> Desconectar Carteira </button>
                </div>
              ) : (
                <div>
                  {isLoading ? (
                    <button disabled className='flex flex-row gap-2 w-[10rem] justify-center items-center bg-rose-600 text-slate-50 p-2 rounded hover:bg-rose-400 transition-all'> <Spinner /> </button>
                  ) : (
                    <button onClick={() => disconnectWallet()} className='flex flex-row gap-2 items-center bg-rose-600 text-slate-50 p-2 rounded hover:bg-rose-400 transition-all'> <X size={25} /> Desconectar Carteira </button>
                  )}
                </div>
              )}
            </div>



          </section>
        </Col>

        <Col sm className='mt-5 mb-[15rem]'>
          <section className={windowSize < 768 ? mobileSection : desktopSection}>
            <div className='flex flex-col justify-center items-center'>
              <Image src='./svg/MetaMask_Fox.svg' className='w-[15rem] h-[15rem]' />
              <span className='select-none text-slate-500 font-Poppins'> Powered by <a href="https://metamask.io/" target="_blank" className='text-underline text-slate-400 transition-all hover:text-slate-200'> Meta Mask </a></span>
            </div>
          </section>
        </Col>
      </Row>
    </Container >
  )
}

export default Wallet