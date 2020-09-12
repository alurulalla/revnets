import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';

import { sampleData } from '../../app/api/sampleData';

import EventList from './EventList';
import EventForm from './eventForm/EventForm';

const EventDashboard = ({ formOpen, setFormOpen }) => {
  const [events, setEevents] = useState(sampleData);

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} />
      </Grid.Column>
      <Grid.Column width={6}>
        {formOpen && <EventForm setFormOpen={setFormOpen} />}
      </Grid.Column>
    </Grid>
  );
};

export default EventDashboard;
