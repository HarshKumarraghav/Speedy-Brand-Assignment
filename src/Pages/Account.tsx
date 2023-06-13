import Sidebar from "../Components/Navigation/Sidebar";
import Header from "../Components/Navigation/Header";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const Router = useNavigate();
  return (
    <>
      <div className="flex flex-col h-screen bg-slate-50">
        <div className="flex-1 flex">
          <Sidebar />
          <main className="flex-1 bg-background ">
            <Header />
            <div className="w-full h-5/6 flex justify-center items-center">
              <div className="w-2/6 h-44 bg-white shadow-md flex flex-col  items-center p-4 justify-around">
                <h1>Are you sure you want to logout form your account?</h1>
                <div className="flex justify-center items-center gap-x-4">
                  <button
                    className="w-20 h-10 bg-primary text-white rounded-md shadow-md"
                    onClick={() => {
                      Router("/");
                    }}
                  >
                    Yes
                  </button>
                  <button
                    className="w-20 h-10 bg-gray-300  rounded-md shadow-md"
                    onClick={() => {
                      Router("/dashboard");
                    }}
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Account;
