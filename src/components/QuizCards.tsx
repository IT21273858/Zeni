const QuizCards = () => {
  return (
    <div className=" w-full h-40 flex flex-col bg-purple-950 rounded-lg border-2 border-white">
      <div className=" text-base font-pop h-1/4 font-medium w-full line-clamp-2 text-left px-2 py-2">
        1. What's your power color?
      </div>
      <div className=" flex flex-col text-lg h-2/4  font-pop font-medium w-full line-clamp-2 text-left px-2 py-2">
        <section className=" w-full h-1/2 flex justify-between px-5">
          <div className=" font-light font-base">A. GREEN</div>
          <div className=" font-light font-base">B. BLUE</div>
        </section>
        <section className=" w-full h-1/2 flex justify-between px-5">
          <div className=" font-light font-base">C. RED</div>
          <div className=" font-light font-base">D. YELLOw</div>
        </section>
      </div>
      <div className=" text-lg h-1/4  font-pop font-normal w-full line-clamp-2 text-left px-2 py-2">
        <span className=" font-semibold">Correct Answer:</span>
        <span className="  font-Gro px-3">C</span>
      </div>
    </div>
  );
};

export default QuizCards;
