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
      <p>As I reflect on my journey as a data scientist...</p>
      <h2>The Beginning</h2>
      <p>My journey began during my undergraduate years...</p>
      <h2>Challenges and Growth</h2>
      <p>One of the biggest challenges I faced...</p>
      <h2>The Rewards</h2>
      <p>The most rewarding aspect of being a data scientist...</p>
      <h2>Looking Forward</h2>
      <p>As I look to the future...</p>
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
