import { motion } from "framer-motion";
import workshopCalendar from "../assets/workshop_calendar.png";
import workshopProgramming from "../assets/workshop_programming.png";

const Workshops = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#e3dacc" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="space-y-6">
            <motion.img
              src={workshopCalendar}
              alt="Workshop Calendar"
              className="w-full "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            />

            <motion.img
              src={workshopProgramming}
              alt="Workshop Programming"
              className="w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Workshops;
