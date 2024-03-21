import { useContext } from 'react'
import { WindowSizeContext } from '../utils/context/Responsive_Context'

import { Container, Row, Col } from 'react-bootstrap';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { CaretDown, DiscordLogo, GithubLogo, InstagramLogo, LinkedinLogo, TwitchLogo } from '@phosphor-icons/react';

function About_Us() {
  const windowSize = useContext(WindowSizeContext);
  const socialLinks = [
    { name: 'Linkedin', link: 'https://www.linkedin.com/in/thalys-dev202/', icon: <LinkedinLogo size={30} /> },
    { name: 'Github', link: 'https://github.com/thalys93', icon: <GithubLogo size={30} /> },
    { name: 'Instagram', link: 'https://www.instagram.com/luiss_xavierr/', icon: <InstagramLogo size={30} /> },
    { name: 'Discord', link: 'https://discord.com/channels/Thalys93#2555', icon: <DiscordLogo size={30} /> },
    { name: 'Twitch', link: 'https://www.twitch.tv/o_thalys', icon: <TwitchLogo size={30} /> },
  ]

  return (
    <Container>
      <Row className='flex-1 items-center mt-[3rem] lg:mt-[5rem] mb-[3rem] lg:mb-[10rem] animate__animated animate__fadeIn gap-5'>
        <Col sm className='pt-[1rem]'>
          <section className={windowSize < 768 ? 'shadow-xl p-4 w-[23rem] mt-3 shadow-purple-800 rounded-xl bg-slate-900 bg-opacity-45 border-b-purple-500 border-[1px] border-t-purple-500 border-l-purple-500 border-r-purple-500' : 'shadow-2xl p-4 shadow-purple-800 rounded-xl bg-slate-900 bg-opacity-45 border-b-purple-500 border-[1px] border-t-purple-500 border-l-purple-500 border-r-purple-500'}>
            <h1 className="prose:headings text-tertiaryV font-K2D text-xl text-center"> Sobre a Crypto Currency </h1>
            <Accordion sx={{ backgroundColor: "#1e293b" }} className='border-purple-500 bg-opacity-40 p-2 rounded-l rounded-r hover:border-purple-200 transition-all mt-2'>
              <AccordionSummary expandIcon={<CaretDown color='white' size={25} />}>
                <h1 className='text-lg text-slate-50 font-K2D mb-1'> O Que é a Crypto Currency? </h1>
              </AccordionSummary>
              <AccordionDetails>
                <span className='text-md text-slate-400 font-Poppins ml-5 list-item hover:text-slate-200 transition-all select-none animate__animated animate__fadeInUp'>
                  A Crypto Currency é uma empresa que atua no mercado de criptomoedas e ativos digitais.
                  A empresa foi fundada em 2018 e desde então vem crescendo exponencialmente,
                  com um crescimento de 300% ao ano.
                </span>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ backgroundColor: "#1e293b" }} className='border-purple-500 bg-opacity-40 p-2 flex flex-col rounded-l rounded-r hover:border-purple-200  transition-all'>
              <AccordionSummary expandIcon={<CaretDown color='white' size={25} />}>
                <h1 className='text-lg text-slate-50 font-K2D mb-1'> Quais os Nossos Valores </h1>
              </AccordionSummary>
              <AccordionDetails>
                <section className='animate__animated animate__fadeInUp'>
                  <span className='text-md text-slate-400 font-Poppins ml-5 list-item hover:text-slate-200 transition-all select-none'>
                    Inovação: A Crypto Currency valoriza a inovação constante, buscando sempre estar na vanguarda das tecnologias emergentes no mercado de criptomoedas.
                  </span>
                  <span className='text-md text-slate-400 font-Poppins ml-5 list-item hover:text-slate-200 transition-all select-none'>
                    Transparência: A empresa se compromete com altos padrões de transparência em todas as suas operações e comunicações com os clientes e investidores.
                  </span>
                  <span className='text-md text-slate-400 font-Poppins ml-5 list-item hover:text-slate-200 transition-all select-none'>
                    Segurança: A segurança dos ativos digitais dos clientes é uma prioridade absoluta para a Crypto Currency. A empresa implementa medidas robustas de segurança cibernética para proteger os fundos dos clientes contra qualquer ameaça potencial.
                  </span>
                </section>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ backgroundColor: "#1e293b" }} className='border-purple-500 bg-opacity-40 p-2 flex flex-col rounded-l rounded-r hover:border-purple-200 transition-all'>
              <AccordionSummary expandIcon={<CaretDown color='white' size={25} />}>
                <h1 className='text-lg text-slate-50 font-K2D mb-1'> A Nossa Missão </h1>
              </AccordionSummary>
              <AccordionDetails>
                <span className='text-md text-slate-400 font-Poppins ml-5 list-item hover:text-slate-200 transition-all select-none animate__animated animate__fadeInUp'>
                  Na Crypto Currency, nossa missão é democratizar o acesso e promover a adoção massiva de criptomoedas e ativos digitais, <br />
                  proporcionando soluções inovadoras, seguras e transparentes para nossos clientes. <br />
                  Acreditamos que todos devem ter a oportunidade de participar e se beneficiar do ecossistema das criptomoedas, <br />
                  independentemente de sua localização geográfica ou nível de experiência.
                </span>
              </AccordionDetails>
            </Accordion>
          </section>
          {windowSize > 768 && (
            <div className='flex flex-col justify-center items-center pt-[2rem]'>
            <h3 className='text-slate-200 font-K2D font-normal text-lg mb-2 select-none'> Redes Sociais </h3>
            <div className='flex flex-row gap-3'>
              {socialLinks.map((social, index) => (
                <a href={social.link} key={index} target='_blank' rel='noreferrer' className='text-slate-300 transition-all hover:text-purple-500 hover:scale-95'>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>            
          )}          
        </Col>

        <Col sm>
          <section className={windowSize < 768 ? 'shadow-xl p-4 w-[23rem] mt-3 shadow-purple-800 rounded-xl bg-slate-900 bg-opacity-45 border-b-purple-500 border-[1px] border-t-purple-500 border-l-purple-500 border-r-purple-500' : 'shadow-2xl p-4 shadow-purple-800 rounded-xl bg-slate-900 bg-opacity-45 border-b-purple-500 border-[1px] border-t-purple-500 border-l-purple-500 border-r-purple-500'}>
            <h1 className="prose:headings text-tertiaryV font-K2D text-xl text-center"> Especificações Técnicas </h1>
            <Accordion sx={{ backgroundColor: "#1e293b" }} className='border-purple-500 bg-opacity-40 p-2 rounded-l rounded-r hover:border-purple-200 transition-all mt-2'>
              <AccordionSummary expandIcon={<CaretDown color='white' size={25} />}>
                <h1 className='text-lg text-slate-50 font-K2D mb-1'> Tecnologia Blockchain </h1>
              </AccordionSummary>
              <AccordionDetails>
                <span className='text-md text-slate-400 font-Poppins ml-5 list-item hover:text-slate-200 transition-all select-none animate__animated animate__fadeInUp'>
                  A Crypto Currency utiliza a tecnologia blockchain para garantir a segurança e a transparência de todas as transações realizadas em sua plataforma.
                  A blockchain é uma estrutura de dados distribuída que armazena um registro de transações em vários blocos interligados.
                  Cada bloco contém um hash criptográfico do bloco anterior, formando uma cadeia de blocos que é imutável e à prova de adulteração.
                </span>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ backgroundColor: "#1e293b" }} className='border-purple-500 bg-opacity-40 p-2 rounded-l rounded-r hover:border-purple-200 transition-all mt-2'>
              <AccordionSummary expandIcon={<CaretDown color='white' size={25} />}>
                <h1 className='text-lg text-slate-50 font-K2D mb-1'> Contratos Inteligentes </h1>
              </AccordionSummary>
              <AccordionDetails>
                <span className='text-md text-slate-400 font-Poppins ml-5 list-item hover:text-slate-200 transition-all select-none animate__animated animate__fadeInUp'>
                  A Crypto Currency utiliza contratos inteligentes para automatizar e garantir a execução de acordos e transações na plataforma.
                  Os contratos inteligentes são programas de computador que executam automaticamente as condições de um contrato quando as condições pré-definidas são atendidas.
                  Eles são executados na blockchain, o que garante que todas as transações sejam transparentes, seguras e à prova de adulteração.
                </span>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ backgroundColor: "#1e293b" }} className='border-purple-500 bg-opacity-40 p-2 rounded-l rounded-r hover:border-purple-200 transition-all mt-2'>
              <AccordionSummary expandIcon={<CaretDown color='white' size={25} />}>
                <h1 className='text-lg text-slate-50 font-K2D mb-1'> Segurança Cibernética </h1>
              </AccordionSummary>
              <AccordionDetails>
                <span className='text-md text-slate-400 font-Poppins ml-5 list-item hover:text-slate-200 transition-all select-none animate__animated animate__fadeInUp'>
                  A segurança cibernética é uma prioridade absoluta para a Crypto Currency. A empresa implementa medidas robustas de segurança cibernética para proteger os ativos digitais dos clientes contra qualquer ameaça potencial.
                  A plataforma é protegida por criptografia de última geração, autenticação de dois fatores e monitoramento constante de ameaças cibernéticas.
                </span>
              </AccordionDetails>
            </Accordion>
          </section>
          {windowSize < 768 && (
            <div className='flex flex-col justify-center items-center pt-[2rem]'>
            <h3 className='text-slate-200 font-K2D font-normal text-lg mb-2 select-none'> Redes Sociais </h3>
            <div className='flex flex-row gap-3'>
              {socialLinks.map((social, index) => (
                <a href={social.link} key={index} target='_blank' rel='noreferrer' className='text-slate-300 transition-all hover:text-purple-500 hover:scale-95'>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default About_Us