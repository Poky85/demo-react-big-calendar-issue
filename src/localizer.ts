import { format, getDay, startOfWeek } from 'date-fns';
import { enGB as en } from 'date-fns/locale';
import { dateFnsLocalizer } from 'react-big-calendar';

console.log({ en });

export const localizer = dateFnsLocalizer({
	locales: { en },
	format,
	startOfWeek,
	getDay,
});
