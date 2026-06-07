import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";

function AddSchedule() {

  const [courses, setCourses] =
    useState([]);

  const [courseId, setCourseId] =
    useState("");

  const [trainerName,
    setTrainerName] =
    useState("");

  const [batch, setBatch] =
    useState("MORNING");

  const [timeSlot, setTimeSlot] =
    useState("EIGHT_TO_TEN");

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses =
    async () => {

      try {

        const response =
          await api.get("/courses");

        setCourses(
          response.data
        );

      } catch (error) {

        console.log(error);
      }
    };

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        await api.post(
          "/schedules",
          {
            courseId,
            trainerName,
            batch,
            timeSlot
          }
        );

        alert(
          "Schedule Added Successfully"
        );

        setTrainerName("");

      } catch (error) {

        console.log(error);

        alert(
          error?.response?.data ||
          "Failed To Add Schedule"
        );
      }
    };

  return (

    <div>

      <Navbar />

      <div className="container mt-5">

        <div className="row justify-content-center">

          <div className="col-md-8">

            <div className="card shadow">

              <div className="card-body">

                <h2 className="text-center mb-4">
                  Add Schedule
                </h2>

                <form onSubmit={handleSubmit}>

                  <div className="mb-3">

                    <label className="form-label">
                      Course
                    </label>

                    <select
                      className="form-select"
                      value={courseId}
                      onChange={(e) =>
                        setCourseId(
                          e.target.value
                        )
                      }
                    >

                      <option value="">
                        Select Course
                      </option>

                      {
                        courses.map(
                          (course) => (

                            <option
                              key={course.id}
                              value={course.id}
                            >
                              {course.courseName}
                            </option>

                          )
                        )
                      }

                    </select>

                  </div>

                  <div className="mb-3">

                    <label className="form-label">
                      Trainer Name
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      value={trainerName}
                      onChange={(e) =>
                        setTrainerName(
                          e.target.value
                        )
                      }
                    />

                  </div>

                  <div className="mb-3">

                    <label className="form-label">
                      Batch
                    </label>

                    <select
                      className="form-select"
                      value={batch}
                      onChange={(e) =>
                        setBatch(
                          e.target.value
                        )
                      }
                    >

                      <option value="MORNING">
                        MORNING
                      </option>

                      <option value="AFTERNOON">
                        AFTERNOON
                      </option>

                      <option value="EVENING">
                        EVENING
                      </option>

                      <option value="NIGHT">
                        NIGHT
                      </option>

                    </select>

                  </div>

                  <div className="mb-4">

                    <label className="form-label">
                      Time Slot
                    </label>

                    <select
                      className="form-select"
                      value={timeSlot}
                      onChange={(e) =>
                        setTimeSlot(
                          e.target.value
                        )
                      }
                    >

                      <option value="EIGHT_TO_TEN">
                        EIGHT_TO_TEN
                      </option>

                      <option value="TEN_TO_TWELVE">
                        TEN_TO_TWELVE
                      </option>

                      <option value="TWELVE_TO_TWO">
                        TWELVE_TO_TWO
                      </option>

                      <option value="TWO_TO_FOUR">
                        TWO_TO_FOUR
                      </option>

                      <option value="FOUR_TO_SIX">
                        FOUR_TO_SIX
                      </option>

                      <option value="SIX_TO_EIGHT">
                        SIX_TO_EIGHT
                      </option>

                      <option value="EIGHT_TO_TEN_PM">
                        EIGHT_TO_TEN_PM
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
                    Add Schedule
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

export default AddSchedule;