import { RootState } from '../../app/store';
import Post from './types/Post';

export const selectPosts = (state: RootState): Post[] => state.posts.posts;
