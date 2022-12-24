import PropTypes from 'prop-types';

import {FriendItem} from "../FriendItem/FriendItem"
import css from "./FriendList.module.css";

export const FriendList = ({friends}) => (
    <section className={css.friendSection}>
        <ul className={css.friendList}>
                {friends.map(({avatar, name, isOnline, id}) => (                   
                    <FriendItem
                        avatar = {avatar}
                        name = {name}
                        isOnline = {isOnline}
                        key = {id}
                    />
                    )
                )} 
        </ul>
    </section>
)

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ).isRequired,
};