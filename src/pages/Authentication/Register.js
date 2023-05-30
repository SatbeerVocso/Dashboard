import React, { useState } from "react"
import {
  Row,
  Col,
  CardBody,
  Card,
  Container,
  Form,
  Label,
  Input,
  Alert,
} from "reactstrap"
import logoSm from "../../assets/images/logo-sm.png"
import { Link } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useNavigate } from "react-router-dom"
function Register() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const handleEmailChange = event => {
    setEmail(event.target.value)
  }

  const [password, setPassword] = useState("")
  const handlePasswordChange = event => {
    setPassword(event.target.value)
  }

  const [username, setUsername] = useState("")
  const handleUsernameChange = event => {
    setUsername(event.target.value)
  }

  const submithandler = async e => {
    e.preventDefault()
    try {
      const response = await fetch(
        "http://localhost:1337/api/auth/local/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            email: email,
            password: password,
          }),
        }
      )

      if (response.ok) {
        const data = await response.json()
        console.log(data)
        navigate('/login')
        toast.success("Registration successful!") // Display success toast message
      } else {
        toast.error("Registration failed. Please try again.") // Display error toast message
      }
    } catch (error) {
      console.error(error)
      toast.error("Registration failed. Please try again.") // Display error toast message
    }
    setEmail("")
    setPassword("")
    setUsername("")
  }

  return (
    <React.Fragment>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="fas fa-home h2"></i>
        </Link>
      </div>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={4}>
              <Card className="overflow-hidden">
                <div className="bg-primary">
                  <div className="text-primary text-center p-4">
                    <h5 className="text-white font-size-20">Sign up</h5>
                    <p className="text-white-50">Create your account</p>
                    <div className="logo logo-admin">
                      <img src={logoSm} height="24" alt="logo" />
                    </div>
                  </div>
                </div>
                <CardBody className="p-4">
                  <Form className="mt-4" onSubmit={submithandler}>
                    <div className="mb-3">
                      <Label className="form-label" htmlFor="useremail">
                        Email
                      </Label>
                      <Input
                        name="email"
                        className="form-control"
                        placeholder="Enter Email"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                      ></Input>
                    </div>

                    <div className="mb-3">
                      <Label className="form-label" htmlFor="username">
                        Name
                      </Label>
                      <Input
                        name="username"
                        className="form-control"
                        placeholder="Enter Username"
                        type="text"
                        value={username}
                        onChange={handleUsernameChange}
                        required
                      ></Input>
                    </div>

                    <div className="mb-3">
                      <Label className="form-label" htmlFor="userpassword">
                        Password
                      </Label>
                      <Input
                        name="userpassword"
                        className="form-control"
                        placeholder="Enter Userpassword"
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                      ></Input>
                    </div>
                    <div className="mb-3 row">
                      <div className="col-12 text-end">
                        <button
                          className="btn btn-primary w-md waves-effect waves-light"
                          type="submit"
                        >
                          Register
                        </button>
                      </div>
                    </div>
                  </Form>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                  Already have an account?
                  <Link to="/login" className="fw-medium text-primary">
                    Login
                  </Link>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <ToastContainer />
      </div>
    </React.Fragment>
  )
}

export default Register
