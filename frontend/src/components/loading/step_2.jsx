import { LogoBig } from "../export/export";
import { useContext } from "react";
import { useRouter } from "next/router";
import { Context } from "../export/export";
export const StepTwo = () => {
  const { signUpUserInfo, setSignUpUserInfo } = useContext(Context);
  const { push } = useRouter();
  const handleChange = (event) => {
    const { value } = event.target;
    setSignUpUserInfo({
      ...signUpUserInfo,
      amount: value,
    });
  };
 
  return (
    <>
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
        <input
          onChange={handleChange}
          value={signUpUserInfo.amount}
          type="Number"
          className="grow"
          placeholder="Number"
        />
      </label>
      <p className="text-center	">How much cash do you have in your wallet?</p>
    </>
  );
};
