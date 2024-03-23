export const Records = () => {
  return (
    <div className="flex  items-center justify-between border-b-2 border-[#191b1d] p-2 ">
      <div className="flex gap-2 ">
        <img src="house.svg" alt="" width={40} />
        <div>
          <p>Lending & Renting</p>
          <p>3 hours ago</p>
        </div>
      </div>
      <p className=" text-green-600">- 1,000</p>
    </div>
  );
};

export const RecordsWithBg = () => {
  return (
    <div className="flex  items-center justify-between border-2 rounded-xl border-[#1d232a] bg-[#1d232a] p-2 ">
      <div className="flex gap-2 items-center  ">
        <input type="checkbox" defaultChecked className="checkbox" />
        <img src="house.svg" alt="" width={40} />
        <div>
          <p>Lending & Renting</p>
          <p>3 hours ago</p>
        </div>
      </div>
      <p className=" text-green-600">- 1,000</p>
    </div>
  );
};
