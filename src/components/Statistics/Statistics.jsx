import PropTypes from "prop-types";

import {StatisticItem} from "../StatisticItem/StatisticItem";
import css from "./Statistics.module.css";

export const Statistics = ({title, statData}) => (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}
            <ul className={css.statList}>
            {statData.map(({id, label, percentage}) => (
                <StatisticItem  
                    key={id}
                    label={label}
                    percentage={percentage}                   
                    />
                )
              )
            }
        </ul>
        </section>
)

Statistics.propTypes = {
  title: PropTypes.string,
  statData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }) 
  ).isRequired,
}