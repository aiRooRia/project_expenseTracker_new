import { useState } from "react";
export const DropDown = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="relative flex flex-col items-center w-full h-[70px] border-[#15803a] border-solid border-2 rounded-md   px-4">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="py-4 w-full flex items-center justify-between tracking-wider active:border-white duration-300 active:text-white "
      >
        Find or choose category
        {/* {!isOpen ? (
          <AiOutLineCaretDown className="h-[24px]"></AiOutLineCaretDown>
        ) : (
          <AiOutLineCaretUp className="h-[24px]"></AiOutLineCaretUp>
        )} */}
      </button>
      {!isOpen && (
        <div className=" absolute top-[70px] w-full bg-[#191b1d] rounded-xl p-2  ">
          <div className="flex flex-col gap-2 justify-center">
            <div className="flex gap-2 items-center border-b-2 px-1 py-3">
              <img src="add.svg " width={25} alt="" />
              <p>Add Category</p>
            </div>
            <div className="flex gap-2 items-center">
              <img src="home.svg" alt="" width={30} />
              <p>Home</p>
            </div>
            <div className="flex gap-2 items-center">
              <img src="gift.svg" alt="" width={30} />
              <p>Gift</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
