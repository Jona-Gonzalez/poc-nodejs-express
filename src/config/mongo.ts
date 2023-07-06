import mongoose from 'mongoose';

async function connectMongo() {
  try {
    const connect = await mongoose.connect(process.env.MONGO_SERVER || '', {
      dbName: 'databasenode',
    });
    console.log('Connected to mongoDB', connect.connection.host);
  } catch (error) {
    return { error };
  }
}

connectMongo();
