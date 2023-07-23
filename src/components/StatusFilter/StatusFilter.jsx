import { Button } from "components/Button/Button";
import css from "./StatusFilter.module.css";

import { useSelector } from "react-redux";
import { selectFilters } from "../../redux/selectors";
import { statusFilters } from "../../redux/constants";

export const StatusFilter = () => {
  const filter = useSelector(selectFilters);

  return (
    <div className={css.wrapper}>
      <Button selected={filter === statusFilters.all}>All</Button>
      <Button selected={filter === statusFilters.active}>Active</Button>
      <Button selected={filter === statusFilters.completed}>Completed</Button>
    </div>
  );
};
