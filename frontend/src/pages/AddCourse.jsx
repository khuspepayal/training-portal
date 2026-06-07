import { useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";

function AddCourse() {

  const [courseName,
    setCourseName] =
    useState("");

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        await api.post(
          "/courses",
          {
            courseName
          }
        );

        alert(
          "Course Added Successfully"
        );

        setCourseName("");

      } catch (error) {

        console.log(error);

        alert(
          "Failed To Add Course"
        );
      }
    };

  return (

    <div>

      <Navbar />

      <div
        className="
        container
        mt-5"
      >

        <div
          className="
          row
          justify-content-center"
        >

          <div
            className="
            col-md-6"
          >

            <div
              className="
              card
              shadow"
            >

              <div
                className=
                "card-body"
              >

                <h2
                  className="
                  text-center
                  mb-4"
                >
                  Add Course
                </h2>

                <form
                  onSubmit={
                    handleSubmit
                  }
                >

                  <div
                    className=
                    "mb-3"
                  >

                    <label
                      className=
                      "form-label"
                    >
                      Course Name
                    </label>

                    <input
                      type="text"
                      className=
                      "form-control"
                      placeholder=
                      "Enter Course Name"
                      value={
                        courseName
                      }
                      onChange={
                        (e) =>
                          setCourseName(
                            e.target
                              .value
                          )
                      }
                    />

                  </div>

                  <button
                    type="submit"
                    className="
                    btn
                    btn-primary
                    w-100"
                  >
                    Add Course
                  </button>

                </form>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AddCourse;