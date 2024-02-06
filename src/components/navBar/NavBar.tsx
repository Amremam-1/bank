import styles from "./styles.module.css"
import logo from "../../public/images/Bank Building.png"
import { RiArrowGoBackFill } from "react-icons/ri"
import { IoSettingsSharp } from "react-icons/io5"
import { IoMenu } from "react-icons/io5"

import { Link } from "react-router-dom"
import { useState } from "react"
import SideBar from "../sideBar/SideBar"


const pages = [
  { path: "home", display: "Home" },
  { path: "client", display: "Client" },
  { path: "user", display: "User Managment" },
  { path: "transaction", display: "Transaction" },
  { path: "currency", display: "Currency exchange" },
  { path: "register", display: "Access Register" },
]

const NavBar = () => {
  const [activeMenu, setActiveMenu] = useState(false)

  const [selectItem, setSelectItem] = useState(-1)

  const handleSelectItem = (index: number) => {
    setSelectItem(index)
  }

  const toggle = () => {
    setActiveMenu(!activeMenu)
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <div className={styles.img}>
          <img src={logo} alt="" className={styles.logoImg} />
        </div>
        <Link to="/start">
          <h3 className={styles.heading} onClick={() => handleSelectItem(-1)}>
            StarlingBank
          </h3>
        </Link>
      </div>

      <nav>
        <ul className={styles.navList}>
          {pages.map((link, index) => (
            <li
              key={index}
              className={selectItem === index ? styles.active : ""}
              onClick={() => handleSelectItem(index)}
            >
              <Link to={link.path}>{link.display}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.right}>
        <button className={styles.goBack}>
          <Link to="/">
            <RiArrowGoBackFill className={styles.icon} />
          </Link>
        </button>
        <button className={styles.settings}>
          <Link to="setting">
            <IoSettingsSharp className={styles.icon} />
          </Link>
        </button>

        <button
          className={`${styles.btn_menu} ${activeMenu && styles.active}`}
          onClick={toggle}
        >
          <IoMenu className={styles.menu} />
        </button>
      </div>
      {activeMenu && <SideBar isOpen={activeMenu} />}
    </header>
  )
}

export default NavBar
