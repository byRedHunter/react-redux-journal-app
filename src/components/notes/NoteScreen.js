import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
	const { active: note } = useSelector((state) => state.notes)
	const [values, handleInputChange, reset] = useForm(note)
	const { body, title, url } = values

	const activeId = useRef(note.id)

	useEffect(() => {
		if (note.id !== activeId.current) {
			reset(note)
			activeId.current = note.id
		}
	}, [note, reset])

	return (
		<div className='notes__main-content'>
			<NotesAppBar />

			<div className='notes__content'>
				<input
					type='text'
					placeholder='Some awesome title'
					className='notes__title-input'
					value={title}
					onChange={handleInputChange}
				/>

				<textarea
					name=''
					placeholder='What happend today?'
					className='notes__textarea'
					value={body}
					onChange={handleInputChange}
				></textarea>

				{url && (
					<div className='notes__image'>
						<img
							src='https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067__340.png'
							alt=''
						/>
					</div>
				)}
			</div>
		</div>
	)
}
