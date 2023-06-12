import { IoIosArrowDropright } from "react-icons/io";
import { Categories } from "../../Data/Data";
const DashboardUI = () => {
  return (
    <div className="w-full h-full p-5">
      <h1 className="text-xl md:text-3xl font-bold">Categories</h1>
      <div className="flex w-full h-full justify-center mt-8">
        <div className="w-full md:w-11/12 h-full bg-white shadow-md rounded-md overflow-x-auto">
          <div className="flex flex-wrap justify-between items-center md:h-16 px-2 border-b-2">
            <div className="flex w-full md:w-2/4 justify-between">
              {Categories.map((category, i) => (
                <div
                  key={i}
                  className="flex w-full md:w-auto md:flex-initial gap-x-2 bg-red-500 items-center text-lg font-semibold justify-center py-2 px-4"
                >
                  <p>{category}</p>
                </div>
              ))}
            </div>
            <button className="flex px-4 p-2 rounded-lg bg-primary shadow-md items-center gap-x-2 text-xl text-white hover:scale-105 transition-all ease-in-out mt-4 md:mt-0">
              <p>Add Topic</p> <IoIosArrowDropright />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardUI;
