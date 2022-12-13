import user from '../user.json';
import {Profile} from './Profile/Profile';

export const App = () => {
  return (
    <>
      <Profile avatar={user.avatar}
               name={user.username}
               tag={user.tag}
               location={user.location}
               stats={user.stats}              
              />
    </>
  );
};
