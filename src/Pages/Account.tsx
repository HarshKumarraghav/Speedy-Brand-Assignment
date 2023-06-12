import Sidebar from "../Components/Navigation/Sidebar";
import Header from "../Components/Navigation/Header";

const Account = () => {
  return (
    <>
      <div className="flex flex-col h-screen bg-slate-50">
        <div className="flex-1 flex">
          <Sidebar />
          <main className="flex-1 bg-background ">
            <Header />
            <div>Account</div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Account;
