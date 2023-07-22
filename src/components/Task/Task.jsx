import { MdClose } from "react-icons/md";
import css from "./Task.module.css";
import PropTypes from "prop-types";

export const Task = ({ task = {} }) => {
  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn}>
        <MdClose size={24} />
      </button>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    completed: PropTypes.bool.isRequired,
  }),
};
