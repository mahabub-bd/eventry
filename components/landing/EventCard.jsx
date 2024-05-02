import { dbConncect } from "@/services/mongo";
import Image from "next/image";
import Link from "next/link";
import ActionButtons from "../ActionButtons";
import EventStats from "../EventStats";

export default async function EventCard({ event }) {
  await dbConncect();
  return (
    <div className="overflow-hidden rounded-md bg-[#242526]">
      <Image
        src={event?.imageUrl}
        alt="Event 1"
        className="w-full"
        width={500}
        height={500}
      />

      <div className="p-3">
        <Link href={`/details/${event?.id}`} className="font-bold text-lg">
          {event?.name}
        </Link>
        <p className="text-[#9C9C9C] text-sm mt-1">{event?.location}</p>
        <EventStats event={event} />

        <ActionButtons />
      </div>
    </div>
  );
}
