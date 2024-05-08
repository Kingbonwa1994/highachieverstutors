import { SubjectCard } from '@/components/ui/subject-card';
import React from 'react';

const topicsinfo = [
  {
    topicname: "Design, Icons & Prototype",
    imagesrc: "/code/figma.svg",
    subjectpage: "maths",
    buttontext: "open"
  },
  {
    topicname: "HTML-Web block",
    imagesrc: "/code/html.svg",
    subjectpage: "physics",
    buttontext: "open"
  },
  {
    topicname: "CSS-TailwindCSS",
    imagesrc: "/code/tailwindcss.svg",
    subjectpage: "lifescience",
    buttontext: "open"
  },
  {
    topicname: "TypeScript",
    imagesrc: "/code/typescript.svg",
    subjectpage: "accounting",
    buttontext: "open"
  },
  {
    topicname: "React",
    imagesrc: "/code/react.svg",
    subjectpage: "coding",
    buttontext: "open"
  },
  {
    topicname: "Node.js",
    imagesrc: "/code/node.svg",
    subjectpage: "maths",
    buttontext: "open"
  },
  {
    topicname: "Express.js",
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
    topicname: "DBs - MongoDB",
    imagesrc: "/code/mongodb.svg",
    subjectpage: "accounting",
    buttontext: "open"
  },
  {
    topicname: "Production App",
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
