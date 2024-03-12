import cnter from "../imges/Hero 3D.png";
import Down from "../imges/Down Arrow.png";
export const Center = () => {
  return (
    <>
      <div className=" sm:flex  justify-around m-[10%] mt-12 gap-28 ">
        <div>
          <h1 className="font-bold  text-4xl">
            Grow your
            <br />
            subscription
            <br />
            business
          </h1>
          <br />
          <span>
            Outcome-centered products that reduce churn,
            <br />
            optimize pricing, and grow your subscription
            <br />
            business end-to-end.
            <br />
          </span>
          <br />
          <div className="flex sm:justify-around">
            <button className="w-32 h-11 rounded-xl text-white bg-[#5454D4]">
              {" "}
              GetStarted
            </button>
            <img
              src={Down}
              alt=""
              className="sm:w-[15%] w-10  ml-[10%] sm:ml-0"
            />
          </div>
        </div>

        <div>
          <img
            src={cnter}
            alt=""
            className="sm:w-4/5 mt-[20%] w-[90%] sm:mt-0"
          />
        </div>
      </div>
    </>
  );
};
