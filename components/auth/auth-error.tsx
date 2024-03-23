import { MdError } from "react-icons/md";

interface AuthErrorProps {
    message?: string,
}

export const AuthError = ({
    message
}: AuthErrorProps) => {
    if (!message) return null;

    return (
        <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
            <MdError className="h-5 w-5" />
            <p>{message}</p>
        </div>
    )
}