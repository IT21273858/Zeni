import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ApprovalCard,
  AuthHandler,
  CompletedCard,
  DashCard,
  DashCardBigData,
  DashFeedbackCard,
  DashNav,
  EnrollmentCard,
  InprogressCard,
  MyCourseCard,
  PendingApprovalCard,
} from "../components";
import axios from "axios";
import RingLoader from "react-spinners/RingLoader";
import { FiPlusCircle } from "react-icons/fi";

const Dashboard = () => {
  const { NAME, ROLE, TOKEN, ID } = AuthHandler();
  const to = useNavigate();
  const [_user, _setUser] = useState(ROLE);
  const [_BigCount, _setBigCount] = useState(0);
  const [_Dashdata, _setDashdata] = useState<any[] | null>(null);
  const [_Feedbacks, _setFeedbacks] = useState<any[] | null>(null);
  const [_AllCoursesNonApprove, _setAllCourses] = useState<any[] | null>(null);
  const [_isLoading, _setIsLoading] = useState<boolean>(false);
  const dt = new Date();
  const day = ["MON", "TUE", "WED", "THUR", "FRI", "SAT", "SUN"];
  const mon = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  var value = dt.getDay();
  if (value == 0) value = 6;
  else value = value - 1;

  useEffect(() => {
    if (!TOKEN) {
      to("/login");
    }
  }, [TOKEN]);

  useEffect(() => {
    _setIsLoading(true);

    if (ID) {
      if (ROLE == "Learner") {
        axios
          .get(`${import.meta.env.VITE_BACKEND_USER}/user/get/` + ID)
          .then((result) => {
            if (result.status == 200) {
              _setIsLoading(false);
              _setDashdata(result.data.user.enrollment);
            }
            //   const users: any[] = result.data.data;
            //   const user = users.filter((user) => {
            //     if (user.id == ID) return user;
            //   });
            //   _setDashdata(user[0]);
          })
          .catch((err) => {
            _setIsLoading(false);
            console.error("Error in Getting DashError" + err);
          });
      }

      if (ROLE == "Instructor") {
        axios
          .get(
            `${
              import.meta.env.VITE_BACKEND_INSTRUCTOR
            }/instructor/course/get/` + ID
          )
          .then((result) => {
            if (result.status == 200) {
              console.log(result.data.data);
              _setDashdata(result.data.data);
            }
          })
          .catch((err) => {
            console.error("Error in Getting DashError" + err);
          });

        axios
          .get(
            `${
              import.meta.env.VITE_BACKEND_INSTRUCTOR
            }/instructor/feedback/get/` + ID
          )
          .then((result) => {
            if (result.status == 200) {
              _setIsLoading(false);
              console.log(result.data.data);
              _setFeedbacks(result.data.data);
            }
            //   const users: any[] = result.data.data;
            //   const user = users.filter((user) => {
            //     if (user.id == ID) return user;
            //   });
            //   _setDashdata(user[0]);
          })
          .catch((err) => {
            _setIsLoading(false);
            console.error("Error in Getting DashError" + err);
          });
      }
      if (ROLE == "Admin") {
        console.log("ROLE" + ROLE);
        axios
          .get(`${import.meta.env.VITE_BACKEND_COURSE}/course/getAll`)
          .then((result) => {
            if (result.status == 200) console.log(result.data.data);
            const Courses: any[] = result.data.data;
            const NonV = Courses.filter((course) => {
              if (!course.visibility) return course;
            });
            _setAllCourses(NonV);

            //   const users: any[] = result.data.data;
            //   const user = users.filter((user) => {
            //     if (user.id == ID) return user;
            //   });
            //   _setDashdata(user[0]);
          })
          .catch((err) => {
            console.error("Error in Getting DashError" + err);
          });

        axios
          .get(
            `${
              import.meta.env.VITE_BACKEND_INSTRUCTOR
            }/instructor/feedback/get/` + ID
          )
          .then((result) => {
            if (result.status == 200) console.log(result.data.data);
            _setFeedbacks(result.data.data);
            _setIsLoading(false);
            //   const users: any[] = result.data.data;
            //   const user = users.filter((user) => {
            //     if (user.id == ID) return user;
            //   });
            //   _setDashdata(user[0]);
          })
          .catch((err) => {
            console.error("Error in Getting DashError" + err);
            _setIsLoading(false);
          });
      }
    }
  }, [ID]);

  return (
    <div className=" flex w-screen h-screen  flex-col bg-purple-950 overflow-y-scroll">
      <section className=" w-full h-3/6 pt-7 px-3 bg-purple-900 ">
        <DashNav />
        <div className=" text-3xl font-Gro font-light  text-white mt-3">
          {day[value] +
            ", " +
            "\t" +
            dt.getDate() +
            "  " +
            mon[dt.getMonth()] +
            "  " +
            dt.getFullYear()}
        </div>
        <div className=" text-5xl font-normal  text-white">
          Good Morning, {NAME}
        </div>
      </section>
      {/* Student */}
      {_user == "Learner" && (
        <>
          {_Dashdata && (
            <section className=" w-full h-3/6 grid gap-3  grid-cols-2 pt-7 place-items-center bg-purple-950">
              <DashCard title="IN-PROGRESS COURSES">
                <>
                  {console.log(_Dashdata)}

                  {_Dashdata
                    .filter((course) => course.progress != 100 && course)
                    .map((course, index) => (
                      <InprogressCard
                        progress={parseInt(course.progress)}
                        title={course.course.c_name}
                        i_name={course.course.name}
                        i_src={course.course.profile_img}
                      />
                    ))}
                </>
              </DashCard>
              <DashCard title="COMPLETED COURSES">
                {_Dashdata
                  .filter((course) => course.progress == 100 && course)
                  .map((course, index) => (
                    <CompletedCard />
                  ))}
              </DashCard>
            </section>
          )}
        </>
      )}

      {/* Instructor */}
      {_user == "Instructor" && (
        <>
          {_Dashdata && (
            <>
              <section className=" w-full h-3/6 grid gap-3  grid-cols-2 pt-7 place-items-center bg-purple-950">
                <span className=" mb-5 col-span-2 w-full flex justify-end items-center px-10 h-10">
                  <div
                    onClick={() => {
                      to("/course/create");
                    }}
                    className=" h-full flex text-white rounded-md cursor-pointer hover:bg-purple-700 bg-purple-800 gap-3 px-5 items-center text-xl font-semibold font-pop"
                  >
                    <FiPlusCircle color="#ffffff" />
                    ADD COURSE
                  </div>
                </span>
                <DashCard title="MY COURSES">
                  <>
                    {_Dashdata
                      .filter((course) => course.visibility && course)
                      .map((course, index) => (
                        <MyCourseCard
                          key={index}
                          title={course.c_name}
                          id={course.id}
                          inst_id={ID!}
                        />
                      ))}
                  </>
                </DashCard>
                <DashCard title="PENDING APPROVALS">
                  {_Dashdata
                    .filter((course) => !course.visibility && course)
                    .map((course, index) => (
                      <PendingApprovalCard
                        key={index}
                        title={course.c_name}
                        id={course.id}
                      />
                    ))}
                </DashCard>
                <DashCard title="FEEDBACKS">
                  {_Feedbacks?.map((fed, index) => {
                    return (
                      <DashFeedbackCard
                        key={index}
                        feed={fed.feedback}
                        user={fed.user.name}
                        user_pic={fed.user.profile_img}
                      />
                    );
                  })}
                </DashCard>
                <DashCard title="ENROLLMENT">
                  <DashCardBigData
                    title="Enrollment Management"
                    desc=""
                    bigdata={_BigCount.toString()}
                  />

                  {_Dashdata
                    .filter((course) => course.visibility && course)
                    .map((course, index) => {
                      const COUNT: any[] = course.enrollment;

                      return (
                        <EnrollmentCard
                          key={index}
                          ctitle={course.c_name}
                          count={COUNT.length.toString()}
                        />
                      );
                    })}
                </DashCard>
              </section>
            </>
          )}
        </>
      )}

      {/* Admin */}
      {_user == "Admin" && (
        <section className=" w-full h-3/6 grid gap-3  grid-cols-2 pt-7 place-items-center bg-purple-950">
          <DashCard title="COURSE-TO-APPROVAL">
            <ApprovalCard />
          </DashCard>
          <DashCard title="Users">
            <DashCardBigData
              title="Users for Month"
              desc=" Stay informed with real-time insights: track last month's user growth,
          learner enrollment, and instructor additions at a glance"
              bigdata={"APR" + "\n" + "9"}
            />
            <EnrollmentCard ctitle={"3"} count={""} />
          </DashCard>
          <DashCard title="Financial Transactions">
            <DashCardBigData
              title="Total Income  in following Month "
              desc=""
              bigdata="$300"
            />
            <EnrollmentCard ctitle={"3"} count={""} />
          </DashCard>
        </section>
      )}

      {_isLoading && (
        <>
          <section className=" w-full h-3/6  flex justify-center items-center pt-7 place-items-center bg-purple-950">
            <RingLoader color="#ffffff" size={100} />
          </section>
        </>
      )}
    </div>
  );
};

export default Dashboard;
