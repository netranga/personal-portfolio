import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "../components/nav";

interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  url: string // Added url property
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'My Journey as a Data Scientist',
    excerpt: 'Exploring the challenges and rewards of working in data science...',
    date: '2024-09-30',
    url: 'https://help.medium.com/hc/en-us/articles/115004746707-Your-profile-page-URL' // Add your Medium URL here
  },
  {
    id: '2',
    title: 'Creative Coding: Where Art Meets Technology',
    excerpt: 'How I combine my passion for creativity with programming...',
    date: '2024-09-25',
    url: 'https://help.medium.com/hc/en-us/articles/115004746707-Your-profile-page-URL' // Add your Medium URL here
  },
  {
    id: '3',
    title: 'Real Estate Market Analysis Using Data Science',
    excerpt: 'Leveraging data science techniques to gain insights into real estate trends...',
    date: '2024-09-20',
    url: 'https://help.medium.com/hc/en-us/articles/115004746707-Your-profile-page-URL' // Add your Medium URL here
  },
]

export default function BlogList() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black text-white">
      <Navigation />
      <div className="pt-32 px-8">
        <h1 className="text-4xl font-bold mb-8 text-left">My Thoughts and Learnings</h1>
        <div className="max-w-2xl space-y-6">
          {blogPosts.map((post) => (
            <Link href={post.url} key={post.id} className="block transition-transform hover:scale-105" target="_blank" rel="noopener noreferrer">
              <Card className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">{post.title}</CardTitle>
                  <p className="text-sm text-gray-400">{post.date}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{post.excerpt}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}