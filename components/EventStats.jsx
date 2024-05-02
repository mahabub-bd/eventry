const EventStats = ({ event }) => {
  return (
    <div className="text-[#737373] text-sm mt-1">
      <span>{event?.interested_ids.length} Interested</span>
      <span>{" | "}</span>
      <span>{event?.going_ids.length} Going</span>
    </div>
  );
};

export default EventStats;
