import { useSelector } from 'react-redux';

const SongDetail = (props) => {
	const selectedSong = useSelector((state) => state.songs.selectedSong);
	return (
		selectedSong && (
			<div className='flex flex-col items-center p-4 rounded-md shadow-md w-96'>
				<h1 className='text-xl font-bold'>Selected Song</h1>
				<p className='text-xl font-medium'>{selectedSong.title}</p>
				<p>{selectedSong.duration}</p>
			</div>
		)
	);
};
export default SongDetail;
