import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { songActions } from '../redux/slices/songSlice';
const SongList = (props) => {
	const songs = useSelector((state) => state.songs.songs);
	const dispatch = useDispatch();
	return (
		<div className='flex flex-col gap-2 p-2'>
			{songs.map((song) => (
				<div key={song.duration} className='flex flex-col items-center'>
					<h2 className='text-lg font-semibold'>{song.title}</h2>
					<button
						className='w-full px-3 py-2 font-medium text-gray-200 bg-indigo-600 rounded shadow'
						onClick={() => dispatch(songActions.selectSong(song))}>
						Select
					</button>
				</div>
			))}
		</div>
	);
};

export default SongList;
