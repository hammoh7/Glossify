import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  try {
    console.log("Connecting to MongoDB...");

    // Clear the existing data
    await prisma.courses.deleteMany();
    await prisma.userProgress.deleteMany();
    await prisma.units.deleteMany();
    await prisma.lessons.deleteMany();
    await prisma.challenges.deleteMany();
    await prisma.challengeOption.deleteMany();
    await prisma.challengeProgress.deleteMany();

    await prisma.courses.createMany({
      data: [
        {
          id: String(1),
          title: "Japanese",
          imageSrc: "/images/jap.png",
        },
        {
          id: String(2),
          title: "German",
          imageSrc: "/images/ger.png",
        },
        {
          id: String(3),
          title: "French",
          imageSrc: "/images/fra.png",
        },
      ],
    });

    await prisma.units.create({
      data: {
        id: String(1),
        courseId: String(1),
        title: "Unit 1",
        description: "Introduction to Japanese",
        order: 1,
      },
    });

    await prisma.lessons.createMany({
      data: [
        {
          id: String(1),
          unitId: String(1),
          order: 1,
          title: "Language Introduction",
        },
        {
          id: String(2),
          unitId: String(1),
          order: 2,
          title: "Alphabets",
        },
      ],
    });

    await prisma.challenges.createMany({
      data: [
        {
          id: String(1),
          lessonId: String(1),
          type: "SELECT",
          order: 1,
          question: "What is Japan called in Japanese?",
        },
        {
          id: String(2),
          lessonId: String(2),
          type: "SELECT",
          order: 2,
          question: "What are 2 basic scripts of Japanese languages called?",
        },
      ],
    });

    await prisma.challengeOption.createMany({
      data: [
        {
          id: String(1),
          challengeId: String(1),
          correct: true,
          text: "Nihon 日本",
          imageSrc: "/images/char1.jpeg",
        },
        {
          id: String(2),
          challengeId: String(2),
          correct: true,
          text: "Hiragana and Katakana",
          imageSrc: "/images/char2.jpeg",
        }
      ]
    })

    console.log("Seeding finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed the database");
  } finally {
    await prisma.$disconnect();
  }
};

main();
