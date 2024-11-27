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

const POSTS_PATH = path.join(process.cwd(), "src", "posts");

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
  try {
    const filePath = path.join(POSTS_PATH, filename);
    if (!fs.existsSync(filePath)) {
      console.warn(`File not found: ${filePath}`);
      return null;
    }

    const fileContent = fs.readFileSync(filePath, "utf-8");
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
  } catch (error) {
    console.error(`Error processing file ${filename}:`, error);
    return null;
  }
};

export const getPostBySlug = (slug: string): Post | null => {
  try {
    const files = fs.readdirSync(POSTS_PATH);
    for (const filename of files) {
      if (getRegexForSlug(slug).test(filename)) {
        const post = getPostFromFile(filename);
        if (post) {
          return post;
        }
      }
    }
    return null;
  } catch (error) {
    console.error(`Error reading posts directory:`, error);
    return null;
  }
};

/**
 * Gets all posts.
 * @returns An array of all posts, sorted by date in descending order.
 */
export const getAllPosts = async (): Promise<Post[]> => {
  try {
    const files = fs.readdirSync(POSTS_PATH);
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
  } catch (error) {
    console.error(`Error fetching all posts:`, error);
    return [];
  }
};

export async function getAllPostPaths() {
  try {
    const posts = await getAllPosts();
    const paths = posts.map((post) => ({ slug: post.slug }));
    return paths;
  } catch (error) {
    console.error(`Error getting all post paths:`, error);
    return [];
  }
}
