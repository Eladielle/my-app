// eslint-disable-next-line import/no-extraneous-dependencies
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';

export default function NavBar(): JSX.Element {
	const user = useAppSelector((state: RootState) => state.auth.user);
	return (
		<nav>
			{user?.username ? (
				<>
					<NavLink to="counter">Counter</NavLink>
					<NavLink to="products">Products</NavLink>
					<NavLink to="posts">Posts</NavLink>
					<NavLink to="posts/create">Post creation</NavLink>
					<NavLink to="/">Home</NavLink>
					{/* TODO Logout */}
				</>
			) : (
				<NavLink to="/login">Sign in</NavLink>
			)}
			{user?.username && <span>Отобразится, если юзер существует</span>}
		</nav>
	);
}
