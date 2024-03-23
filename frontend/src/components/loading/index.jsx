import React, { useContext, useEffect, useState } from "react";
import { Context } from "../utils/contex";
import { StepOne } from "@/components/export/loading";
import { LogoBig } from "../export/export";
import { useRouter } from "next/router";
export const Loading = () => {
  const { isLoading, startLoading } = useContext(Context);
  useEffect(() => {
    startLoading();
  }, []);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showBalanceSetup, setShowBalanceSetup] = useState(false);
  const handleConfirm = () => {
    if (!showConfirmation) {
      setShowConfirmation(true);
    } else if (!showBalanceSetup) {
      setShowBalanceSetup(true);
    }
  };
  const { push } = useRouter();
  const handleClickToDashboard = () => {
    push("/dashboard");
  };
  if (isLoading) {
    return (
      <div className="w-screen h-screen flex flex-col gap-10 items-center justify-center">
        <div className="flex gap-3">
          <img src="beer.svg" alt="" width={50} />
          <h1 className=" font-bold text-black  text-4xl">aiRo!</h1>
        </div>
        <div className="flex flex-col items-center gap-3">
          <span className="loading loading-spinner text-info w-[50px]"></span>
          <p>Ta түр хүлээнэ үү...</p>
        </div>
      </div>
    );
  }
  return (
    <div className="w-screnn h-screen flex flex-col  items-center p-[100px]  ">
      {!showConfirmation && (
        <>
          <div className="flex flex-col items-center gap-10 ">
            <div className="flex gap-3">
              <LogoBig />
            </div>
            <ul className="steps w-[500px]">
              <li className="step step-primary">Currency</li>
              <li className="step ">Balance</li>
              <li className="step">Finish</li>
            </ul>
          </div>
          <div className="flex flex-col items-center mt-[140px] gap-5 w-[400px] ">
            <div className="flex flex-col  items-center gap-5">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex justify-center items-center">
                <img src="money.svg" className="w-14" alt="" />
              </div>
              <h1 className=" text-white text-3xl">Select base currency</h1>
            </div>
            <select className="select select-bordered w-full max-w-xs">
              <option selected>MNT - Mongolian currency</option>
              <option>USD - United State currency</option>
            </select>
            <p className="text-center	">
              Your base currency should be the one you use most often. All
              transaction in other currencies will be calculated based on this
              one{" "}
            </p>
            <button
              onClick={handleConfirm}
              className="btn  bg-blue-600 text-white w-full rounded-full"
            >
              Confirm
            </button>{" "}
          </div>
        </>
      )}

      {showConfirmation && !showBalanceSetup && (
        <>
          <div className="flex flex-col items-center gap-10 ">
            <div className="flex gap-3">
              <LogoBig />
            </div>
            <ul className="steps w-[500px]">
              <li className="step step-primary">Currency</li>
              <li className="step   step-primary">Balance</li>
              <li className="step">Finish</li>
            </ul>
          </div>
          <div className="flex flex-col items-center mt-[140px] gap-5 w-[400px] ">
            <div className="flex flex-col  items-center gap-5">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex justify-center items-center">
                <img src="money.svg" className="w-14" alt="" />
              </div>
              <h1 className=" text-white text-3xl">Set up your cash Balance</h1>
            </div>
            <label className="input input-bordered flex items-center gap-2 w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>

            <p className="text-center	">
              How much cash do you have in your wallet?
            </p>
            <button
              onClick={handleConfirm}
              href={"/goodJob"}
              className="btn  bg-blue-600 text-white w-full rounded-full"
            >
              Confirm
            </button>
          </div>
        </>
      )}
      {showBalanceSetup && (
        <>
          <div className="flex flex-col items-center gap-10 ">
            <div className="flex gap-3">
              <LogoBig />
            </div>
            <ul className="steps w-[500px]">
              <li className="step step-primary">Currency</li>
              <li className="step   step-primary">Balance</li>
              <li className="step step-primary">Finish</li>
            </ul>
          </div>
          <div className="flex flex-col items-center mt-[140px] gap-5 w-[400px] ">
            <div className="flex flex-col  items-center gap-5">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex justify-center items-center">
                <img src="check.svg" className="w-14" alt="" />
              </div>
              <h1 className=" text-white text-3xl">Good Job!</h1>
            </div>

            <p className="text-center	">
              Your very first account has been created. Now continue to
              dashboard and start tracking
            </p>
            <button
              onClick={handleClickToDashboard}
              className="btn  bg-blue-600 text-white w-full rounded-full"
            >
              Go to dashboard
            </button>
          </div>
        </>
      )}
    </div>
  );
};
