import { Outlet } from "react-router-dom"
import Navegation_bar from './components/navegation_bar';
import Footer_component from "./components/footer_component";
import { ToastContainer } from "react-toastify";

function Index() {
  return (
    <>
      <header>
        <Navegation_bar />
      </header>

      <main>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          theme="dark"
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Outlet />
      </main>

      <footer>
        <Footer_component />
      </footer>
    </>
  )
}

export default Index
