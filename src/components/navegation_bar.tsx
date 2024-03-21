/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useState } from 'react'
import { WindowSizeContext } from '../utils/context/Responsive_Context'
import { Col, Container, ListGroup, Nav, Navbar, Offcanvas, Row } from 'react-bootstrap';
import { HouseSimple, ListDashes, Wallet, CoinVertical, Info, X, Coins } from '@phosphor-icons/react';
import Footer_component from './footer_component';
import { Link, useLocation } from 'react-router-dom';
import { useCookies } from 'react-cookie';




function Navegation_bar() {
  const windowSize = useContext(WindowSizeContext);
  const [showMenu, setShowMenu] = useState(false);
  const [cookies] = useCookies(['walletData']);

  const menuOptions = [
    { name: 'Home', link: 'home', icon: <HouseSimple size={25} /> },
    { name: 'Moedas', link: 'coins', icon: <CoinVertical size={25} /> },
    { name: 'Carteira', link: 'wallet', icon: <Wallet size={25} /> },
    { name: 'Sobre Nos', link: 'about-us', icon: <Info size={25} /> }
  ]

  const menuOptionsDesktop = [
    { name: 'Moedas', link: 'coins', icon: <CoinVertical size={25} /> },
    { name: 'Carteira', link: 'wallet', icon: <Wallet size={25} /> },
    { name: 'Sobre Nos', link: 'about-us', icon: <Info size={25} /> }
  ]

  const location = useLocation()

  const activeRoute = (path: string) => {
    const currentPathSegments = location.pathname.split('/');
    const currentRoute = currentPathSegments[currentPathSegments.length - 1];

    return currentRoute === path ? true : false;
  }

  const handleOpenMenu = () => {
    setShowMenu(true);
  }

  const handleCloseMenu = () => {
    setShowMenu(false);
  }


  return (
    windowSize < 768 ? (
      <Container fluid>
        <Row className='m-3 mt-4 items-center'>
          <Col xs={9}>
            <Link to='/home'>
              <Coins size={32} className='text-stone-50 hover:text-purple-400 transition-all' />
            </Link>
          </Col>

          <Col className='ml-5 mt-[0.3rem]'>
            <button className='text-stone-50 hover:text-purple-400 transition-all' onClick={handleOpenMenu}>
              <ListDashes size={32} />
            </button>

            <Offcanvas show={showMenu} onHide={handleCloseMenu} className="bg-slate-900 bg-opacity-40">
              <Offcanvas.Header>
                <Offcanvas.Title className='text-stone-50'>Menu de Ações</Offcanvas.Title>
                <X size={32} className='text-stone-50 hover:text-purple-400 transition-all cursor-pointer' onClick={handleCloseMenu} />
              </Offcanvas.Header>
              <Offcanvas.Body>
                <ListGroup variant='flush' className='gap-2 rounded-b-lg'>
                  {menuOptions.map((opt, index) => (
                    <ListGroup.Item key={index} action className={activeRoute(opt.link) ? 'bg-slate-700 bg-opacity-40 text-purple-400 hover:text-purple-400 transition-all' : 'bg-slate-700 bg-opacity-40 text-stone-50 hover:text-purple-400 transition-all'}>
                      <Link to={opt.link} onClick={handleCloseMenu} className='w-full h-full  flex flex-row gap-1 items-center'>
                        {opt.icon}
                        <span className='ml-3'>{opt.name}</span>
                      </Link>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
                <footer>
                  <Footer_component />
                </footer>
              </Offcanvas.Body>
            </Offcanvas>
          </Col>
        </Row>
      </Container>
    ) : (
      <Navbar className='flex flex-row justify-center items-center ml-[5rem] pt-4 lg:pt-5'>
        <Container>
          <Link to='/home'>
            <div className='flex flex-row items-center gap-3'>
              <Coins size={32} className='text-stone-50 hover:text-purple-400 transition-all' />
            </div>
          </Link>

          <Nav className='ml-[4rem]'>
            {menuOptionsDesktop.map((opt, index) => (
              <Nav.Link key={index} className={!activeRoute(opt.link) ? 'text-stone-50 hover:text-purple-400 transition-all' : 'text-purple-400 hover:text-purple-400 transition-all'}>
                <Link to={opt.link} className='flex flex-row gap-1 items-center'>
                  {opt.icon}
                  <span>{opt.name}</span>
                </Link>
              </Nav.Link>
            ))}


          </Nav>
          {cookies.walletData?.connected ? (
            <Link to='/wallet'>
              <button className='bg-emerald-500 border-[1px] border-emerald-500 p-2 rounded text-stone-50 font-Poppins w-[12rem] hover:bg-emerald-400 hover:border-emerald-400 hover:text-purple-100 transition-all'>
                Carteira Conectada
              </button>
            </Link>
          ) : (
            <Link to="/wallet">
              <button className='bg-purple-500 border-[1px] border-purple-500 p-2 rounded text-stone-50 font-Poppins w-[12rem] hover:bg-purple-400 hover:border-purple-400 hover:text-purple-100 transition-all'>
                Conectar Carteira
              </button>
            </Link>
          )}
        </Container>
      </Navbar>
    )
  )
}

export default Navegation_bar