import logo1 from "../imges/Group(1).svg";
import logo2 from "../imges/Group(2).svg";
import logo3 from "../imges/Group(3).svg";
import logo4 from "../imges/Group(4).svg";

export const Logo = () => {
  return (
    <>
      <div className="sm:flex sm:justify-around m-[30%] sm:m-0 ">
        <div>
          <img src={logo1} alt="" className="mt-[20%] sm:mt-0" />
        </div>

        <div>
          <img src={logo2} alt="" className="mt-[20%] sm:mt-0" />
        </div>

        <div>
          <img src={logo3} alt="" className="mt-[20%] sm:mt-0" />
        </div>

        <div>
          <img src={logo4} alt="" className="mt-[20%] sm:mt-0" />
        </div>
      </div>
    </>
  );
};
