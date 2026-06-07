import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import api from "../services/api";

function CourseSchedule() {

  const { courseId } =
    useParams();

  const [schedules,
    setSchedules] =
    useState([]);

  useEffect(() => {

    fetchSchedules();

  }, []);

  const fetchSchedules =
    async () => {

      try {

        const response =
          await api.get(
            `/schedules/course/${courseId}`
          );

        setSchedules(
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
          Course Schedule
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
                  Trainer Name
                </th>

                <th>
                  Batch
                </th>

                <th>
                  Time Slot
                </th>

              </tr>

            </thead>

            <tbody>

              {
                schedules.length === 0
                ? (
                  <tr>

                    <td
                      colSpan="3"
                      className="text-center"
                    >
                      No Schedule Available
                    </td>

                  </tr>
                )
                : (
                  schedules.map(
                    (schedule) => (

                      <tr
                        key={schedule.id}
                      >

                        <td>
                          {
                            schedule.trainerName
                          }
                        </td>

                        <td>
                          {
                            schedule.batch
                          }
                        </td>

                        <td>
                          {
                            schedule.timeSlot
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

export default CourseSchedule;