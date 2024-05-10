import { useScroll } from "framer-motion";
import {
  ApprovalCard,
  CompletedCard,
  DashCard,
  DashCardBigData,
  DashFeedbackCard,
  DashNav,
  EnrollmentCard,
  InprogressCard,
  MyCourseCard,
  NavBar,
  PendingApprovalCard,
} from "../components";
import { useState } from "react";

const Dashboard = () => {
  const [_user, _setUser] = useState("LEARNER");
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

  return (
    <div className=" flex w-screen h-screen  flex-col bg-purple-950 overflow-y-scroll">
      <section className=" w-full h-3/6 pt-7 px-3 bg-purple-900 ">
        <DashNav />
        <div className=" text-3xl font-Gro font-light  text-white mt-3">
          {day[dt.getDay() - 1] +
            ", " +
            "\t" +
            dt.getDate() +
            "  " +
            mon[dt.getMonth()] +
            "  " +
            dt.getFullYear()}
        </div>
        <div className=" text-5xl font-normal  text-white">
          Good Morning, Sanjeevan
        </div>
      </section>
      {/* Student */}
      {
        <section className=" w-full h-3/6 grid gap-3  grid-cols-2 pt-7 place-items-center bg-purple-950">
          <DashCard title="IN-PROGRESS COURSES">
            <>
              <InprogressCard />
              <InprogressCard />
              <InprogressCard />
              <InprogressCard />
              <InprogressCard />
              <InprogressCard />
              <InprogressCard />
            </>
          </DashCard>
          <DashCard title="COMPLETED COURSES">
            <CompletedCard />
          </DashCard>
        </section>
      }

      {/* Instructor */}
      {_user == "INSTRACTOR" && (
        <section className=" w-full h-3/6 grid gap-3  grid-cols-2 pt-7 place-items-center bg-purple-950">
          <DashCard title="MY COURSES">
            <>
              <MyCourseCard />
            </>
          </DashCard>
          <DashCard title="PENDING APPROVALS">
            <PendingApprovalCard />
          </DashCard>
          <DashCard title="FEEDBACKS">
            <DashFeedbackCard />
          </DashCard>
          <DashCard title="ENROLLMENT">
            <DashCardBigData
              title="Enrollment Management"
              desc=""
              bigdata="23"
            />
            <EnrollmentCard />
          </DashCard>
        </section>
      )}

      {/* Admin */}
      {_user == "ADMIN" && (
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
            <EnrollmentCard />
          </DashCard>
          <DashCard title="Financial Transactions">
            <DashCardBigData
              title="Total Income  in following Month "
              desc=""
              bigdata="$300"
            />
            <EnrollmentCard />
          </DashCard>
        </section>
      )}
    </div>
  );
};

export default Dashboard;
