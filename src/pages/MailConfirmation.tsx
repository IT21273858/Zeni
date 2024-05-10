import React from "react";
import { FiMail } from "react-icons/fi";

const MailConfirmation = () => {
  return (
    <div className=" flex w-screen h-screen pt-5 px-3 flex-col justify-center items-center bg-purple-950">
      <section className=" text-9xl font-Vign text-white">ZENI</section>
      <section className=" text-2xl font-Gro font-medium text-purple-400">
        Register Your Account Get Free access to 2000 Online Courses
      </section>
      <section className=" text-xl font-TT1 mt-3 text-purple-400">
        Check Your Mail to Activate Account
      </section>
      <FiMail color="#a855f7" size={"7rem"} className=" mt-5" />
    </div>
  );
};

export default MailConfirmation;
