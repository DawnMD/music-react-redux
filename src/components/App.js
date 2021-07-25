import SongList from './SongList';
import SongDetail from './SongDetail';

const App = () => {
	return (
		<div className='flex flex-col items-center justify-center min-h-screen'>
			<SongDetail />
			<SongList />
		</div>
	);
};

export default App;
