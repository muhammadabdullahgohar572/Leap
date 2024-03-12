import Heroim from "../imges/Content Image.png";

export const Middle = () => {
  return (
    <>
      <div className="mt-[10%] sm:flex sm:justify-around align-middle ">
        <div className="sm:align-middle sm:mt-[15%] text-center sm:text-left mt-[10%] ">
          <h1 className=" text-3xl font-extrabold sm:text-5xl">
            In-depth metrics
          </h1>
          <br />
          <span className="sm:text-xl text-sm ">
            Accurate, real-time reporting at your fingertips.
            <br />
            Getting data has never been easier.
          </span>
          <br />
          <div className="text-xl mt-[10%] text-[#5454D4]">
            <span className="text-xl mt-[20%] text-[#5454D4]">Learn more</span>
          </div>
        </div>
        <div>
          <img
            src={Heroim}
            alt=""
            className="sm:w-[90%] w-[60%] mt-[10%] sm:mt-0 ml-[20%] sm:ml-0"
          />
        </div>
      </div>
    </>
  );
};
