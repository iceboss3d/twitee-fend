import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ServerCall from "../Components/ServerCall";

export default function Register({ props }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmitClick = async (e) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      try {
        let response = await ServerCall.auth("auth/signup", {
          email: formData.email,
          password: formData.password,
        });
        if (response.status) {
          navigate("/login");
        }
      } catch (error) {
        console.log(error.message);
      }
    } else {
      props.showError("Passwords do not match");
    }
  };
  return (
    <div
      className=" d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="card" style={{ width: "24rem" }}>
        <div className="card-body">
          <h1 className="card-title text-center">Sign Up</h1>

          <form onSubmit={handleSubmitClick}>
            <div className="form-group my-2">
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group my-2">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="form-group my-2">
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>

            <div className="form-group my-2 d-grid">
              <button type="submit" className="btn btn-dark">
                Sign up
              </button>
            </div>

            <p className="text-muted text-center">
              Have an account?{" "}
              <Link to="/login" className="text-dark">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
