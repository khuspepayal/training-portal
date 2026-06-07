import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

function Register() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("STUDENT");

  const handleRegister = async (e) => {

    e.preventDefault();

    try {

      await api.post(
        "/auth/register",
        {
          name,
          email,
          password,
          role
        }
      );

      alert(
        "Registration Successful"
      );

      navigate("/");

    } catch (error) {

      console.log(error);

      alert(
        "Registration Failed"
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
          REGISTER
        </h2>

        <form
          onSubmit={handleRegister}
        >

          <div className="mb-3">

            <label
              className="form-label"
            >
              Name
            </label>

            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) =>
                setName(
                  e.target.value
                )
              }
            />

          </div>

          <div className="mb-3">

            <label
              className="form-label"
            >
              Email
            </label>

            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
            />

          </div>

          <div className="mb-3">

            <label
              className="form-label"
            >
              Password
            </label>

            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
            />

          </div>

          <div className="mb-3">

            <label
              className="form-label"
            >
              Role
            </label>

            <select
              className="form-select"
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
            btn-success
            w-100"
          >
            Register
          </button>

        </form>

        <div
          className="
          text-center
          mt-3"
        >

          <Link to="/">
            Already Have Account?
            Login
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Register;