import {Navibar} from "@/components/export/export"

const Home = () => {
  return (
    <div>
      <div className="flex justify-center w-screen">
        <div className="w-[1440px] flex ">
          <Navibar />
        </div>
      </div>
      <div className="bg-[#191b1d]  flex justify-center">
        <div className="w-[1440px] mt-10 flex gap-7 justify-between">
          <div className="bg-[#1d232a] w-[25%] rounded-xl p-4 flex flex-col gap-7">
            <div className=" flex flex-col gap-3">
              <h1 className=" text-xl">Records</h1>
              <button className="btn  bg-indigo-500 shadow-lg shadow-indigo-500/50  ">
                + Add
              </button>
            </div>
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
            <div className="flex flex-col gap-3">
              <p>Types</p>
              <div className="flex flex-col gap-3 px-5">
                <div className="flex gap-4">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox"
                  ></input>
                  <p>All</p>
                </div>
                <div className="flex gap-4">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox"
                  ></input>
                  <p>Income</p>
                </div>
                <div className="flex gap-4">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox"
                  ></input>
                  <p>Expense</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <p>Category</p>
              <div className="flex flex-col  px-4 gap-4">
                <div className="flex justify-between">
                  <div className="flex gap-3">
                    <img src="eye.svg" width={30} alt="" />
                    <button>Food & Drinks</button>
                  </div>
                  <img src="arrow-right.svg" alt="" width={20} />
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-3">
                    <img src="eye.svg" width={30} alt="" />
                    <button>Shopping</button>
                  </div>
                  <img src="arrow-right.svg" alt="" width={20} />
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-3">
                    <img src="eye.svg" width={30} alt="" />
                    <button>House</button>
                  </div>
                  <img src="arrow-right.svg" alt="" width={20} />
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-3">
                    <img src="eye.svg" width={30} alt="" />
                    <button>Transportation</button>
                  </div>
                  <img src="arrow-right.svg" alt="" width={20} />
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-3">
                    <img src="eye.svg" width={30} alt="" />
                    <button>Vehicle</button>
                  </div>
                  <img src="arrow-right.svg" alt="" width={20} />
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-3">
                    <img src="eye.svg" width={30} alt="" />
                    <button>Life & Entertainment</button>
                  </div>
                  <img src="arrow-right.svg" alt="" width={20} />
                </div>
                <div className="flex justify-between">
                  <button
                    onClick={() => setShowCategory(true)}
                    className="btn bg-indigo-500 shadow-lg shadow-indigo-500/50  flex gap-3 items-center w-full justify-start"
                  >
                    <img src="plus.svg" width={20} alt="" />
                    Add Category
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <p>Amount Range</p>
              <div className="flex gap-4 p-3">
                <input
                  type="text"
                  placeholder="0"
                  className="input input-bordered w-full max-w-xs"
                />
                <input
                  type="text"
                  placeholder="1000"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
            </div>
          </div>
          <div className=" w-[75%] rounded-xl p-4 flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <select className="select select-primary w-[150px] max-w-xs">
                  <option disabled selected>
                    Last 30 days
                  </option>
                  <option>Game of Thrones</option>
                  <option>Lost</option>
                  <option>Breaking Bad</option>
                  <option>Walking Dead</option>
                </select>
                <select className="select select-primary w-[150px] max-w-xs">
                  <option disabled selected>
                    Newest first
                  </option>
                  <option>Game of Thrones</option>
                  <option>Lost</option>
                  <option>Breaking Bad</option>
                  <option>Walking Dead</option>
                </select>
              </div>
              <div className=" rounded-xl bg-[#1d232a] flex items-center justify-between">
                <div className="flex gap-4 px-3 py-2">
                  <input type="checkbox" defaultChecked className="checkbox" />
                  <p>Select all</p>
                </div>
                <p>- 35,500</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p>Today</p>
              <RecordsWithBg />
              <RecordsWithBg />
              <RecordsWithBg />
              <RecordsWithBg />
              <RecordsWithBg />
              <RecordsWithBg />
            </div>
            <div className="flex flex-col gap-4">
              <p>Yesterday</p>
              <RecordsWithBg />
              <RecordsWithBg />
              <RecordsWithBg />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
