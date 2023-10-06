import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { deletePost } from './postsSlice';
import { selectPosts } from './selectors';

export default function PostsPage(): JSX.Element {
	const posts = useAppSelector(selectPosts);
	// const dispatch = useAppDispatch(); // перенесли в лейаут
	// useEffect(() => {
	// 	dispatch(loadPosts());
	// }, []);
	const dispatch = useAppDispatch();

	function handleDelete(id: number): void {
		dispatch(deletePost(id));
	}
	return (
		<div>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>
						<p>{post.title}</p>
						<p>{post.body}</p>
						<button type="button" onClick={() => handleDelete(post.id)}>
							Delete
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
