"use client";

import { Challenges } from "@prisma/client";
import { useState } from "react";
import { Header } from "./header";

interface QuizProps {
  initialLessonId: string;
  initialPercentage: number;
  initalHearts: number;
  initialLessonChallenges: Challenges[];
  userSubscription: any;
}

export const Quiz = ({
  initialLessonId,
  initialPercentage,
  initalHearts,
  initialLessonChallenges,
  userSubscription,
}: QuizProps) => {
  const [hearts, setHearts] = useState(initalHearts);
  const [percentage, setPercentage] = useState(initialPercentage);

  return (
    <>
      <Header
        hearts={hearts}
        percentage={percentage}
        hasActiveSubscription={!!userSubscription?.isActive}
      />
    </>
  );
};
