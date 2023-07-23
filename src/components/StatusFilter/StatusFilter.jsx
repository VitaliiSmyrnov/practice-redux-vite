import { Button } from "components/Button/Button";
import css from "./StatusFilter.module.css";

import { useSelector, useDispatch } from "react-redux";
import { selectFilters } from "../../redux/selectors";
import { statusFilters } from "../../redux/constants";
import { setStatusFilter } from "../../redux/actions";

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilters);

  return (
    <div className={css.wrapper}>
      <Button
        onClick={() => dispatch(setStatusFilter(statusFilters.all))}
        selected={filter === statusFilters.all}
      >
        All
      </Button>
      <Button
        onClick={() => dispatch(setStatusFilter(statusFilters.active))}
        selected={filter === statusFilters.active}
      >
        Active
      </Button>
      <Button
        onClick={() => dispatch(setStatusFilter(statusFilters.completed))}
        selected={filter === statusFilters.completed}
      >
        Completed
      </Button>
    </div>
  );
};
