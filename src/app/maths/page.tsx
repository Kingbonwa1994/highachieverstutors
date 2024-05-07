import { BackgroundGradientDemo } from '@/components/ui/subject-card';
import React from 'react';

const topicsinfo = [
  {
    topicname: "Patterns And Series",
    imagesrc: "/patterns.svg",
    subjectpage: "maths",
    buttontext: "open"
  },
  {
    topicname: "Functions & Inverse",
    imagesrc: "/functions.svg",
    subjectpage: "physics",
    buttontext: "open"
  },
  {
    topicname: "Exponential & Logs",
    imagesrc: "/log.svg",
    subjectpage: "lifescience",
    buttontext: "open"
  },
  {
    topicname: "Finance, Growth & .",
    imagesrc: "/finance.svg",
    subjectpage: "accounting",
    buttontext: "open"
  },
  {
    topicname: "Trig: Double Angles",
    imagesrc: "/trigo.svg",
    subjectpage: "coding",
    buttontext: "open"
  },
  {
    topicname: "Trig: 3-Dimensions",
    imagesrc: "/trig1.svg",
    subjectpage: "maths",
    buttontext: "open"
  },
  {
    topicname: "Differential Calculus",
    imagesrc: "/calculus.svg",
    subjectpage: "physics",
    buttontext: "open"
  },
  {
    topicname: "Analytical Geometry",
    imagesrc: "/analytics.svg",
    subjectpage: "lifescience",
    buttontext: "open"
  },
  {
    topicname: "Euclidean Geometry",
    imagesrc: "/euclid.svg",
    subjectpage: "accounting",
    buttontext: "open"
  },
  {
    topicname: "Statistics & Applied",
    imagesrc: "/statistics.svg",
    subjectpage: "coding",
    buttontext: "open"
  },
  {
    topicname: "Counting & Probability",
    imagesrc: "probability.svg",
    subjectpage: "coding",
    buttontext: "Send"
  }
];


function Page() {
  return (
    <div className='flex flex-col items-center pt-4 h-screen'>
      <div className='text-center text-2xl'>Maths Mastery by Topic</div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
      {topicsinfo.map(topic => (
        <BackgroundGradientDemo
          key={topic.topicname}
          subjectname={topic.topicname}
          imagesrc={topic.imagesrc}
          subjectpage={topic.subjectpage}     
        />
      ))}
      </div>
    
    </div>
  );
}

export default Page;
