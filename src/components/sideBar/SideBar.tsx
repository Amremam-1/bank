import { IoClose } from "react-icons/io5"
import { FaFacebookF } from "react-icons/fa"
import { IoLogoTwitter } from "react-icons/io"
import { FaYoutube } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styles from "./styles.module.css"

const Links = [
  { path: "home", display: "Home" },
  { path: "client", display: "Client" },
  { path: "user", display: "User Managment" },
  { path: "transaction", display: "Transaction" },
  { path: "currency", display: "Currency exchange" },
  { path: "register", display: "Access Register" },
]

const SideBar = ({ isOpen }: { isOpen: boolean }) => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    setMenuOpen(isOpen)
  }, [isOpen])

  return (
    <div className={`${styles.side_bar} ${isMenuOpen ? styles.open : ""}`}>
      <button className={styles.close} onClick={toggleMenu}>
        <IoClose className={styles.close_Icon} />
      </button>

      <div className={styles.mobile_menu}>
        <nav>
          <ul className={styles.nav}>
            {Links.map((link, index) => (
              <li key={index} className={`${styles.link} animated bounce`}>
                <Link to={link.path}>{link.display}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.social_wrapper_one}>
          <ul>
            <li>
              <a href="#" className={styles.facebook}>
                <FaFacebookF className={styles.social_icon} />
              </a>
            </li>
            <li>
              <a href="#" className={styles.twitter}>
                <IoLogoTwitter className={styles.social_icon} />
              </a>
            </li>
            <li>
              <a href="#" className={styles.youtube}>
                <FaYoutube className={styles.social_icon} />
              </a>
            </li>
            <li>
              <a href="#" className={styles.linked}>
                <FaLinkedinIn className={styles.social_icon} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideBar
