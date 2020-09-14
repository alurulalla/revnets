import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import EventList from './EventList';

const EventDashboard = () => {
  const { events } = useSelector((state) => state.event);
  // const handleCreateEvent = (event) => {
  //   setEevents([...events, event]);
  // };

  // const handleUpdateEvent = (event) => {
  //   setEevents(events.map((evt) => (evt.id === event.id ? event : evt)));
  // };

  const handleDeleteEvent = (eventID) => {
    // setEevents(events.filter((evt) => evt.id !== eventID));
  };

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} deleteEvent={handleDeleteEvent} />
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>Event Filters</h2>
      </Grid.Column>
    </Grid>
  );
};

export default EventDashboard;
