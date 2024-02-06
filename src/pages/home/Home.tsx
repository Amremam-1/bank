import { Col, Container, Row } from "react-bootstrap"
import styles from "./styles.module.css"
import { FaUser } from "react-icons/fa"
import { ImUsers } from "react-icons/im"
import { AiOutlineUsergroupAdd } from "react-icons/ai"
import { FcCurrencyExchange } from "react-icons/fc"
import { MdOutlineCurrencyExchange } from "react-icons/md"
import { IoMdLogIn } from "react-icons/io"
import image from "../../public/images/home.png"

const boxs = [
  { title: "Users Number", amount: 46, icon: <FaUser /> },
  { title: "Total balances", amount: 40, icon: <ImUsers /> },
  { title: "Clients Number", amount: 36, icon: <AiOutlineUsergroupAdd /> },
  {
    title: "Currencies Number",
    amount: 80,
    icon: <MdOutlineCurrencyExchange />,
  },
  { title: "Transfer Number", amount: 50, icon: <FcCurrencyExchange /> },
  { title: "login Number", amount: 23, icon: <IoMdLogIn /> },
]

const Home = () => {
  return (
    <div className={styles.main_wrapper}>
      <Container>
        <Row>
          <Col className={styles.right}>
            <div className={styles.boxs}>
              {boxs.map((box, index) => (
                <div key={index} className={styles.box_content}>
                  <div className={styles.content_top}>
                    <span className={styles.icon}>{box.icon}</span>
                    <h3>{box.title}</h3>
                  </div>
                  <span>{box.amount}</span>
                </div>
              ))}
            </div>
          </Col>
          <Col className={styles.left}>
            <div className={styles.image}>
              <img src={image} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home
