import icon1 from "../imges/Icon 001.png";
import icon2 from "../imges/Icon 002.png";
import icon3 from "../imges/Icon 003.png";

export const Cards = () => {
  return (
    <>
      <div className="sm:flex sm:justify-around text-center mt-[10%]">
        <div className="mt-[10%] sm:mt-0">
          <img
            src={icon1}
            alt=""
            className="text-center  w-[50%]   sm:w-[71%] sm:ml-[20%]   ml-[28%]"
          />
          <h1 className="font-extrabold text-2xl">Benchmarks</h1>
          <br />
          <span className="text-md text-center">
            See how you stack up against comparable
            <br />
            companies in similar stages.
            <br />
          </span>
        </div>

        <div className="mt-[10%] sm:mt-0">
          <img
            src={icon2}
            alt=""
            className="text-center  w-[50%]   sm:w-[71%] sm:ml-[20%]   ml-[28%]"
          />
          <h1 className="font-extrabold text-2xl">Pricing Audit</h1>
          <br />
          <span className="text-md text-center">
            Benchmark the health of your monetization
            <br />
            and pricing strategy.
            <br />
          </span>
        </div>

        <div className="mt-[10%] sm:mt-0">
          <img
            src={icon3}
            alt=""
            className="text-center  w-[50%]   sm:w-[71%] sm:ml-[20%]   ml-[28%]"
          />
          <h1 className="font-extrabold text-2xl">Retention Audit</h1>
          <br />
          <span className="text-md text-center">
            Audit where revenue leakage exists and
            <br />
            where you can increase retention.
            <br />
          </span>
        </div>
      </div>
    </>
  );
};
