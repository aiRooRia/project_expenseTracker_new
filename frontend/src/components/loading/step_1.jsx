import Link from "next/link";
import { LogoBig } from "@/components/export/export";
import { useRouter } from "next/router";
export const StepOne = () => {
  const { push } = useRouter();
  const handleClick = () => {
    push("/stepTwo");
  };
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
          transaction in other currencies will be calculated based on this one{" "}
        </p>
        <button className="btn  bg-blue-600 text-white w-full rounded-full">
          Confirm
        </button>
      </div>
    </div>
  );
};
