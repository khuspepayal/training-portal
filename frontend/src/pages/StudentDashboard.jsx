import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import Navbar from "../components/Navbar";

function StudentDashboard() {

  const [courses, setCourses] =
    useState([]);

  const navigate =
    useNavigate();

  useEffect(() => {

    fetchCourses();

  }, []);

  const fetchCourses =
    async () => {

      try {

        const response =
          await api.get(
            "/courses"
          );

        setCourses(
          response.data
        );

      } catch (error) {

        console.log(error);
      }
    };

  const enrollCourse =
    async (courseId) => {

      try {

        const user =
          JSON.parse(
            localStorage.getItem(
              "user"
            )
          );

        await api.post(
          `/enrollments/${user.id}/${courseId}`
        );

        alert(
          "Enrolled Successfully"
        );

      } catch (error) {

        console.log(error);

        alert(
          error?.response?.data ||
          "Enrollment Failed"
        );
      }
    };

  return (

    <div>

      <Navbar />

      <div className="container mt-4">

        <h1 className="mb-4">
          Student Dashboard
        </h1>

        <div className="mb-4">

          <button
            className="
            btn
            btn-primary
            me-2"
            onClick={() =>
              navigate(
                "/profile"
              )
            }
          >
            My Profile
          </button>

          <button
            className="
            btn
            btn-success"
            onClick={() =>
              navigate(
                "/my-enrollments"
              )
            }
          >
            My Enrollments
          </button>

        </div>

        <h3 className="mb-4">
          Available Courses
        </h3>

        <div className="row">

          {
            courses.map(
              (course) => (

                <div
                  className="
                  col-md-4
                  mb-4"
                  key={course.id}
                >

                  <div
                    className="
                    card
                    shadow
                    h-100"
                  >

                    <div
                      className=
                      "card-body"
                    >

                      <h5
                        className=
                        "card-title"
                      >
                        {
                          course.courseName
                        }
                      </h5>

                      <button
                        className="
                        btn
                        btn-info
                        me-2"
                        onClick={() =>
                          navigate(
                            `/course-schedule/${course.id}`
                          )
                        }
                      >
                        View Schedule
                      </button>

                      <button
                        className="
                        btn
                        btn-warning"
                        onClick={() =>
                          enrollCourse(
                            course.id
                          )
                        }
                      >
                        Enroll
                      </button>

                    </div>

                  </div>

                </div>

              )
            )
          }

        </div>

      </div>

    </div>
  );
}

export default StudentDashboard;