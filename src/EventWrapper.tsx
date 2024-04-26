import * as React from 'react';
import { type Event, EventWrapperProps } from 'react-big-calendar';
import { Tooltip } from '@mui/material';

declare module 'react-big-calendar' {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	export interface EventWrapperProps<TEvent extends object = Event> {
		children?: React.ReactElement;
	}
}

export const EventWrapper: React.FunctionComponent<EventWrapperProps<Event> & {
	children?: React.ReactElement;
}> = ({ children }) => {
	React.useEffect(
		() => {
			console.log('EventWrapper mounted');
			return () => { console.log('EventWrapper unmounted'); };
		},
		[]
	);

	const handleClick = React.useCallback(() => {
		alert('Event clicked!');
	}, []);

	return (
		<Tooltip followCursor placement='right'  title='Event with tooltip!'>
			<div onClick={handleClick}>{children}</div>
		</Tooltip>
	);
};
