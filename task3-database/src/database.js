const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'movie';
const collectionName = 'movies';
const movieSchema = {
  title: String,
  director: String,
  releaseYear: Number,
  genre: String
};
async function main() {
  try {
    await client.connect();
    console.log('Connected successfully to server');
    
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const newMovies = [
        {
          title: 'Inception',
          director: 'Christopher Nolan',
          releaseYear: 2010,
          genre: 'Science Fiction'
        },
        {
          title: 'The Matrix',
          director: 'Lana Wachowski, Lilly Wachowski',
          releaseYear: 1999,
          genre: 'Science Fiction'
        },
        {
          title: 'Interstellar',
          director: 'Christopher Nolan',
          releaseYear: 2014,
          genre: 'Science Fiction'
        },
        {
          title: 'The Dark Knight',
          director: 'Christopher Nolan',
          releaseYear: 2008,
          genre: 'Action'
        },
        {
          title: 'Pulp Fiction',
          director: 'Quentin Tarantino',
          releaseYear: 1994,
          genre: 'Crime'
        }
      ];
    const insert = await collection.insertOne(newMovie);
    console.log('Inserted movie:', insert.insertedId);
    const movieTitle = 'Inception';
    const foundMovie = await collection.findOne({ title: movieTitle });
    console.log('Found movie:', foundMovie);
    const updatedDirector = 'Nolan';
    const update = await collection.updateOne(
      { title: movieTitle },
      { $set: { director: updatedDirector } }
    );
    console.log('Updated movie count:', update.modifiedCount);
    const delRes = await collection.deleteOne({ title: movieTitle });
    console.log('Deleted movie count:', delRes.deletedCount);

  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

main().catch(console.error);
