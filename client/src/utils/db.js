import mongoose from 'mongoose';

const connection = {};

const connect = async () => {
  if (connection.isConnected) {
    console.log('aready connected');
    return;
  }
  if ((await mongoose.connections.length) > 0) {
    connection.isConnected = await mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      console.log('use previous connection');
    }
    await mongoose.disconnect();
  }
  const db = mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('new connection');
  connection.isConnected = (await db).connections[0].readyState;
};

const disConnect = async () => {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === 'production') {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log('not disconnected');
    }
  }
};

function convertDocToObj(doc) {
  doc._id = doc._id.toString();
  doc.createdAt = doc.createdAt.toString();
  doc.updatedAt = doc.updatedAt.toString();
  return doc;
}

const db = { connect, disConnect, convertDocToObj };

export default db;
