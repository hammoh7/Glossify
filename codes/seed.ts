import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
    try {
        console.log("Connecting to MongoDB...");

        // Clear the existing data
        await prisma.courses.deleteMany();
        await prisma.userProgress.deleteMany();

        await prisma.courses.createMany({
            data: [
                {
                    id: String(1),
                    title: "Japanese",
                    imageSrc: "/images/jap.png"
                },
                {
                    id: String(2),
                    title: "Germany",
                    imageSrc: "/images/ger.png"
                },
                {
                    id: String(3),
                    title: "France",
                    imageSrc: "/images/fra.png"
                }
            ]
        });
        
        console.log("Seeding finished");
    } catch (error) {
        console.error(error);
        throw new Error("Failed to seed the database");
    } finally {
        await prisma.$disconnect(); 
    }
};

main();

