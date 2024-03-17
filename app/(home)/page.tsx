import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-col">
        <div className="flex items-center border shadow-md p-5 bg-indigo-100 text-violet-700 rounded-2xl">
          <Languages className="h-8 w-8" />
          Glossify | Language Learning App made for you!
        </div>
        <h1 className="text-3xl md:text-4xl items-center text-center text-zinc-700 m-5 font-extrabold font-sans">
          Glossify | Learn any Language from anywhere
        </h1>
        <div className="text-md md:text-lg items-center text-center text-zinc-500">
          <p className="pt-1 pl-2 pr-2 text-blue-950 rounded-t-md">
            Learn any Language around the world in an interactive way
          </p>
          <p className="pb-1 pl-2 pr-2 text-blue-950 rounded-b-md">
            Start learning language with Glossify!
          </p>
        </div>
      </div>
      <div className="text-sm md:text-md text-zinc-800 mt-5 max-w-sm md:max-w-xl text-center mx-auto">
        Welcome to Glossify, where learning languages feels like playtime! With our gamified approach, 
        bite-sized lessons, and personalized experience, fluency is just a tap away. 
        Join our community of language enthusiasts and start your adventure today!
      </div>
      <Button size="lg" className="mt-5 text-md" asChild>
        <Link href="/login">
            Start for Free
        </Link>
      </Button>
    </div>
  );
};

export default Home;
