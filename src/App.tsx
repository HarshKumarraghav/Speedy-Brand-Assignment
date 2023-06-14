import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import History from "./Pages/History";
import Socails from "./Pages/Socails";
import Account from "./Pages/Account";
import Profile from "./Pages/Profile";
import Login from "./Components/Auth/Login";
import WriteTopic from "./Pages/WriteTopic";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial value

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isMobile) {
    return (
      <div className="w-screen h-screen text-center px-4 text-xl text-gray-700 flex items-center justify-center">
        <h1>
          <i>Use a laptop to view the desktop version of this site.</i>
        </h1>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/history" element={<History />} />
      <Route path="/social" element={<Socails />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/logout" element={<Account />} />
      <Route path="/writetopic/:topicid" element={<WriteTopic/>}/>
    </Routes>
  );
}

export default App;
