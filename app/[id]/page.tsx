import Image from "next/image";
import { getTitleById } from "@/db/queries/select";

export default async function Page({
    params,
    } : {
        params : Promise <{id : string}>;
    }) {

        const { id } = await params;
        const movie = await getTitleById(id);
        const movieData = movie[0];
        
        return <div className = "mx-auto my-20">
        <section className="image-grid md:px-4 ml-40">
            <div className="flex items-center">
                {movieData.image && ( <div 
                    key = {movieData.id}
                    className="rounded-lg overflow-clip group cursor-pointer aspect-[2/3]">
                    <Image
                        priority={true}
                        quality={10}
                        src = {movieData.image}
                        alt = {movieData.title}
                        width={500}
                        height = {500}
                    />
                </div>
                )}

                <div className="flex flex-col w-1/2 p-4 mx-8 space-y-8">
                    <h1 className= "lg:text-8xl md:text-4xl font-bold">{movieData.title}</h1>
                    <div className="flex flex-row rounded-md bg-white/10 p-2 gap-6">
                        {movieData.rating && (
                            <p className="text-lg">{movieData.rating}</p>
                        )}
                        {movieData.releaseYear && (
                            <p className="text-lg">{movieData.releaseYear}</p>
                        )}
                        {movieData.certificate && (
                            <p className="text-lg">{movieData.certificate}</p>
                        )}
                        {movieData.genres && (
                            <p className="text-lg">{movieData.genres}</p>
                        )}
                        {movieData.duration && (
                            <p className="text-lg">{movieData.duration}</p>
                        )}
                    </div>
                    {movieData.description && (
                    <p className="text-xl">{movieData.description}</p>
                )}
                </div>
            </div>
    </section>
    </div>
}