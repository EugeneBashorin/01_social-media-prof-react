import PropTypes from "prop-types";
import css from "./StatisticItem.module.css";
import {getColor} from "./getColor.js"

export const StatisticItem = ({id,label,percentage}) =>{
    const className = getColor(label,css);
    return(
        <li className={className} key={id}>
        <span className={css.label}>{label}</span>
        <span className={css.percentage}>{percentage}%</span>
    </li>
    )
}

StatisticItem.propTypes ={
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}