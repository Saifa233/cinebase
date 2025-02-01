"use server"

import { getAllTitles, getTvShows, searchTitles, } from "@/db/queries/select";

export async function fetchTVShows() {
    const result = await getTvShows();
    return result;
}

export async function fetchAllTitles() {
    const result = await getAllTitles();
    return result;
}

export async function searchTitlesAction(query : string) {
    const result = await searchTitles(query);
    return result
}