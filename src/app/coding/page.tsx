import { SubjectCard } from '@/components/ui/subject-card';
import React from 'react';

const topicsinfo = [
  {
    topicname: "Design, Icons",
    imagesrc: "/code/figma.svg",
    subjectpage: "maths",
    buttontext: "open"
  },
  {
    topicname: " - Web block",
    imagesrc: "/code/html.svg",
    subjectpage: "physics",
    buttontext: "open"
  },
  {
    topicname: "TailwindCSS",
    imagesrc: "/code/tailwindcss.svg",
    subjectpage: "lifescience",
    buttontext: "open"
  },
  {
    topicname: "TypeScript.ts",
    imagesrc: "/code/typescript.svg",
    subjectpage: "accounting",
    buttontext: "open"
  },
  {
    topicname: "React.tsx/.jsx",
    imagesrc: "/code/react.svg",
    subjectpage: "coding",
    buttontext: "open"
  },
  {
    topicname: "- Talk to DB",
    imagesrc: "/code/node.svg",
    subjectpage: "maths",
    buttontext: "open"
  },
  {
    topicname: " *Spin Server",
    imagesrc: "/code/express.svg",
    subjectpage: "physics",
    buttontext: "open"
  },
  {
    topicname: "RESTful APIs",
    imagesrc: "/code/rest.svg",
    subjectpage: "lifescience",
    buttontext: "open"
  },
  {
    topicname: "- MongoDB",
    imagesrc: "/code/mongodb.svg",
    subjectpage: "accounting",
    buttontext: "open"
  },
  {
    topicname: "FullStack ",
    imagesrc: "/code/next.svg",
    subjectpage: "coding",
    buttontext: "open"
  }
];


function Page() {
  
  
  return (
    <div className='flex flex-col items-center pt-4 h-screen'>
      <div className='text-center text-2xl'>Physical Sciences Mastery</div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
      {topicsinfo.map(topic => (
        <SubjectCard
          key={topic.topicname}
          subjectName={topic.topicname}
          imageSrc={topic.imagesrc}
          subjectPage={topic.subjectpage}     
        />
      ))}
      </div>
    
    </div>
  );
}

export default Page;
