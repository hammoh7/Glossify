import { ShieldCheck } from "lucide-react";

interface AuthSuccessProps {
    message?: string,
}

export const AuthSuccess = ({
    message
}: AuthSuccessProps) => {
    if (!message) return null;

    return (
        <div className="bg-green-200/90 p-3 rounded-md flex items-center gap-x-2 text-sm text-green-700">
            <ShieldCheck className="h-5 w-5" />
            <p>{message}</p>
        </div>
    )
}