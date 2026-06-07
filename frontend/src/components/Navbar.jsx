import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const user =
    JSON.parse(
      localStorage.getItem("user")
    );

  const logout = () => {

    localStorage.removeItem(
      "user"
    );

    navigate("/");
  };

  return (

    <nav
      className=
      "navbar navbar-dark bg-dark mb-4 px-3"
    >

      <span
        className=
        "navbar-brand"
      >

        Training Portal

      </span>

      <div>

        <span
          className=
          "text-white me-3"
        >

          {user?.name}

        </span>

        <button
          className=
          "btn btn-danger"
          onClick={logout}
        >
          Logout
        </button>

      </div>

    </nav>
  );
}

export default Navbar;