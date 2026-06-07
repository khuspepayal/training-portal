import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function StudentProfile() {

  const [user, setUser] =
    useState(null);

  useEffect(() => {

    const loggedInUser =
      JSON.parse(
        localStorage.getItem(
          "user"
        )
      );

    setUser(
      loggedInUser
    );

  }, []);

  if (!user) {

    return (

      <div>

        <Navbar />

        <div className="container mt-4">

          <h3>
            Loading...
          </h3>

        </div>

      </div>
    );
  }

  return (

    <div>

      <Navbar />

      <div className="container mt-5">

        <div className="row justify-content-center">

          <div className="col-md-6">

            <div className="card shadow">

              <div className="card-body">

                <h2
                  className="
                  text-center
                  mb-4"
                >
                  Student Profile
                </h2>

                <table
                  className=
                  "table"
                >

                  <tbody>

                    <tr>

                      <th>
                        Name
                      </th>

                      <td>
                        {user.name}
                      </td>

                    </tr>

                    <tr>

                      <th>
                        Email
                      </th>

                      <td>
                        {user.email}
                      </td>

                    </tr>

                    <tr>

                      <th>
                        Role
                      </th>

                      <td>
                        {user.role}
                      </td>

                    </tr>

                  </tbody>

                </table>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default StudentProfile;