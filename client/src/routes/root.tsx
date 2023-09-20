import '../styles/main.scss'
import { Outlet } from "react-router-dom";
import { Header } from "../components/subComps/header"
import { Footer } from "../components/subComps/footer"

export const Root = () => {
  return <div>
    <Header />
    <Outlet />
    <Footer />
  </div>
};
