import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { activeNote } from '../../actions/notes'

export const JournalEntry = ({ id, title, body, date, url }) => {
	const dispatch = useDispatch()
	const noteDate = moment(date)

	const hanldeEntryClick = () => {
		dispatch(activeNote(id, { id, title, body, date, url }))
	}

	return (
		<div className='journal__entry' onClick={hanldeEntryClick}>
			{url && (
				<div
					className='journal__entry-picture'
					style={{
						backgroundSize: 'cover',
						backgroundImage: `url(${url})`,
					}}
				></div>
			)}

			<div className='journal__entry-body'>
				<p className='journal__entry-title'>{title}</p>
				<p className='journal__entry-content'>{body}</p>
			</div>

			<div className='journal__entry-date-box'>
				<span>{noteDate.format('dddd')}</span>
				<h4>{noteDate.format('Do')}</h4>
			</div>
		</div>
	)
}

JournalEntry.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
	date: PropTypes.number.isRequired,
	url: PropTypes.string.isRequired,
}
