// eslint-disable-next-line import/default
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
// eslint-disable-next-line import/no-extraneous-dependencies
import { HashRouter } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<>
		<Provider store={store}>
			<HashRouter>
				<App />
			</HashRouter>
		</Provider>
	</>
);
