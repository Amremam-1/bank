import "../App.css"
import { createBrowserRouter } from "react-router-dom"
import Facade from "../pages/face/Facade"
import Layout from "../components/layout/Layout"
import Start from "../pages/start/Start"
import Home from "../pages/home/Home"
import Client from "../pages/client/Client"
import Transaction from "../pages/transaction/Transaction"
import CurrencyExchange from "../pages/currencyExchange/CurrencyExchange"
import Register from "../pages/register/Register"
import UserMangment from "../pages/userMangment/UserMangment"
import Setting from "../pages/setting/Setting"

const router = createBrowserRouter([
  { path: "/", element: <Facade /> },

  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/start", element: <Start /> },
      { path: "/home", element: <Home /> },
      { path: "/client", element: <Client /> },
      { path: "/user", element: <UserMangment /> },
      { path: "/transaction", element: <Transaction /> },
      { path: "/currency", element: <CurrencyExchange /> },
      { path: "/register", element: <Register /> },
      { path: "/setting", element: <Setting /> },
    ],
  },
])

export default router
