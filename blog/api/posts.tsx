import { API } from '@/app/api';
import { PostsInterface } from '@/interfaces/posts.interface';

export async function getPosts(): Promise<PostsInterface | null> {
  const result = await fetch(API.posts.all, {
    next: { revalidate: 100 },
  });

  if (!result.ok) {
    return null;
  }
  

  return result.json();
}
