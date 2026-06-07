import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("STUDENT");

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const response =
        await api.post(
          "/auth/login",
          {
            email,
            password,
            role
          }
        );

      const user = response.data;

      localStorage.setItem(
        "user",
        JSON.stringify(user)
      );

      if (
        user.role === "STUDENT"
      ) {
        navigate(
          "/student-dashboard"
        );
      } else {
        navigate(
          "/admin-dashboard"
        );
      }

    } catch (error) {

      console.log(error);

      alert(
        "Invalid Credentials"
      );
    }
  };

  return (

    <div
      className="
      d-flex
      justify-content-center
      align-items-center
      vh-100
      bg-light"
    >

      <div
        className="
        card
        shadow
        p-4"
        style={{
          width: "450px"
        }}
      >

        <h2
          className="
          text-center
          mb-4"
        >
          LOGIN
        </h2>

        <form
          onSubmit={handleLogin}
        >

          <div
            className="mb-3"
          >
            <label
              className=
              "form-label"
            >
              Email
            </label>

            <input
              type="email"
              className=
              "form-control"
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
            />
          </div>

          <div
            className="mb-3"
          >
            <label
              className=
              "form-label"
            >
              Password
            </label>

            <input
              type="password"
              className=
              "form-control"
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
            />
          </div>

          <div
            className="mb-3"
          >
            <label
              className=
              "form-label"
            >
              Role
            </label>

            <select
              className=
              "form-select"
              value={role}
              onChange={(e) =>
                setRole(
                  e.target.value
                )
              }
            >
              <option
                value="STUDENT"
              >
                STUDENT
              </option>

              <option
                value="ADMIN"
              >
                ADMIN
              </option>

            </select>
          </div>

          <button
            type="submit"
            className="
            btn
            btn-primary
            w-100"
          >
            Login
          </button>

        </form>

        <div
          className="
          text-center
          mt-3"
        >

          <Link
            to="/register"
          >
            New User? Register
          </Link>

        </div>

        <div
          className="
          text-center
          mt-2"
        >

          <Link
            to="/forgot-password"
          >
            Forgot Password?
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Login;