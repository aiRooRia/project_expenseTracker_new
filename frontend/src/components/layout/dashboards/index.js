import {
  NavBar,
  Card,
  IncomeCard,
  TotalExpenses,
  GraphicBox01,
  GraphicBox02,
  LastRecords,
  ModalAdd,
} from "@/components/export/export";
import { Fragment, useState } from "react";

export const Dashboard = () => {
  const [showAdd, setShowAdd] = useState(false);
  return (
    <Fragment>
      {" "}
      <div>
        <div className="flex justify-center w-screen">
          <div className="w-[1440px] flex ">
            <NavBar setShowAdd={setShowAdd} />
          </div>
        </div>
        <div className="bg-[#191b1d] h-screen flex justify-center">
          <div className="w-[1440px] mt-10 flex flex-col gap-7">
            <div className="flex justify-between">
              <Card></Card>
              <IncomeCard />
              <TotalExpenses />
            </div>
            <div className="flex gap-4">
              <GraphicBox01 />
              <GraphicBox02 />
            </div>
            <div>
              <LastRecords />
            </div>
          </div>
        </div>
      </div>
      <ModalAdd showAdd={showAdd} onClose={() => setShowAdd(false)}></ModalAdd>
    </Fragment>
  );
};
