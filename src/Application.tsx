import * as React from 'react';
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';

import { EventWrapper } from './EventWrapper';
import { events } from './events';
import { localizer } from './localizer';

const defaultDate = new Date(2015, 3, 12);

const components = { eventWrapper: EventWrapper };

export const DragAndDropCalendar = withDragAndDrop(Calendar);

export const Application: React.FunctionComponent = () => {
	return (
		<div>
			<DragAndDropCalendar
				components={components}
				culture='en'
				defaultDate={defaultDate}
				defaultView='week'
				events={events}
				localizer={localizer}
				views={{ week: true }}
			/>
		</div>
	);
};
