export const modalCategory = () => {
  return (
    <div className=" fixed inset-0 bg-black    w-screem h-screen bg-opacity-80 flex justify-center items-center">
      <div className="w-[449px] bg-[#191b1d]  rounded-xl">
        <div className="p-[20px] border-b-2 flex justify-between">
          <p>Add category</p>
          <p onClick={onCloses}>X</p>
        </div>
        <div className="p-[20px] flex flex-col gap-4">
          <div className="flex gap-3 justify-between">
            <DropIcon></DropIcon>
            <select className="select select-bordered w-[90%] max-w-xs">
              <option disabled selected>
                Name{" "}
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
            {/* <div className="w-[90%]  bg-[#1d232a] py-1 px-2 rounded-lg">
                 
                </div> */}
          </div>
          <button className="w-full btn btn-primary text-white">
            Add category
          </button>
        </div>
      </div>
    </div>
  );
};
