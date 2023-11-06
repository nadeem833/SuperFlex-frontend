import React from 'react';

import InviteCard from '../components/InviteCard';
import NewInvite from '../components/NewInvite';

const Invites = () => {
  return (
    <div className="flex flex-col gap-3">
      <NewInvite />
      <InviteCard />
    </div>
  );
};

export default Invites;
