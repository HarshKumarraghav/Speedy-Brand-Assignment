import Header from "../Components/Navigation/Header";
import Sidebar from "../Components/Navigation/Sidebar";
const History = () => {
  return (
    <>
      <div className="flex flex-col h-screen bg-slate-50">
        <div className="flex-1 flex">
          <Sidebar />
          <main className="flex-1 bg-background ">
            <Header />
            <div>main</div>
          </main>
        </div>
      </div>
    </>
  );
};

export default History;
