import { BiErrorCircle } from "react-icons/bi";
import { Card, CardFooter, CardHeader } from "../ui/card";
import { BackButton } from "./back-button";
import { CardWrapper } from "./card-wrapper";
import { AuthHeader } from "./header";

export const ErrorCard = () => {
  return (
    <CardWrapper headerLabel="Something went wrong!" backButtonHref="/login" backButtonLabel="Back">
      <div className="w-full flex items-center justify-center">
        <BiErrorCircle className="w-5 h-5 text-red-600" />
      </div>
    </CardWrapper>
  );
};
