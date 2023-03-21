import { useContext } from "react";
import Context from "../../context/Context";

function ListSearch(): JSX.Element {
  const { search } = useContext(Context);
  return (
    <>
      <div>ListSearch: {search}</div>
    </>
  );
}

export default ListSearch;

