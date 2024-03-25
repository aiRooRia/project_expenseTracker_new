export const StepThree = () => {
  return (
    <>
      <div className="flex flex-col  items-center gap-5">
        <div className="w-20 h-20 bg-blue-600 rounded-full flex justify-center items-center">
          <img src="check.svg" className="w-14" alt="" />
        </div>
        <h1 className=" text-white text-3xl">Good Job!</h1>
      </div>

      <p className="text-center	">
        Your very first account has been created. Now continue to dashboard and
        start tracking
      </p>
    </>
  );
};
