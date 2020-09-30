import React, { Fragment } from 'react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar';
import { Container } from 'semantic-ui-react';
import { Route, useLocation } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import EventDetailedPage from '../../features/events/eventDetailed/EventDetailedPage';
import EventForm from '../../features/events/eventForm/EventForm';
import Sandbox from '../../features/sandbox/Sandbox';
import ModalManager from '../common/modals/ModalManager';
import { ToastContainer } from 'react-toastify';
import ErrorComponent from '../common/errors/ErrorComponent';
import AccountPage from '../../features/auth/AccountPage';
import { useSelector } from 'react-redux';
import LoadingComponent from './LoadingComponent';
import ProfilePage from '../../features/profiles/profilePage/ProfilePage';
import PrivateRoute from './PrivateRoute';

function App() {
  const { key } = useLocation();
  const { initialized } = useSelector((state) => state.async);

  if (!initialized) return <LoadingComponent content='Loading app...' />;
  return (
    <Fragment>
      <ModalManager />
      <ToastContainer position='bottom-right' hideProgressBar />
      <Route path='/' exact component={HomePage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <NavBar />
            <Container className='main'>
              <Route path='/events' exact component={EventDashboard} />
              <Route path='/sandbox' exact component={Sandbox} />
              <Route path='/events/:id' component={EventDetailedPage} />
              <PrivateRoute
                path={['/createEvent', '/manage/:id']}
                component={EventForm}
                key={key}
              />
              <PrivateRoute path='/account' component={AccountPage} />
              <PrivateRoute path='/profile/:id' component={ProfilePage} />
              <Route path='/error' component={ErrorComponent} />
              {/* <EventDashboard
          formOpen={formOpen}
          setFormOpen={setFormOpen}
          selectEvent={handleSelectEvent}
          selectedEvent={selectedEvent}
        /> */}
            </Container>
          </>
        )}
      />
    </Fragment>
  );
}

export default App;
