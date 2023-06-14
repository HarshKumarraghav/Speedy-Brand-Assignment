import Header from "../Components/Navigation/Header"
import Sidebar from "../Components/Navigation/Sidebar"
import WriteTopicUI from "../Components/EditorPage/WriteTopicUI"
const WriteTopic = () => {
  return (
    <>
    <div className="flex flex-col h-screen bg-slate-50">
      <div className="flex-1 flex">
        <Sidebar />
        <main className="flex-1 bg-background ">
          <Header />
          <div>
           <WriteTopicUI />
          </div>
        </main>
      </div>
    </div>
  </>
  )
}

export default WriteTopic