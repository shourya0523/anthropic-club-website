import WorkshopCard from "../components/WorkshopCard";
import { EVENTS } from "../lib/events";

const Events = () => {
  return (
    <div className="min-h-screen bg-[#e8e2d6] py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-16">
          <h1 className="text-6xl font-serif tracking-tight text-[#1a1a1a]">Workshop calendar</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {EVENTS.map((event, index) => (
            <WorkshopCard key={index} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;