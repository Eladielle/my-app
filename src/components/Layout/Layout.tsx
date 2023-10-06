// eslint-disable-next-line import/no-extraneous-dependencies
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import { useAppDispatch } from '../../app/hooks';
import { useEffect } from 'react';
import { loadPosts } from '../../features/posts/postsSlice';

export default function Layout(): JSX.Element {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(loadPosts());
	}, []);

	return (
		<div>
			<header></header>
			<NavBar />
			<Outlet />
			<footer></footer>
		</div>
	);
}
