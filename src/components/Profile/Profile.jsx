import PropTypes from "prop-types";
import css from "./Profile.module.css";

export const Profile = ({
    avatar,
    name,
    tag,
    location,
    stats: {followers, views, likes}
    }) =>(
    
    <div className={css.profile}>
        <div className={css.description}>
            <img
                src={avatar}
                alt="User avatar"
                className={css.avatar}
            />
            <p className={css.name}>{name}</p>
            <p className={css.tag}>@{tag}</p>
            <p className={css.location}>{location}</p>
        </div>

        <ul className={css.stats}>
            <li className={css.stats_item}>
            <span className="label">Followers</span>
            <span className="quantity">{followers}</span>
            </li>
            <li className={css.stats_item}>
            <span className="label">Views</span>
            <span className="quantity">{views}</span>
            </li>
            <li className={css.stats_item}>
            <span className="label">Likes</span>
            <span className="quantity">{likes}</span>
            </li>
        </ul>
    </div>
);

Profile.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    tag:PropTypes.string,
    location: PropTypes.string,
    stats: PropTypes.shape({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number,
    })
}