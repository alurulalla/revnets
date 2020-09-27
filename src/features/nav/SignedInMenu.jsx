import React from 'react';
import { Menu, Image, Dropdown } from 'semantic-ui-react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { signOutFirebase } from '../../app/firestore/firebaseService';

const SignedInMenu = () => {
  const { currentUserProfile } = useSelector((state) => state.profile);
  const history = useHistory();
  async function handleSignOut() {
    try {
      history.push('/');
      await signOutFirebase();
    } catch (error) {
      toast.error(error.message);
    }
  }
  return (
    <Menu.Item position='right'>
      <Image
        avatar
        spaced='right'
        src={currentUserProfile?.photoURL || '/assets/user.png'}
      />
      <Dropdown pointing='top left' text={currentUserProfile?.displayName}>
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to='/createEvent'
            text='Create Event'
            icon='plus'
          />
          <Dropdown.Item
            text='My Profile'
            icon='user'
            as={Link}
            to={`/profile/${currentUserProfile?.id}`}
          />
          <Dropdown.Item
            as={Link}
            to='/account'
            text='My Account'
            icon='settings'
          />
          <Dropdown.Item onClick={handleSignOut} text='Sign out' icon='power' />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
};

export default SignedInMenu;
