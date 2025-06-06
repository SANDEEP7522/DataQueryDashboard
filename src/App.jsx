import "./App.css";
import MainDash from "./components/MainDash/MainDash";
import { RightSidebar } from "./components/RightSidebar/RightSidebar";
import LeftSidebar from "./components/Sidebar/LeftSidebar";

function App() {
  return (
<div className="min-h-screen bg-gradient-to-r from-purple-300 via-pink-300 to-yellow-100 flex justify-center items-center p-2">
  <div
    className="container mx-auto p-2 flex flex-col w-full  
               bg-white/30 backdrop-blur-lg border border-white/20 shadow-lg rounded-lg"
  >
    {/* Grid Layout */}
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-12 gap-4 w-full">
      {/* Left Sidebar */}
      <div className="sm:col-span-12 md:col-span-3 p-4 bg-purple-300 text-white rounded-lg shadow-md">
        <LeftSidebar />
      </div>

      {/* Center Content */}
      <div className="sm:col-span-12 md:col-span-6 p-4 bg-pink-300 text-white rounded-lg shadow-md">
        <MainDash />
      </div>

      {/* Right Sidebar */}
      <div className="sm:col-span-12 md:col-span-3 p-4 bg-yellow-300 text-white rounded-lg shadow-md">
        <RightSidebar />
      </div>
    </div>
  </div>
</div>


  );
}

export default App;
