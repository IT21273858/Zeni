import { Avatar } from "@mui/material";

const FeedbackCard = () => {
  return (
    <div className=" w-64 h-[450px] bg-teal-600 flex flex-col rounded-3xl">
      <section className=" flex w-full justify-center items-center flex-col h-2/6 bg-pink-500 rounded-t-3xl">
        <Avatar
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzIugh4t8tGK9w3a52Q88li6yccJVy5o7USg&s"
          sx={{
            width: 100,
            height: 100,
          }}
        />
        <span className=" text-xl text-white font-semibold">
          Asmitha Thiraviyarasa
        </span>
      </section>
      <section className=" flex justify-center py-3 px-4 w-full h-4/6 bg-pink-700 rounded-b-3xl">
        <span className=" text-lg text-white font-semibold">
          Asmitha Thiraviyarasa
        </span>
      </section>
    </div>
  );
};

export default FeedbackCard;
