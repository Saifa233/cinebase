import { pgTable, serial, varchar, text, integer, decimal } from 'drizzle-orm/pg-core';

// Define the 'movies' table
export const movies = pgTable('movies', {
  id: text('id').primaryKey(),
  titleId: varchar('title_id', { length: 50 }).notNull(),
  title: text('title').notNull(),
  titleType: varchar('title_type', { length: 50 }),
  image: text('image'), 
  releaseYear: integer('release_year'),
  rating: decimal('rating', { precision: 3, scale: 1 }),
  certificate: varchar('certificate', { length: 20 }),
  genres: varchar('genres', { length: 255 }),
  description: text('description'), 
  voteCount: text('vote_count'), 
  duration: text('duration'),
});

// Infer the types for the 'movies' table
export type Movie = typeof movies.$inferSelect; // Type for SELECT queries
export type NewMovie = typeof movies.$inferInsert; // Type for INSERT queries