import React from 'react'

export const JournalEntry = ({ title, body, date }) => {
	return (
		<div className='journal__entry'>
			<div
				className='journal__entry-picture'
				style={{
					backgroundSize: 'cover',
					backgroundImage:
						'url(https://images.unsplash.com/photo-1527960669566-f882ba85a4c6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YXdlc29tZSUyMHBpY3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80)',
				}}
			></div>

			<div className='journal__entry-body'>
				<p className='journal__entry-title'>{title}</p>
				<p className='journal__entry-content'>{body}</p>
			</div>

			<div className='journal__entry-date-box'>
				<span>Monday</span>
				<h4>25</h4>
			</div>
		</div>
	)
}
