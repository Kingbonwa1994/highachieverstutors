import { SubjectCard } from '@/components/ui/subject-card';
import React from 'react';
import { useTutorClassesStore } from "@/store/index"
import composeWhatsAppMessage from '@/components/send-whatsapp';


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
  
  const { selectedSubject, setSelectedTopic } = useTutorClassesStore();
  const handleTopicClick = (topic: string) => {
    setSelectedTopic(topic);
    const whatsappUrl = composeWhatsAppMessage(selectedSubject, topic);
    window.location.href = whatsappUrl; 
  };
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
          onClick={() => handleTopicClick(topic.topicname)}    
        />
      ))}
      </div>
    
    </div>
  );
}

export default Page;
