import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";

function ViewStudents() {

  const [students, setStudents] =
    useState([]);

  const [keyword, setKeyword] =
    useState("");

  useEffect(() => {

    fetchStudents();

  }, []);

  const fetchStudents =
    async () => {

      try {

        const response =
          await api.get(
            "/students"
          );

        setStudents(
          response.data
        );

      } catch (error) {

        console.log(error);
      }
    };

  const searchStudents =
    async () => {

      try {

        if (
          keyword.trim() === ""
        ) {

          fetchStudents();

          return;
        }

        const response =
          await api.get(
            `/students/search?keyword=${keyword}`
          );

        setStudents(
          response.data
        );

      } catch (error) {

        console.log(error);
      }
    };

  return (

    <div>

      <Navbar />

      <div className="container mt-4">

        <h2 className="mb-4">
          View Students
        </h2>

        <div className="row mb-4">

          <div className="col-md-8">

            <input
              type="text"
              className="form-control"
              placeholder="Search Student"
              value={keyword}
              onChange={(e) =>
                setKeyword(
                  e.target.value
                )
              }
            />

          </div>

          <div className="col-md-4">

            <button
              className="
              btn
              btn-primary
              w-100"
              onClick={
                searchStudents
              }
            >
              Search
            </button>

          </div>

        </div>

        <div
          className="
          table-responsive"
        >

          <table
            className="
            table
            table-striped
            table-bordered
            table-hover"
          >

            <thead
              className=
              "table-dark"
            >

              <tr>

                <th>ID</th>

                <th>Name</th>

                <th>Email</th>

                <th>Role</th>

              </tr>

            </thead>

            <tbody>

              {
                students.map(
                  (student) => (

                    <tr
                      key={
                        student.id
                      }
                    >

                      <td>
                        {student.id}
                      </td>

                      <td>
                        {student.name}
                      </td>

                      <td>
                        {student.email}
                      </td>

                      <td>
                        {student.role}
                      </td>

                    </tr>

                  )
                )
              }

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default ViewStudents;