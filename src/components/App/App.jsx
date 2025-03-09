import userData from "../../userData.json";
import Profile from '../Profile/Profile';

import friends from "../../friends.json";
import FriendList from '../FriendList/FriendList';

export default function App() {
    return (
      <>
        <Profile
          imgUrl={userData.avatar}
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          stats={userData.stats} />

        <FriendList 
          friends={friends} />

      </>
    );
  }