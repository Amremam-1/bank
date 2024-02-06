import { Col, Container, Row } from "react-bootstrap"
import styles from "./styles.module.css"
import setting from "../../public/images/setting.png"

const settings = [
  { id: 1, set: "Add Statments" },
  { id: 2, set: "View clients List" },
  { id: 3, set: "Add New Client" },
  { id: 4, set: "Delete Client" },
  { id: 5, set: "Modify Client" },
  { id: 6, set: "Find a Client" },
  { id: 7, set: "Transaction" },
  { id: 8, set: "Transfer Transaction" },
  { id: 9, set: "Access Register" },
  { id: 10, set: "User Management" },
]

const Setting = () => {
  return (
    <div className={styles.main_wrapper}>
      <form>
        <Container>
          <Row>
            <Col className={styles.top} lg="12">
              <div className={styles.forms}>
                <div className={styles.form_right}>
                  <form>
                    <div className="mb-5">
                      <label htmlFor="name" className="form-label">
                        User Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="user name"
                      />
                    </div>

                    <div className="mb-5">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        id="email"
                        type="text"
                        className="form-control"
                        placeholder="email"
                      />
                    </div>

                    <div className="mb-5">
                      <label htmlFor="phone" className="form-label">
                        Phone
                      </label>
                      <input
                        id="phone"
                        type="number"
                        className="form-control"
                        placeholder="phone"
                      />
                    </div>

                    <div className="mb-5">
                      <label htmlFor="data" className="form-label">
                        Data of Birthday
                      </label>
                      <input
                        id="data"
                        type="date"
                        className="form-control"
                        placeholder="Select Date"
                      />
                    </div>
                  </form>
                </div>

                <div className={styles.image}>
                  <img src={setting} alt="" />
                </div>

                <div className={styles.left}>
                  <form>
                    <div className="mb-5">
                      <label htmlFor="name" className="form-label">
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="full Name"
                      />
                    </div>

                    <div className="mb-5">
                      <label htmlFor="title" className="form-label">
                        Title
                      </label>
                      <input
                        id="title"
                        type="text"
                        className="form-control"
                        placeholder="title"
                      />
                    </div>

                    <div className="mb-5">
                      <label htmlFor="password" className="form-label">
                        password
                      </label>
                      <input
                        id="password"
                        type="password"
                        className="form-control"
                        placeholder="password"
                      />
                    </div>

                    <div className="mb-5">
                      <label htmlFor="data" className="form-label">
                        statements
                      </label>
                      <input
                        id="data"
                        type="number"
                        className="form-control"
                        placeholder="statements"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </Col>

            <Col className={styles.forms_bottom}>
              <div className={styles.items_selected}>
                {settings.map((item) => (
                  <div key={item.id} className="checkbox-wrapper">
                    <label>
                      <span>{item.set}</span>
                      <input type="checkbox" />
                    </label>
                  </div>
                ))}
              </div>
            </Col>
          </Row>

          <button className="btn-primary" type="submit">
            Save
          </button>
        </Container>
      </form>
    </div>
  )
}

export default Setting
