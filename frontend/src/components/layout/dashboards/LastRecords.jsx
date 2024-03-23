import { Records } from "./Records";
export const LastRecords = () => {
  return (
    <div className="bg-[#1d232a] rounded-xl">
      <div className="p-5 border-b-2 text-white border-[#191b1d]">
        <h1>Last Records</h1>
      </div>
      <div className="p-4 flex flex-col gap-3">
        <Records />
        <Records />
        <Records />
        <Records />
        <Records />
        <Records />
        <Records />
        <Records />
        <Records />
      </div>
    </div>
  );
};
