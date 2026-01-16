import { motion } from "framer-motion";

const WorkshopCard = ({ event }) => {
  const eventDate = new Date(event.date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const isPast = eventDate < today;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      // Increased padding to p-6 and min-height for a "bigger" feel
      className={`flex items-center p-6 min-h-[140px] bg-[#f9f7f2] rounded-2xl shadow-sm border border-transparent transition-all 
        ${isPast ? "grayscale opacity-50 pointer-events-none" : "hover:shadow-lg hover:border-gray-200"}`}
    >
      {/* Scaled Up Image Container */}
      <div className="w-24 h-24 rounded-2xl flex-shrink-0 overflow-hidden">
        <img 
          src={event.image} 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Content with larger font sizes */}
      <div className="ml-6 text-left">
        <p className="text-sm font-bold text-black opacity-80 uppercase tracking-tight">
          {event.displayDate}, {event.time}
        </p>
        <a 
          href={event.link} 
          className={`block text-xl font-medium leading-tight mt-2 decoration-1 underline-offset-4 
            ${isPast ? "no-underline" : "underline hover:text-coral"}`}
        >
          {event.title}
        </a>
        <span className="text-sm text-gray-500 block mt-2 italic font-serif">
          Recording
        </span>
      </div>
    </motion.div>
  );
};

export default WorkshopCard;