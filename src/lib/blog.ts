import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { format } from 'date-fns';

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  content: string;
  excerpt: string;
};

export function getAllPosts(): BlogPost[] {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      // Remove ".mdx" from file name to get slug
      const slug = fileName.replace(/\.mdx$/, '');

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const { data, content } = matter(fileContents);

      // Format the date
      const date = format(new Date(data.date), 'MMMM dd, yyyy');

      // Generate excerpt
      const excerpt = content.slice(0, 200) + '...';

      return {
        slug,
        title: data.title,
        date,
        content,
        excerpt,
      };
    })
    .sort((a, b) => (new Date(b.date) as any) - (new Date(a.date) as any));

  return allPostsData;
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug,
      title: data.title,
      date: format(new Date(data.date), 'MMMM dd, yyyy'),
      content,
      excerpt: content.slice(0, 200) + '...',
    };
  } catch (error) {
    return null;
  }
} 