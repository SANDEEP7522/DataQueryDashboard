import { UpdatesData } from "@/Data/Data";
import { motion } from "framer-motion";

export const Upadate = () => {
  return (
  
      <div className="p-2">
        {UpdatesData.map((data, index) => (
          <motion.div
            key={index}
            className=" w-full flex items-center dark:bg-gray-800 p-1 rounded-lg shadow-sm transition-all hover:shadow-xl mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            {/* Profile Image */}
            <img
              src={data.img}
              alt=""
              className="w-12 h-12 rounded-full object-cover animate-ping"
            />

            {/* Update Content */}
            <div className="ml-4 flex-2">
              <p className="font-bold text-gray-900 dark:text-white">
                {data.name}
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {data.message}
              </p>
              <p className="text-xs text-gray-900 dark:text-gray-400">
                {data.time}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    
  );
};
