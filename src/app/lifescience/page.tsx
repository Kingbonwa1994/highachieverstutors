import { SubjectCard } from '@/components/ui/subject-card';
import React from 'react';

const topicsinfo = [
  {
    topicname: "DNA - Code of life",
    imagesrc: "/life/dna.svg",
    subjectpage: "maths",
    buttontext: "open"
  },
  {
    topicname: "Meiosis",
    imagesrc: "/life/meiosis.svg",
    subjectpage: "physics",
    buttontext: "open"
  },
  {
    topicname: "Reproduction in Vertebrates",
    imagesrc: "/life/vertebrata.svg",
    subjectpage: "lifescience",
    buttontext: "open"
  },
  {
    topicname: "Human Reproduction",
    imagesrc: "/life/reproduce.svg",
    subjectpage: "accounting",
    buttontext: "open"
  },
  {
    topicname: "Genetics",
    imagesrc: "/life/genetics.svg",
    subjectpage: "coding",
    buttontext: "open"
  },
  {
    topicname: "Sensitivity - Human",
    imagesrc: "/life/temperature.svg",
    subjectpage: "maths",
    buttontext: "open"
  },
  {
    topicname: "Human Endocrine System",
    imagesrc: "/life/gland.svg",
    subjectpage: "physics",
    buttontext: "open"
  },
  {
    topicname: "Homeostasis - Humans",
    imagesrc: "/life/homeostasis.svg",
    subjectpage: "lifescience",
    buttontext: "open"
  },
  {
    topicname: "Sensitivity - Plants",
    imagesrc: "/life/sensitiveplant.svg",
    subjectpage: "accounting",
    buttontext: "open"
  },
  {
    topicname: "Evolution",
    imagesrc: "/life/evolution.svg",
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
