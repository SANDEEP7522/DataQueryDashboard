// import { CardsData } from "@/Data/Data";

// import { motion } from "framer-motion";

// import Card from "./Card";

// export const Cards=() => {
//   return (
//     <motion.div 
//       className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-center p-4"
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, ease: "easeOut" }}
//     >
//       {CardsData.map((card, id) => (
//         <motion.div
//           key={id}
//           whileHover={{ scale: 1.05 }}
//           transition={{ type: "spring", stiffness: 200 }}
//         >
//           <Card
//             title={card.title}
//             color={card.color}
//             icon={card.icon}
//             barValue={card.barValue}
//             value={card.value}
//             png={card.png}
//             series={card.series}
//           />
//         </motion.div>
//       ))}
//     </motion.div>
//   );
// }
