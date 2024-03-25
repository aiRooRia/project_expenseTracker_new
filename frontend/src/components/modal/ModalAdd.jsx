import { useState } from "react";
import { DropDown } from "@/components/export/export";
export const ModalAdd = ({ showAdd, onClose }) => {
  const [expense, setExprense] = useState("expense");
  if (!showAdd) return null;
  return (
    <>
      <div
        id="displayNone"
        className=" fixed inset-0 bg-black bg-opacity-60 backdrop:blur-sm  w-screen h-screen flex justify-center items-center"
      >
        <div className="w-[792px] rounded-xl bg-[#1d232a] ">
          <div className="flex p-4 border-b-2 border-black justify-between">
            <p>Add Records</p>
            <button onClick={onClose}>X</button>
          </div>
          <div className="flex">
            <div className="w-1/2 flex flex-col gap-[20px] px-[24px] py-[20px]">
              <div className="flex justify-between">
                <button
                  className={`btn rounded-full btn-ghost w-1/2 ${
                    expense === "Expense" ? "bg-blue-800" : "text-white"
                  }`}
                  onClick={() => setExprense("Expense")}
                >
                  Expense
                </button>
                <button
                  className={`btn rounded-full text-white btn-ghost w-1/2 ${
                    expense === "Income" ? "bg-green-600" : "text-white"
                  }`}
                  onClick={() => setExprense("Income")}
                >
                  Income
                </button>
              </div>
              <div className="w-full flex flex-col gap-[20px]">
                <div className="w-full ">
                  <input
                    type="text"
                    placeholder="000.0"
                    className="input input-bordered input-success w-full h-[70px] max-w-full"
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <p>Category</p>
                  <DropDown></DropDown>
                </div>
                <div className="flex gap-3">
                  <div className="flex flex-col gap-2">
                    <p>Date</p>
                    <input
                      type="text"
                      placeholder=" October"
                      className="input input-bordered input-success w-full max-w-xs"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p>Date</p>
                    <input
                      type="text"
                      placeholder="12/02"
                      className="input input-bordered input-success w-full max-w-xs"
                    />
                  </div>
                </div>
              </div>
              <div>
                <button
                  className={`btn bg-blue-800 w-full  rounded-full ${
                    expense === "Income" ? "bg-green-600" : "text-white"
                  } `}
                  onClick={() => setExprense("Income")}
                >
                  Add Record
                </button>
              </div>
            </div>
            <div className="w-1/2  px-[24px] py-[20px] flex flex-col justify-between gap-7">
              <div className="w-full flex flex-col gap-3">
                <h1>Payee</h1>
                <textarea
                  className="textarea textarea-bordered w-full h-10"
                  placeholder="Write here"
                ></textarea>
              </div>
              <div className="w-full flex flex-col gap-3">
                <h1>Note</h1>
                <textarea
                  className="textarea textarea-bordered w-full h-[250px]"
                  placeholder="Write here"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
