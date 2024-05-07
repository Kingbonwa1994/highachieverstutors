import { BackgroundGradientDemo } from "@/components/ui/subject-card";

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
    subjectname: "Accounting & Fin",
    imagesrc: "accounting.svg",
    subjectpage: "accounting"
  },
  {
    subjectname: "Coding & Design",
    imagesrc: "coding.svg",
    subjectpage: "coding"
  }
];


export default function Home() {
  return (
    <main className="h-screen flex flex-col mt-16 bg-background justify-center items-center  px-24 py-12">
      <p className="mt-16 text-3xl sm:mt-16  text-teal-300 text-clip text-balance">High Achivers Tutors</p>
      {subjectsinfo.map(subject => (
        <BackgroundGradientDemo
          key={subject.subjectname}
          subjectname={subject.subjectname} 
          imagesrc={subject.imagesrc}
          subjectpage={subject.subjectpage}       
        />
      ))}
    </main>
  );
}
