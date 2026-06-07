import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function AdminDashboard() {

  const navigate = useNavigate();

  return (
    <div>

      <Navbar />

      <div className="container mt-4">

        <h1 className="mb-4">
          Admin Dashboard
        </h1>

        <div className="row">

          <div className="col-md-4 mb-4">

            <div className="card shadow">

              <div className="card-body">

                <h5 className="card-title">
                  Course Management
                </h5>

                <p className="card-text">
                  Add new courses for students.
                </p>

                <button
                  className="btn btn-primary"
                  onClick={() =>
                    navigate("/add-course")
                  }
                >
                  Add Course
                </button>

              </div>

            </div>

          </div>

          <div className="col-md-4 mb-4">

            <div className="card shadow">

              <div className="card-body">

                <h5 className="card-title">
                  Schedule Management
                </h5>

                <p className="card-text">
                  Create and manage course schedules.
                </p>

                <button
                  className="btn btn-success"
                  onClick={() =>
                    navigate("/add-schedule")
                  }
                >
                  Add Schedule
                </button>

              </div>

            </div>

          </div>

          <div className="col-md-4 mb-4">

            <div className="card shadow">

              <div className="card-body">

                <h5 className="card-title">
                  Student Records
                </h5>

                <p className="card-text">
                  View and search registered students.
                </p>

                <button
                  className="btn btn-info"
                  onClick={() =>
                    navigate("/view-students")
                  }
                >
                  View Students
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;