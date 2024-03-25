import { useState } from "react";
export const DropIcon = () => {
  const [isOpen, setIsOpen] = useState(true);
  const imageFilenames = [
    "house1.svg",
    "houseline.svg",
    "IdentificationBadge.svg",
    "IdentificationCard.svg",
    "Ladder.svg",
    "ImageSquare.svg",
  ];
  const imageFilenames2 = [
    "IntersectSquare.svg",
    "ImageSquare.svg",
    "MagnifyingGlassPlus.svg",
    "Microphone.svg",
    "MicrosoftExcelLogo.svg",
    "NotePad.svg",
  ];
  const imageFilenames3 = [
    "ListPlus.svg",
    "HourglassSimpleMedium.svg",
    "NumberFive.svg",
    "NumberCircleSeven.svg",
    "RoadHorizon.svg",
    "AnchorSimple.svg",
  ];
  const imageFilenames4 = [
    "BezierCurve.svg",
    "Exclude.svg",
    "Vignette.svg",
    "Baseball.svg",
    "Question.svg",
    "Exam.svg",
  ];
  const imageFilenames5 = [
    "Ladder.svg",
    "Watch.svg",
    "GlobeSimple.svg",
    "OrangeSlice.svg",
    "Peace.svg",
    "Pencil.svg",
  ];
  const imageFilenames6 = [
    "Ellipse 130.svg",
    "Ellipse 131.svg",
    "Ellipse 132.svg",
    "Ellipse 133.svg",
    "Ellipse 134.svg",
    "Ellipse 135.svg",
    "Ellipse 136.svg",
  ];
  return (
    <div className="relative flex flex-col items-center justify-center w-[20%] h-[50px] border-[#15803a] border-solid border-2 rounded-md   px-4">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="py-4 w-full flex items-center justify-between tracking-wider active:border-white duration-300 active:text-white "
      >
        <img src="home.svg" width={20} alt="" />
        {/* {!isOpen ? (
          <AiOutLineCaretDown className="h-[24px]"></AiOutLineCaretDown>
        ) : (
          <AiOutLineCaretUp className="h-[24px]"></AiOutLineCaretUp>
        )} */}
      </button>
      {!isOpen && (
        <div className=" absolute top-[50px] left-0 w-[300px] bg-[#1d232a] rounded-xl p-2  ">
          <div className="flex flex-col gap-2 justify-center items-center">
            <div className="flex w-full gap-2 items-center border-b-2 px-1 py-3">
              <div className="flex w-[20px]  gap-[20px]  ">
                {/* Map over the imageFilenames array to render each image */}
                {imageFilenames6.map((filename, index) => (
                  <img
                    key={index}
                    className="hover:scale-110"
                    src={filename}
                    alt=""
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-5 mt-3">
              <div className="flex w-[24px]  gap-[24px] ">
                {imageFilenames.map((filename, index) => (
                  <img
                    key={index}
                    className="hover:scale-110"
                    src={filename}
                    alt=""
                  />
                ))}
              </div>
              <div className="flex w-[24px]  gap-[24px] ">
                {imageFilenames2.map((filename, index) => (
                  <img
                    key={index}
                    className="hover:scale-110 "
                    src={filename}
                    alt=""
                  />
                ))}
              </div>
              <div className="flex w-[24px]  gap-[24px] ">
                {imageFilenames3.map((filename, index) => (
                  <img
                    key={index}
                    className="hover:scale-110"
                    src={filename}
                    alt=""
                  />
                ))}
              </div>
              <div className="flex w-[24px]  gap-[24px] ">
                {imageFilenames4.map((filename, index) => (
                  <img
                    key={index}
                    className="hover:scale-110"
                    src={filename}
                    alt=""
                  />
                ))}
              </div>
              <div className="flex w-[24px]  gap-[24px] ">
                {imageFilenames5.map((filename, index) => (
                  <img
                    key={index}
                    className="hover:scale-110"
                    src={filename}
                    alt=""
                  />
                ))}
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="264"
                height="2"
                viewBox="0 0 264 2"
                fill="none"
              >
                <path opacity="0.1" d="M0 1H264" stroke="black" />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
