import Link from "next/link";
import { Context, LogoBig } from "@/components/export/export";
import { useContext } from "react";

export const StepOne = () => {
  const { signUpUserInfo, setSignUpUserInfo } = useContext(Context);

  const handleChange = (event) => {
    const { value } = event.target;

    setSignUpUserInfo({
      ...signUpUserInfo,
      currencyType: value,
    });
  };

  return (
    <>
      <div className="flex flex-col  items-center gap-5">
        <div className="w-20 h-20 bg-blue-600 rounded-full flex justify-center items-center">
          <img src="money.svg" className="w-14" alt="" />
        </div>
        <h1 className=" text-white text-3xl">Select base currency</h1>
      </div>
      <select
        onChange={handleChange}
        value={signUpUserInfo.currencyType}
        className="select select-bordered w-full max-w-xs"
      >
        <option value="MNT" defaultValue>MNT - Mongolian currency</option>
        <option value="USD">USD - United State currency</option>
      </select>

      <p className="text-center	">
        Your base currency should be the one you use most often. All transaction
        in other currencies will be calculated based on this one{" "}
      </p>
    </>
  );
};
