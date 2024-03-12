import Heroimg from "../imges/Content Image 02.png";

export const Hero = () => {
  return (
    <>
      <div className="mt-[10%] sm:flex sm:justify-around align-middle ">
        <div>
          <img
            src={Heroimg}
            alt=""
            className="sm:w-[90%] w-[60%] mt-[10%] sm:mt-0 ml-[17%] sm:ml-0"
          />
        </div>

        <div className="sm:align-middle sm:mt-[5%] text-center sm:text-left mt-[10%] ">
          <h1 className=" text-3xl font-extrabold sm:text-5xl">
            Subscription index
          </h1>
          <br />
          <span className="sm:text-xl text-sm  ">
            A daily dataset to keep you up to date on
            <br />
            subscription market trends and whats happening in
            <br />
            your vertical.
          </span>
          <br />
          <div className="text-xl mt-[10%] text-[#5454D4]">
            <span className="text-xl mt-[20%] text-[#5454D4]">Learn more</span>
          </div>
        </div>
      </div>
    </>
  );
};
