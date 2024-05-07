import { BackgroundGradientDemo } from '@/components/ui/subject-card';
import React from 'react';

const topicsinfo = [
  {
    topicname: "Patterns & Sequences and Series",
    imagesrc: "/maths.svg",
    subjectpage: "maths",
    buttontext: "open"
  },
  {
    topicname: "Functions and Inverse Functions",
    imagesrc: "physics.svg",
    subjectpage: "physics",
    buttontext: "open"
  },
  {
    topicname: "Exponential and Logarithmic Functions",
    imagesrc: "/lifescience.svg",
    subjectpage: "lifescience",
    buttontext: "open"
  },
  {
    topicname: "Finance, Growth and Decay",
    imagesrc: "accounting.svg",
    subjectpage: "accounting",
    buttontext: "open"
  },
  {
    topicname: "Trigonometry: Compound and Decay",
    imagesrc: "coding.svg",
    subjectpage: "coding",
    buttontext: "open"
  },
  {
    topicname: "Trigonometry: Problem Solving in 2 & 3D Polynomials",
    imagesrc: "/maths.svg",
    subjectpage: "maths",
    buttontext: "open"
  },
  {
    topicname: "Differential Calculus",
    imagesrc: "physics.svg",
    subjectpage: "physics",
    buttontext: "open"
  },
  {
    topicname: "Analytical Geometry",
    imagesrc: "/lifescience.svg",
    subjectpage: "lifescience",
    buttontext: "open"
  },
  {
    topicname: "Euclidean Geometry",
    imagesrc: "accounting.svg",
    subjectpage: "accounting",
    buttontext: "open"
  },
  {
    topicname: "Statistics",
    imagesrc: "coding.svg",
    subjectpage: "coding",
    buttontext: "open"
  },
  {
    topicname: "Counting & Probability",
    imagesrc: "coding.svg",
    subjectpage: "coding",
    buttontext: "open"
  }
];


function Page() {
  return (
    <div className='flex flex-col items-center pt-4 h-screen'>
      <div className='text-center text-2xl'>Maths Mastery by Topic</div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
      {topicsinfo.map(subject => (
        <BackgroundGradientDemo
          key={subject.topicname}
          subjectname={subject.topicname}
          subjectpage={subject.subjectpage}  
          buttontext={subject.buttontext}     
        />
      ))}
      </div>
    
    </div>
  );
}

export default Page;
