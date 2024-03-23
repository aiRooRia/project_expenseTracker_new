export const Card = () => {
  return (
    <div className="w-[460px] h-[219px] rounded-xl bg-gray-950  p-7">
      <div className="w-full h-full  absolute ">
        <img
          className=" opacity-20 relative top-[-4px] right-[-208px]"
          src="Shape.svg"
          alt=""
        />
      </div>
      <div className="w-full h-full flex  flex-col justify-between">
        <div className="flex gap-3">
          <img src="beer.svg" alt="" width={20} />
          <h1 className=" font-bold text-white  text-xl">aiRo!</h1>
        </div>
        <div className="flex justify-between items-end">
          <div>
            <p className=" opacity-50">Cash</p>
            <p>10,000,000</p>
          </div>
          {/* <img src="signal-01.svg" className="w-7" alt="" /> */}
        </div>
      </div>
    </div>
  );
};
