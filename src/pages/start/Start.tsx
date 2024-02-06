import { Col, Container, Row } from "react-bootstrap"
import styles from "./styles.module.css"
import image from "../../public/images/Vectary texture.png"

import { FieldValues, useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod/dist/zod.js';

import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useNavigate } from "react-router-dom"

const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 charactes." }),
  password: z
    .number({ invalid_type_error: "Password field required." })
    .min(6, { message: "Password must be at least 6 characters" }),
})

type FormData = z.infer<typeof schema>

const Start = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const handleLogin = () => {
    toast.success("Login successful!", {
      autoClose: 2000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    })
  }

  const onSubmit = (data: FieldValues) => {
    if (!data.name || !data.password) {
      // Display an error toast if either field is empty
      toast.error("Please enter both username and password", {
        autoClose: 2000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
      return handleLogin()
    }

    // Redirect to the home page
    navigate("/home")
  }

  return (
    <div className={styles.main_section}>
      <Container className={styles.container}>
        <Row lg="12">
          <Col className={styles.right_main}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className={`${"form_label"} ${styles.label}`}
                >
                  user name
                </label>
                <input
                  {...register("name")}
                  id="name"
                  type="text"
                  className="form-control"
                  placeholder="user Name:"
                />
                {errors.name && (
                  <p className="text-danger">{errors.name.message}</p>
                )}
              </div>

              <div className="mb-5">
                <label
                  htmlFor="password"
                  className={`${"form_label"} ${styles.label}`}
                >
                  Password
                </label>
                <input
                  {...register("password", { valueAsNumber: true })}
                  id="password"
                  type="password"
                  className="form-control"
                  placeholder="password:"
                />
                {errors.password && (
                  <p className="text-danger">{errors.password.message}</p>
                )}
              </div>

              <div className={styles.action}>
                <button className={styles.login} type="submit">
                  Login
                </button>
                <button className={styles.signup}>Signup</button>
              </div>
            </form>
          </Col>

          <Col className={styles.left_main}>
            <div className={styles.image}>
              <img src={image} alt="" />
            </div>
          </Col>
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </Row>
      </Container>
    </div>
  )
}

export default Start
