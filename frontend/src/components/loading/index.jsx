import React, { useContext, useEffect, useState } from "react";
import { Context } from "../utils/contex";
import { StepOne, StepTwo, StepThree } from "@/components/export/loading";
import { LogoBig } from "../export/export";
import { useRouter } from "next/router";
export const Loading = () => {
  const { push } = useRouter();
  const { isLoading, startLoading, setSignUpUserInfo, signUpUserInfo } =
    useContext(Context);
  const [currentStep, setCurrentStep] = useState(0);
  const confirm = async () => {
    if (currentStep === 0) {
      setCurrentStep(currentStep + 1);
      console.log(signUpUserInfo, "signUpUserInfo");
    } else if (currentStep === 1) {
      setCurrentStep(currentStep + 1);
      console.log(signUpUserInfo, "signUpUserInfo");
    } else if (currentStep === 2) {
      console.log(signUpUserInfo, "signUpUserInfo");
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_ENDPOINT}/users/signup`,
          {
            method: "POST",
            headers: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(signUpUserInfo),
          }
        );
        const response = await res.json();
      } catch (error) {
        console.log(error);
      }
      setSignUpUserInfo({
        ...signUpUserInfo,
        name: "",
        email: "",
        password: "",
        currencyType: "MNT",
        amount: 0,
      });
      push("/");
    }
  };
  useEffect(() => {
    startLoading();
  }, []);

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
        {currentStep === 0 && <StepOne></StepOne>}
        {currentStep === 1 && <StepTwo></StepTwo>}
        {currentStep === 2 && <StepThree></StepThree>}
        <button
          onClick={confirm}
          className="btn  bg-blue-600 text-white w-full rounded-full"
        >
          Confirm
        </button>{" "}
      </div>
    </div>
  );
};
