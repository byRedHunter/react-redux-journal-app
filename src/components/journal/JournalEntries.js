import React from 'react'
import { useSelector } from 'react-redux'
import { JournalEntry } from './JournalEntry'

export const JournalEntries = () => {
	const { notes } = useSelector((state) => state.notes)

	return (
		<div className='journal__entries'>
			{notes.map((note) => (
				<JournalEntry
					key={note.id}
					id={note.id}
					title={note.title}
					body={note.body}
					date={note.date}
					url={note.url ? note.url : ''}
				/>
			))}
		</div>
	)
}
