import { SubjectCard } from '@/components/ui/subject-card';
import React from 'react';

const topicsinfo = [
  {
    topicname: "Momentum and Impulse",
    imagesrc: "/physics/momentum.svg",
    subjectpage: "maths",
    buttontext: "open"
  },
  {
    topicname: "Doppler Effect",
    imagesrc: "/physics/doppler.svg",
    subjectpage: "physics",
    buttontext: "open"
  },
  {
    topicname: "Electric Circuits",
    imagesrc: "/physics/circuit.svg",
    subjectpage: "lifescience",
    buttontext: "open"
  },
  {
    topicname: "Optical Phenomena",
    imagesrc: "/physics/optics.svg",
    subjectpage: "accounting",
    buttontext: "open"
  },
  {
    topicname: "Organic Chemistry",
    imagesrc: "/physics/organic.svg",
    subjectpage: "coding",
    buttontext: "open"
  },
  {
    topicname: "Chemical Industry",
    imagesrc: "/physics/industry.svg",
    subjectpage: "maths",
    buttontext: "open"
  },
  {
    topicname: "Reaction Rate",
    imagesrc: "/physics/reaction.svg",
    subjectpage: "physics",
    buttontext: "open"
  },
  {
    topicname: "Practical Work",
    imagesrc: "/physics/practicals.svg",
    subjectpage: "lifescience",
    buttontext: "open"
  },
  {
    topicname: "Stoichiometry",
    imagesrc: "/physics/stoichiometry.svg",
    subjectpage: "accounting",
    buttontext: "open"
  },
  {
    topicname: "Molecular Structure",
    imagesrc: "/physics/molecular.svg",
    subjectpage: "coding",
    buttontext: "open"
  },
  {
    topicname: "Geometric Optics",
    imagesrc: "/physics/geoptics.svg",
    subjectpage: "coding",
    buttontext: "Send"
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
