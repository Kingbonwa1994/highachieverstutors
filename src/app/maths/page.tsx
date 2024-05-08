"use client"
import { SubjectCard } from '@/components/ui/subject-card';
import React from 'react';
import { useTutorClassesStore } from "@/store/index"
import composeWhatsAppMessage from '@/components/send-whatsapp';


const topicsinfo = [
  {
    topicname: "Patterns And Series",
    imagesrc: "/maths/patterns.svg",
    subjectpage: "maths",
    buttontext: "open"
  },
  {
    topicname: "Functions & Inverse",
    imagesrc: "/maths/functions.svg",
    subjectpage: "physics",
    buttontext: "open"
  },
  {
    topicname: "Exponential & Logs",
    imagesrc: "/maths/log.svg",
    subjectpage: "lifescience",
    buttontext: "open"
  },
  {
    topicname: "Finance, Growth & .",
    imagesrc: "/maths/finance.svg",
    subjectpage: "accounting",
    buttontext: "open"
  },
  {
    topicname: "Trig: Double Angles",
    imagesrc: "/maths/trigo.svg",
    subjectpage: "coding",
    buttontext: "open"
  },
  {
    topicname: "Trig: 3-Dimensions",
    imagesrc: "/maths/trig1.svg",
    subjectpage: "maths",
    buttontext: "open"
  },
  {
    topicname: "Differential Calculus",
    imagesrc: "/maths/calculus.svg",
    subjectpage: "physics",
    buttontext: "open"
  },
  {
    topicname: "Analytical Geometry",
    imagesrc: "/maths/analytics.svg",
    subjectpage: "lifescience",
    buttontext: "open"
  },
  {
    topicname: "Euclidean Geometry",
    imagesrc: "/maths/euclid.svg",
    subjectpage: "accounting",
    buttontext: "open"
  },
  {
    topicname: "Statistics & Applied",
    imagesrc: "/maths/statistics.svg",
    subjectpage: "coding",
    buttontext: "open"
  },
  {
    topicname: "Counting & Probabil",
    imagesrc: "/maths/probability.svg",
    subjectpage: "coding",
    buttontext: "Send"
  }
];


function Page() {
  
  const { selectedSubject, setSelectedTopic } = useTutorClassesStore();
  const handleTopicClick = (topic: string) => {
    setSelectedTopic(topic);
    const whatsappUrl = composeWhatsAppMessage(selectedSubject, topic);
    window.location.href = whatsappUrl; // Update state with selected topic
  };

  return (
    <div className='flex flex-col items-center pt-4 h-screen'>
      <div className='text-center text-2xl'>Maths Mastery by Topic</div>
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
