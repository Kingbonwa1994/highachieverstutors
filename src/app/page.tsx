"use client"
import { SubjectCard } from "@/components/ui/subject-card";
import { useTutorClassesStore } from "@/store/index"

const subjectsinfo = [
  {
    subjectname: "Pure Mathematics",
    imagesrc: "/maths.svg",
    subjectpage: "maths"
  },
  {
    subjectname: "Physical Sciences",
    imagesrc: "physics.svg",
    subjectpage: "physics"
  },
  {
    subjectname: "Life/Bio Sciences",
    imagesrc: "/lifescience.svg",
    subjectpage: "lifescience"
  },
  {
    subjectname: "Coding & Design",
    imagesrc: "coding.svg",
    subjectpage: "coding"
  }
];


export default function Home() {
  const { selectedSubject, setSelectedSubject } = useTutorClassesStore()
  
  const handleSubjectClick = (selectedSubject: string) => {
    setSelectedSubject(selectedSubject)
  }

  return (
    <main className="h-screen flex flex-col mt-16 bg-background justify-center items-center  px-24 py-12">
      <p className="mt-16 text-3xl sm:mt-16  text-teal-300 text-clip text-balance">High Achivers Tutors</p>
      {subjectsinfo.map(subject => (
        <SubjectCard
          key={subject.subjectname}
          subjectName={subject.subjectname}          
          imageSrc={subject.imagesrc}
          subjectPage={subject.subjectpage}   
          onClick={() => handleSubjectClick(subject.subjectname)}    
        />
      ))}
    </main>
  );
}
