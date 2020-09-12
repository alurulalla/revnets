import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';

import { sampleData } from '../../app/api/sampleData';

import EventList from './EventList';
import EventForm from './eventForm/EventForm';

const EventDashboard = ({
  formOpen,
  setFormOpen,
  selectEvent,
  selectedEvent,
}) => {
  const [events, setEevents] = useState(sampleData);

  const handleCreateEvent = (event) => {
    setEevents([...events, event]);
  };

  const handleUpdateEvent = (event) => {
    setEevents(events.map((evt) => (evt.id === event.id ? event : evt)));
    selectEvent(null);
  };

  const handleDeleteEvent = (eventID) => {
    setEevents(events.filter((evt) => evt.id !== eventID));
    setFormOpen(false);
  };

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList
          events={events}
          selectEvent={selectEvent}
          deleteEvent={handleDeleteEvent}
        />
      </Grid.Column>
      <Grid.Column width={6}>
        {formOpen && (
          <EventForm
            setFormOpen={setFormOpen}
            setEevents={setEevents}
            createEvent={handleCreateEvent}
            selectedEvent={selectedEvent}
            key={selectedEvent ? selectedEvent.id : null}
            updateEvent={handleUpdateEvent}
          />
        )}
      </Grid.Column>
    </Grid>
  );
};

export default EventDashboard;
