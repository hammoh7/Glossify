import { database } from "@/lib/database";
import { cache } from "react";

export const getCourses = cache(async () => {
    const data = await database.courses.findMany();
    return data;
})
