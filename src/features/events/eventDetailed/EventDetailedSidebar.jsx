import React from 'react';
import { Segment, Item, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const EventDetailedSidebar = ({ attendees, hostUid }) => {
  const attendingPeople = attendees.map((attendee) => (
    <Item.Group relaxed divided key={attendee.id}>
      <Item
        as={Link}
        to={`/profile/${attendee.id}`}
        style={{ position: 'relative' }}
      >
        {hostUid === attendee.id && (
          <Label
            style={{ position: 'absolute' }}
            color='orange'
            ribbon='right'
            content='host'
          />
        )}
        <Item.Image size='tiny' src={attendee.photoURL || '/assets/user.png'} />
        <Item.Content verticalAlign='middle'>
          <Item.Header as='h3'>
            <span>{attendee.displayName}</span>
          </Item.Header>
        </Item.Content>
      </Item>
    </Item.Group>
  ));
  return (
    <>
      <Segment
        textAlign='center'
        style={{ border: 'none' }}
        attached='top'
        secondary
        inverted
        color='teal'
      >
        {attendees.length} {attendees.length > 1 ? 'People' : 'Person'} Going
      </Segment>
      <Segment attached>{attendingPeople}</Segment>
    </>
  );
};

export default EventDetailedSidebar;
