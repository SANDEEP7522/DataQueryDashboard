import { CustomerReview } from "./CustomerReview";
import { Upadate } from "./Update";


export const RightSidebar = () => {
  return (
    <div >
      <div className="mb-4">
      <h2 className="flex items-center justify-center text-2xl font-semibold text-gray-900 mt-6 animate-bounce">
        Recent Updates
        <div className="w-2 h-2 bg-red-600 rounded-full ml-2 animate-ping"></div>
      </h2>
      <div className="w-[90%] h-[0.15px] bg-gray-400 rounded-full ml-2 animate-bounce" ></div>
        <Upadate />
      </div>
      <div>
        <h2 className="flex items-center justify-center text-2xl font-semibold text-gray-900 mt-6 animate-bounce">Customer Review
        <div className="w-2 h-2 bg-blue-600 rounded-full ml-2 animate-ping"></div>
        </h2>
      <div className="w-[90%] h-[0.15px] bg-gray-400 rounded-full ml-2 animate-bounce" ></div>

        <CustomerReview />
      </div>
    </div>
  );
};
