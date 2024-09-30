import React from "react";
import Image from "next/image";
import { Navigation } from "../components/nav";
import { Timeline } from "../components/timeline";
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { FileText } from 'lucide-react';


const AnimatedSection = dynamic(() => import('../components/AnimatedSection'), { ssr: false });

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export default function AboutPage() {
  const timelineData: TimelineEntry[] = [
    {
      title: "2017",
      content: (
        <div>
          <h4 className="text-2xl md:text-3xl font-semibold text-zinc-200 mb-2">Began undergraduate studies at UNC Chapel Hill</h4>
          <ul className="list-disc list-outside text-neutral-400 text-sm md:text-base mb-4 pl-5">
            <li className="mb-2">
              <span className="inline">
                Began pursing a degree in <span className="text-zinc-200 font-semibold">Statistics and Analytics with minors in Public Policy and Cognitive Science</span>
              </span>
            </li>
          </ul>
          <div className="flex gap-4">
            <Image src="/unc.jpeg" alt="UNC Chapel Hill" width={250} height={250} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-1/2 shadow" />
            <Image src="/unc-2.jpeg" alt="UNC Chapel Hill Additional" width={250} height={250} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-1/2 shadow" />
          </div>
        </div>
      ),
    },
    {
      title: "2018",
      content: (
        <div>
          <h4 className="text-2xl md:text-3xl font-semibold text-zinc-200 mb-2">Joined Dr. Kelly Ryoo's Education Research Lab</h4>
          <ul className="list-disc list-outside text-neutral-400 text-sm md:text-base mb-4 pl-5">
            <li className="mb-2">
              <span className="inline">
                Lab research was focused on improving education for English second language learners across middle schools in North Carolina in low-income areas. Our team developed <span className="text-zinc-200 font-semibold">"dynamic visualizations"</span> which consisted of animations, simulations, and models to visualize abstract scientific concepts.
              </span>
            </li>
            <li className="mb-2">
              <span className="inline">
                The research I focused on was identification of key learning patterns and opportunities to improve learning experiences for <span className="text-zinc-200 font-semibold">English language learners</span>
              </span>
            </li>
            <li className="mb-2">
              <span className="inline">
                Co-authored a paper for the <span className="text-zinc-200 font-semibold">2020 ICLS conference</span>
              </span>
            </li>
          </ul>
          <div className="flex items-start gap-8">
            <Image src="/research.jpeg" alt="Research Paper 1" width={450} height={250} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-1/2 shadow" />
            <div className="flex flex-col items-start gap-4">
              <div className="text-zinc-200 text-xl font-medium">Research Paper</div>
              <Link href="https://repository.isls.org/bitstream/1/6627/1/2593-2596.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-400 hover:text-blue-300">
                <FileText size={24} />
                <span>View Paper</span>
              </Link>
            </div>
          </div>
        </div>
      ), 
    },
    {
      title: "2019",
      content: (
        <div>
          <h4 className="text-2xl md:text-3xl font-semibold text-zinc-200 mb-2">First Tech Industry Internship at MetLife</h4>
          <ul className="list-disc list-outside text-neutral-400 text-sm md:text-base mb-4 pl-5">
            <li className="mb-2">
              <span className="inline">
                Worked as a <span className="text-zinc-200 font-semibold">Business Systems Analyst</span> in MetLife's Technology Summer Program
              </span>
            </li>
            <li className="mb-2">
              <span className="inline">
                Supported a migration project of a legacy claims intake platform by developing business and functional requirements as well as UI/UX mockups for target state platform.
              </span>
            </li>
            <li className="mb-2">
              <span className="inline">
                Sparked deeper interest in <span className="text-zinc-200 font-semibold">software development</span> and <span className="text-zinc-200 font-semibold">data science</span>
              </span>
            </li>
          </ul>
          <div className="flex gap-4">
            <Image src="/metlife.jpeg" alt="MetLife Internship 1" width={250} height={250} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-1/2 shadow" />
            <Image src="/metlife-2.jpeg" alt="MetLife Internship 2" width={250} height={250} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-1/2 shadow" />
          </div>
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div>
          <h4 className="text-2xl md:text-3xl font-semibold text-zinc-200 mb-2">Ventured into Freelance Data Science Work</h4>
          <ul className="list-disc list-outside text-neutral-400 text-sm md:text-base mb-4 pl-5">
            <li className="mb-2">
              <span className="inline">
                Started freelance work for a senior healthcare executive, performing data analysis on physical and mental health disorders and literacy rates in New York schools using SAS and SQL.
              </span>
            </li>
            <li className="mb-2">
              <span className="inline">
                Provided tutoring on <span className="text-zinc-200 font-semibold">R and Python</span> for data analysis and visualization
              </span>
            </li>
          </ul>
          <div className="flex gap-4">
            <Image src="/r_tutoring.jpeg" alt="Freelance Work 1" width={250} height={250} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-1/2 shadow" />
            <Image src="/freelance-2.jpeg" alt="Freelance Work 2" width={250} height={250} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-1/2 shadow" />
          </div>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <h4 className="text-2xl md:text-3xl font-semibold text-zinc-200 mb-2">Graduated UNC and Began Consulting Career</h4>
          <ul className="list-disc list-outside text-neutral-400 text-sm md:text-base mb-4 pl-5">
            <li className="mb-2">
              <span className="inline">
                Earned degree with <span className="text-zinc-200 font-semibold">Distinction and on Dean's List 7 consecutive semesters</span>
              </span>
            </li>
            <li className="mb-2">
              <span className="inline">
                Began working as a Data Analytics Consultant at EY following graduation, worked on <span className="text-zinc-200 font-semibold">data management</span> and <span className="text-zinc-200 font-semibold">analytics projects</span> for large financial services clients
              </span>
            </li>
          </ul>
          <div className="flex justify-center">
            <Image src="/nr_grad.jpeg" alt="Graduation from UNC" width={300} height={200} className="rounded-lg object-cover shadow" />
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <h4 className="text-2xl md:text-3xl font-semibold text-zinc-200 mb-2">The Start of My LLM Journey</h4>
          <ul className="list-disc list-outside text-neutral-400 text-sm md:text-base mb-4 pl-5">
            <li className="mb-2">
              <span className="inline">
                Led <span className="text-zinc-200 font-semibold">company-wide training</span> on Large Language Models pre-ChatGPT
              </span>
            </li>
            <li className="mb-2">
              <span className="inline">
                Joined one of the <span className="text-zinc-200 font-semibold">firm's first LLM implementations</span> for a wealth and asset management client, developing a RAG chatbot for enterprise search from development to production
              </span>
            </li>
          </ul>
          <div className="flex items-start gap-8">
            <Image src="/internal_training.jpeg" alt="Internal LLM Training" width={300} height={200} className="rounded-lg object-cover shadow" />
            <div className="flex flex-col items-center gap-4">
              <div className="text-zinc-200 text-lg font-medium">Number of Attendees</div>
              <div className="text-5xl font-bold text-blue-400">210</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <h4 className="text-2xl md:text-3xl font-semibold text-zinc-200 mb-2">Lead AI Trainings and Community Outreach</h4>
          <ul className="list-disc list-outside text-neutral-400 text-sm md:text-base mb-4 pl-5">
            <li className="mb-2">
              <span className="inline">
                Led AI trainings for <span className="text-zinc-200 font-semibold">100+ individuals</span>
              </span>
            </li>
            <li className="mb-2">
              <span className="inline">
                Contributed to <span className="text-zinc-200 font-semibold">nonprofit outreach</span>
              </span>
            </li>
            <li className="mb-2">
              <span className="inline">
                Educated community leaders on <span className="text-zinc-200 font-semibold">AI implementation</span> in their companies
              </span>
            </li>
          </ul>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <Link href="https://www.linkedin.com/feed/update/urn:li:activity:7150642059157127171/" target="_blank" rel="noopener noreferrer">
                <Image src="/ai-training-1.jpeg" alt="AI Training Session 1" width={250} height={250} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow cursor-pointer transition-transform hover:scale-105" />
              </Link>
              <Link href="https://www.linkedin.com/posts/netra-ranga_artsfactory-historicwestend-activity-7072341527162716160-l65-?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">
                <Image src="/ai-training-2.jpeg" alt="AI Training Session 2" width={250} height={250} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow cursor-pointer transition-transform hover:scale-105" />
              </Link>
            </div>
            <p className="text-zinc-300 text-sm italic text-center">Click on the images to view the LinkedIn posts</p>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <h4 className="text-2xl md:text-3xl font-semibold text-zinc-200 mb-2">Coming Soon...</h4>
          <ul className="list-disc list-outside text-neutral-400 text-sm md:text-base pl-5">
            <li className="mb-2">
              <span className="inline">
                Started multiple projects.....tbd whats next
              </span>
            </li>
            <li className="mb-2">
              <span className="inline">
                TBD how many will be finished
              </span>
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 font-sans">
      <Navigation />
      <div className="pt-10">
        <AnimatedSection timelineData={timelineData} />
      </div>
      <div className="container mx-auto px-4 md:px-8 lg:px-10">
        <div className="py-2">
          <Timeline data={timelineData} />
        </div>
      </div>
    </div>
  )
}