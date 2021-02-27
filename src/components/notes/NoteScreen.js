import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
	return (
		<div className='notes__main-content'>
			<NotesAppBar />

			<div className='notes__content'>
				<input
					type='text'
					placeholder='Some awesome title'
					className='notes__title-input'
				/>

				<textarea
					name=''
					placeholder='What happend today?'
					className='notes__textarea'
				></textarea>

				<div className='notes__image'>
					<img
						src='https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067__340.png'
						alt=''
					/>
				</div>
			</div>
		</div>
	)
}
