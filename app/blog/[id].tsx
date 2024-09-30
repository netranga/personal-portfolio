import { Navigation } from "../components/nav";
import { notFound } from "next/navigation";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'My Journey as a Data Scientist',
    content: `
      <p>As I reflect on my journey as a data scientist, I'm struck by the incredible evolution of the field and my own growth within it. From my early days of grappling with basic statistical concepts to now leveraging advanced machine learning algorithms, the path has been both challenging and rewarding.</p>
      <h2>The Beginning</h2>
      <p>My journey began during my undergraduate years at UNC Chapel Hill. The foundation in statistics and analytics I received there was invaluable, but it was just the beginning. The real learning started when I stepped into the professional world.</p>
      <h2>Challenges and Growth</h2>
      <p>One of the biggest challenges I faced was the rapid pace of technological change in the field. It seemed like every few months, there was a new tool or technique to master. But with each new challenge came an opportunity to grow and expand my skillset.</p>
      <h2>The Rewards</h2>
      <p>The most rewarding aspect of being a data scientist is the impact our work can have. From helping businesses make data-driven decisions to contributing to scientific research, the applications of data science are vast and meaningful.</p>
      <h2>Looking Forward</h2>
      <p>As I look to the future, I'm excited about the continued evolution of data science, particularly in areas like artificial intelligence and machine learning. The potential for these technologies to solve complex problems and improve lives is immense.</p>
      <p>This journey has taught me that in data science, learning never stops. And that's exactly what makes this field so exciting and rewarding.</p>
    `,
    date: '2024-09-30'
  },
  // Add other blog posts here
];

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts.find(post => post.id === params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navigation />
      <div className="pt-32 px-8 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-400 mb-8">{post.date}</p>
        <div className="prose prose-invert" dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </div>
  );
}
