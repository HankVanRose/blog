import { API } from '@/app/api';
import { Post } from '@/interfaces/posts.interface';

export async function getCurrentPosts(postId: string): Promise<Post | null> {
  const res = await fetch(`${API.posts.currentPost}/${postId}`, {
    next: { revalidate: 100 },
  });

  if (!res.ok) {
    console.error(`Failed to fetch post ${postId}:`, res.status);
    return null;
  }

  return res.json();
}