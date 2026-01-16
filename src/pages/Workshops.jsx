import { motion } from "framer-motion";
import WorkshopCard from "../components/WorkshopCard";
import { EVENTS } from "../lib/events";

const Workshops = () => {
  return (
    <div className="min-h-screen bg-[#e8e2d6] py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="flex justify-between items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-6xl font-serif tracking-tight text-[#1a1a1a]">
            Workshop calendar
          </h1>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {EVENTS.map((event, index) => (
            <WorkshopCard key={`event-${index}-${event.title}`} event={event} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Workshops;