import { useContext } from "react";
import { WindowSizeContext } from "../utils/context/Responsive_Context";

function Footer_component() {
    const date = new Date();
    const year = date.getFullYear();
    const windowSize = useContext(WindowSizeContext);

    return (
        <div className='flex flex-row justify-center items-center select-none'>
            {windowSize < 768 ? (
                <h1 className='text-slate-500 font-Jost text-lg pt-3 pb-5 animate__animated animate__fadeIn'> Crypto Currency &copy; {year} </h1>
            ) : (
                <h1 className='text-slate-500 font-Jost text-lg animate__animated animate__fadeIn'> Crypto Currency Todos os Direitos Reservados &copy; {year} </h1>
            )}
        </div>
    )
}

export default Footer_component