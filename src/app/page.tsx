import { BackgroundGradientDemo } from "@/components/ui/subject-card";

const subjectsinfo = [
  {
    subjectname: "Maths",
    imagesrc: "/maths.svg",
    subjectpage: "maths"
  },
  {
    subjectname: "Physical Sciences",
    imagesrc: "physics.svg",
    subjectpage: "physics"
  },
  {
    subjectname: "Life Sciences",
    imagesrc: "/lifescience.svg",
    subjectpage: "lifescience"
  },
  {
    subjectname: "Accounting",
    imagesrc: "accounting.svg",
    subjectpage: "accounting"
  },
  {
    subjectname: "Coding",
    imagesrc: "coding.svg",
    subjectpage: "coding"
  }
];


export default function Home() {
  return (
    <main className="h-screen flex-col bg-background items-center justify-between px-24 py-12">
      <h1 className=" text-3xl">High Achivers Tutors</h1>
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
