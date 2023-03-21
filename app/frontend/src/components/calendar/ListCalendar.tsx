import { useContext } from "react";
import Context from "../../context/Context";

function ListCalendar(): JSX.Element {
  const {contents} = useContext(Context);
  return (
    <>
      <div>ListCalendar</div>
    </>
  );

}

export default ListCalendar;