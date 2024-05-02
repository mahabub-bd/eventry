import { eventModel } from "@/models/event-models";
import { userModel } from "@/models/user-models";
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

async function createUser(user) {
  await dbConncect();
  return await userModel.create(user);
}

async function findUserByCredentials(credentials) {
  const user = await userModel.findOne(credentials).lean();
  if (user) {
    return replaceMongoIdInObject(user);
  }
  return null;
}

export { createUser, findUserByCredentials, getAllEvents, getEventById };
