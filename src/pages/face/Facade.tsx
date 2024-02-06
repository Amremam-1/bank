import { Link } from "react-router-dom"
import logo from "../../public/images/Bank Building.png"
import styles from "./style.module.css"

const Facade = () => {
  return (
    <div className={styles.main_face}>
      <div className={styles.centerContent}>
        <div className={styles.title}>
          <div className={styles.img}>
            <img src={logo} alt="" className={styles.logo} />
          </div>

          <Link to="/start">
            <h3 className={styles.heading}>StarlingBank</h3>
          </Link>
        </div>
      </div>

      <div className={styles.shapes}>
        <span className={styles.shap1}></span>
        <span className={styles.shap2}></span>
        <span className={styles.shap3}></span>
        <span className={styles.shap4}></span>
      </div>
    </div>
  )
}

export default Facade
