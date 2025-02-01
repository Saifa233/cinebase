import { db } from '../index';
import { movies } from '../schema';
import { asc, desc, eq, gt, ilike, lt, sql} from "drizzle-orm";

export const getTvShows = async () => {
    const result = await db
        .select()
        .from(movies)
        .where(eq(movies.titleType, 'TV Series'))
        .orderBy(desc(movies.rating))
        .limit(10);
    return result;
};

export const getAllTitles = async () => {
    const result = await db
        .select()
        .from(movies)
        .where(gt(movies.id, '0'))
        .limit(12);
    return result;
};

export const searchTitles = async (query: string) => {
    const result = await db
        .select()
        .from(movies)
        .where(ilike(movies.title, `%${query}`))
        .orderBy(asc(movies.id))
        .limit(10);
    return result
}


export const getTitleById = async (id: string) => {
    const result = await db
        .select()
        .from(movies)
        .where(eq(movies.id, id));
    return result;
};