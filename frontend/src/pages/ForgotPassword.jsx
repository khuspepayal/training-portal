import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function ForgotPassword() {

  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [newPassword,
    setNewPassword] =
    useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response =
        await api.put(
          "/auth/forgot-password",
          {
            email,
            newPassword
          }
        );

      alert(response.data);

      navigate("/");

    } catch (error) {

      console.log(error);

      alert(
        "Password Update Failed"
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
          Forgot Password
        </h2>

        <form
          onSubmit={handleSubmit}
        >

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
              New Password
            </label>

            <input
              type="password"
              className="form-control"
              value={newPassword}
              onChange={(e) =>
                setNewPassword(
                  e.target.value
                )
              }
            />

          </div>

          <button
            type="submit"
            className="
            btn
            btn-warning
            w-100"
          >
            Update Password
          </button>

        </form>

      </div>

    </div>
  );
}

export default ForgotPassword;