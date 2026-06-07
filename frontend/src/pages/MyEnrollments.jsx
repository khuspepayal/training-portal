import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";

function MyEnrollments() {

  const [enrollments,
    setEnrollments] =
    useState([]);

  useEffect(() => {

    fetchEnrollments();

  }, []);

  const fetchEnrollments =
    async () => {

      try {

        const user =
          JSON.parse(
            localStorage.getItem(
              "user"
            )
          );

        const response =
          await api.get(
            `/enrollments/${user.id}`
          );

        setEnrollments(
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
          My Enrollments
        </h2>

        <div className="table-responsive">

          <table
            className="
            table
            table-striped
            table-bordered
            table-hover"
          >

            <thead className="table-dark">

              <tr>

                <th>
                  Enrollment ID
                </th>

                <th>
                  Course Name
                </th>

              </tr>

            </thead>

            <tbody>

              {
                enrollments.length === 0
                ? (
                  <tr>

                    <td
                      colSpan="2"
                      className="text-center"
                    >
                      No Enrollments Found
                    </td>

                  </tr>
                )
                : (
                  enrollments.map(
                    (enrollment) => (

                      <tr
                        key={
                          enrollment.id
                        }
                      >

                        <td>
                          {
                            enrollment.id
                          }
                        </td>

                        <td>
                          {
                            enrollment
                              .course
                              .courseName
                          }
                        </td>

                      </tr>

                    )
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

export default MyEnrollments;