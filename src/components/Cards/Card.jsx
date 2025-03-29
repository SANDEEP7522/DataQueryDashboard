import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ApexChart from "./ApexChart";

const Card = ({ param }) => {
  const [expanded, setExpanded] = useState(false);
  console.log(param);

  return (
    <>
      {/* Ensure only one modal opens */}
      <AnimatePresence>
        {expanded && (
          <ExpandedCard param={param} toggleExpand={() => setExpanded(false)} />
        )}
      </AnimatePresence>

      {/* Compact Card always visible */}
      <CompactCard param={param} toggleExpand={() => setExpanded(true)} />
    </>
  );
};

function CompactCard({ param, toggleExpand }) {
  if (!param) return null; // Ensure param is defined

  const Png = param.icon;

  return (
    <div className="w-full ">
      <motion.div
        layout
        className="relative flex items-center p-4 rounded-lg cursor-pointer shadow-lg text-white transition-all w-full sm:w-50"
        style={{
          background: param.color.backGround,
          boxShadow: param.color.boxShadow,
        }}
        onClick={toggleExpand}
        whileHover={{ scale: 1.05 }}
      >
        {/* Circular Progress Bar */}
        <div className="w-20 h-20 md:w-20 md:h-24 mb-3">
          <CircularProgressbar
            value={param.barValue || 0}
            text={`${param.barValue || 0}%`}
            strokeWidth={12}
            styles={buildStyles({
              textSize: "16px",
              pathColor: "#4CAF00",
              textColor: "#000",
              trailColor: "#00d23d",
              backgroundColor: "#fff",
            })}
          />
          <span className="text-base text-gray-900 font-semibold">
            {param.title || "N/A"}
          </span>
        </div>

        {/* Icon and Details */}
        <div className="flex flex-col items-end text-gray-600 gap-4">
          {Png && <Png size={30} />} {/* Ensure icon is not undefined */}
          <span className="text-sm font-semibold">{param.value || "0"}</span>
          <span className="text-sm opacity-80">Last 24 Hours</span>
        </div>
      </motion.div>
    </div>
  );
}

function ExpandedCard({ param, toggleExpand }) {
return (
     <motion.div
       initial={{ opacity: 0, scale: 0.8 }}
       animate={{ opacity: 1, scale: 1 }}
       exit={{ opacity: 0, scale: 0.8 }}
       transition={{ duration: 0.3, ease: "easeInOut" }}
       className="fixed inset-0 flex items-center justify-center z-50 px-4 w-full"
     >
       {/* Overlay Background (Click to Close) */}
       <div
         className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 w-full"
         onClick={toggleExpand}
       ></div>
   
       {/* Expanded Card Content */}
       <motion.div
         initial={{ y: -20, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         exit={{ y: -20, opacity: 0 }}
         transition={{ duration: 0.3, ease: "easeInOut" }}
         className="relative bg-white p-6 rounded-lg shadow-2xl text-black w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] max-w-5xl z-50"
       >
         {/* Close Button */}
         <button
           onClick={toggleExpand}
           className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition duration-200 text-xl"
         >
           ✖
         </button>
   
         <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center">
           {param.title}
         </h2>
   
         {/* Responsive Chart */}
         <div className="w-full h-[60vh] flex items-center justify-center bg-gray-100 rounded-lg">
           <ApexChart />
         </div>
   
         <p className="mt-4 text-gray-700 text-center text-sm md:text-base">
           {param.value} in the last 24 hours
         </p>
       </motion.div>
     </motion.div>
   );
   
}

export default Card;
