import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import EventList from './EventList';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import EventListItemPlaceholder from './EventListItemPlaceholder';
import EventFilters from './EventFilters';

const EventDashboard = () => {
  const { events } = useSelector((state) => state.event);
  const { loading } = useSelector((state) => state.async);

  // if (loading) return <LoadingComponent />;
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
        {loading && (
          <>
            <EventListItemPlaceholder />
            <EventListItemPlaceholder />
          </>
        )}
        <EventList events={events} deleteEvent={handleDeleteEvent} />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventFilters />
      </Grid.Column>
    </Grid>
  );
};

export default EventDashboard;
