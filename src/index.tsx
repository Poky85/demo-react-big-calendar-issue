import * as React from 'react';
import { createRoot } from 'react-dom/client';

import { Application } from './Application';

const application = (
	<Application />
);

const root = createRoot(document.getElementById('application') as HTMLDivElement);
root.render(application);
