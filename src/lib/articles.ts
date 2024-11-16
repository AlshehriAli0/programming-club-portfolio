import fs from "fs";
import matter from "gray-matter";
import path from "path";

export interface Post {
  meta: {
    [key: string]: string;
  };
  slug: string;
  date: string;
  href: string;
  content: string;
}

interface DateAndSlug {
  date: string;
  slug: string;
}

const POSTS_PATH = "posts";

export const getRegexForSlug = (slug: string): RegExp => {
  return new RegExp(`^\\d{4}-\\d{2}-\\d{2}-${slug}.mdx$`);
};

export const getDateAndSlugFromFilename = (filename: string): DateAndSlug | null => {
  const match = filename.match(/^(\d{4}-\d{2}-\d{2})-(.*).mdx$/);
  if (match) {
    return {
      date: match[1],
      slug: match[2],
    };
  }
  return null;
};

const getPostFromFile = (filename: string): Post | null => {
  const fileContent = fs.readFileSync(path.join(POSTS_PATH, filename), "utf-8");

  const { data: frontMatter, content } = matter(fileContent);

  const dateAndSlug = getDateAndSlugFromFilename(filename);

  if (!dateAndSlug) {
    return null;
  }

  const { date, slug } = dateAndSlug;

  return {
    meta: frontMatter,
    content,
    slug,
    date,
    href: `/scientific-corner/${slug}`,
  };
};

export const getPostBySlug = (slug: string): Post | null => {
  const files = fs.readdirSync(path.join(POSTS_PATH));

  for (const filename of files) {
    if (getRegexForSlug(slug).test(filename)) {
      const post = getPostFromFile(filename);
      if (post) {
        return post;
      }
    }
  }

  return null;
};

/**
 * Gets all posts.
 * @returns An array of all posts, sorted by date in descending order.
 */
export const getAllPosts = async (): Promise<Post[]> => {
  const files = fs.readdirSync(path.join(POSTS_PATH));

  const posts: Post[] = files
    .map((item) => getPostFromFile(item))
    .filter((post): post is Post => post !== null);

  const filteredAndSortedPosts = posts.sort((a, b) => {
    if (new Date(a.date) > new Date(b.date)) {
      return -1;
    }
    return 1;
  });

  return filteredAndSortedPosts;
};

export async function getAllPostPaths() {
  const posts = await getAllPosts();

  const paths = posts.map((post) => ({ slug: post.slug }));

  return paths;
}
