import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: PageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="flex flex-col items-start">
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {post.title}
            </h1>
            <time
              dateTime={post.date}
              className="text-gray-500 mt-2"
            >
              {post.date}
            </time>
          </div>
          <div className="mt-10 prose prose-lg prose-indigo">
            {post.content}
          </div>
        </div>
      </div>
    </article>
  );
} 