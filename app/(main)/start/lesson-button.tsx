"use client";

interface LessonButtonProps {
    id: String;
    index: number;
    totalCount: number;
    locked?: boolean;
    current?: boolean;
    progressPercentage: number;
}

const LessonButton = ({id, index, totalCount, locked, current, progressPercentage}: LessonButtonProps) => {
    return ( 
        <div>
            {id}
        </div>
     );
}
 
export default LessonButton;