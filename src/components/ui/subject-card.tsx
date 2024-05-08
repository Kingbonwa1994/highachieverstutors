"use client"
import React from 'react';
import { BackgroundGradient } from '../ui/background-gradient';
import Image from 'next/image';
import { useTutorClassesStore } from './../../store/index';
import { useRouter } from 'next/navigation';

interface SubjectCardProps {
  subjectName: string;
  imageSrc: string;
  subjectPage: string;
  onClick?: () => void; 
}

export const SubjectCard: React.FC<SubjectCardProps> = ({
  subjectName,
  imageSrc,
  subjectPage,
  onClick
}) => {
  const setSelectedSubject = useTutorClassesStore((state) => state.setSelectedSubject);
  const setSelectedTopic = useTutorClassesStore((state) => state.setSelectedTopic);


    const router = useRouter()
    const handleClick = () => {
    setSelectedSubject(subjectName);
    setSelectedTopic('')
     router.push(subjectPage)
  };

  return (
    <div className="">
      <button onClick={onClick} className="mt-4 hover:translate-x-1 flex items-center justify-between w-full">
        <BackgroundGradient className=" rounded-[22px] max-w-sm flex my-4  p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <Image src={imageSrc} alt="" height="40" width="60" className="object-contain" />
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            {subjectName}
          </p>
        </BackgroundGradient>
      </button>
     
    </div>
  );
};
