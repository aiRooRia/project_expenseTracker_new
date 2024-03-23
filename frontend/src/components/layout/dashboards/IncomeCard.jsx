export const IncomeCard = () => {
    return (
      <div className="w-[460px] h-[219px] rounded-xl bg-[#1d232a] text-white flex flex-col justify-between">
        <div className="border-b-2 border-[#191b1d] flex gap-2  px-7 py-4 ">
          <img src="green.svg" alt="" width={10} />
          <h3 className=" font-bold">Your income</h3>
        </div>
        <div className="flex flex-col gap-1  px-7">
          <h1 className=" text-3xl font-bold">1,200,000</h1>
          <h3 className=" opacity-15">Your Income Amount</h3>
        </div>
        <div className="flex gap-1 px-7 pb-7">
          <img src="upArrow.svg" alt="" width={20} />
          <h3>32% from last mounth</h3>
        </div>
      </div>
    );
  };
  