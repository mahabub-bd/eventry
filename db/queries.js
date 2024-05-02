import { eventModel } from "@/models/event-models";
import { dbConncect } from "@/services/mongo";
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/data-util";

async function getAllEvents() {
  await dbConncect();
  const allEvents = await eventModel.find().lean();
  return replaceMongoIdInArray(allEvents);
}

async function getEventById(eventId) {
  await dbConncect();
  const event = await eventModel.findById(eventId).lean();
  return replaceMongoIdInObject(event);
}

export { getAllEvents, getEventById };
