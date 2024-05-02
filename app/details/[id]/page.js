import EventDetails from "@/components/details/EventDetails";
import EventVenue from "@/components/details/EventVenue";
import HeroSection from "@/components/details/HeroSection";
import { getEventById } from "@/db/queries";
import { dbConncect } from "@/services/mongo";

export default async function EventDetailsPage({ params: { id } }) {
  await dbConncect();
  const eventInfo = await getEventById(id);

  return (
    <>
      <HeroSection eventInfo={eventInfo} />

      <section className="container">
        <div className="grid grid-cols-5 gap-12 my-12">
          <EventDetails eventInfo={eventInfo} />
          <EventVenue eventInfo={eventInfo} />
        </div>
      </section>
    </>
  );
}
