export const Get = () => {
  return (
    <>
      <div className="mt-[10%] sm:flex justify-around">
        <div>
          <h1 className="text-4xl font-bold">
            Get the right plan
            <br />
            for future product.
          </h1>
        </div>

        <div className="flex sm:justify-between mt-[10%] sm:mt-0 justify-around">
          <div>
            <button className="w-[100px] bg-[#5454D4] h-8 text-white rounded-bl-lg">
              Yearly
            </button>
          </div>
          <div>
            <button className="background: #F7F7FB; h-8 w-[100px] rounded-bl-lg">
              Monthly
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
