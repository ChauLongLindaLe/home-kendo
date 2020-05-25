import fs from "fs";
import { v4 as uuidv4 } from "uuid";

let inMemoryStore;
const filename = process.env.STORAGE_FILE;

function writeToFile() {
  if (filename) {
    fs.writeFileSync(filename, JSON.stringify(inMemoryStore), "utf8");
  }
}

function loadData() {
  if (!inMemoryStore) {
    let data;
    try {
      if (filename) data = fs.readFileSync(filename, "utf8");

      if (data) {
        inMemoryStore = JSON.parse(data);
      } else inMemoryStore = {};
    } catch (err) {
      if (err.message.includes("no such file or directory")) {
        fs.writeFileSync(filename, "", "utf8");
        inMemoryStore = {};
      }
    }
  }
  return inMemoryStore;
}

export default function TrainingSessionRepository() {}

TrainingSessionRepository.prototype = {
  findAll() {
    const sessions = [];
    Object.entries(loadData()).forEach(([id, value]) => {
      sessions.push({ ...value, id });
    });
    return sessions;
  },
  delete(id) {
    const sessions = loadData();
    delete sessions[id];

    const dataToWrite = JSON.stringify(sessions);
    writeToFile(dataToWrite);
  },
  create(trainingSession) {
    const sessions = loadData();
    const id = uuidv4();
    const sessionWithId = { ...trainingSession, id };

    sessions[id] = trainingSession;
    writeToFile(JSON.stringify(sessions));
    return sessionWithId;
  },
  find(id) {
    const sessions = loadData();

    if (!sessions[id]) return undefined;

    return this.formatSession(id, sessions[id]);
  },
  formatSession(id, data) {
    return { ...data, id };
  },
  reset() {
    inMemoryStore = undefined;
  },
};
