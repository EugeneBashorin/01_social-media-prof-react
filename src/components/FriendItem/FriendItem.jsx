import PropTypes from 'prop-types'
import css from "./FriendItem.module.css";

export const FriendItem = ({avatar, name, isOnline, id}) => {
    return( 
        <li className={css.item} key={id}>
            {isOnline && <span className={`${css.status} ${css.statusOnline}`}></span>}
            {!isOnline && <span className={`${css.status} ${css.statusOffline}`}></span>}
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p> 
        </li>
    )
}
/*//  inline status indicate
    <span className={css.status}
        style={{backgroundColor: isOnline ? 'green' : 'red'}}
    ></span>*/
FriendItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}