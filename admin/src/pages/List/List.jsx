import { Sidebar, Navbar, DataTable } from "./../../components";
import "./List.scss";

const List = ({ columns }) => {
  // console.log(columns);
  return (
    <div className="list">
      <Sidebar />

      <div className="listContainer">
        <Navbar />
        <DataTable columns={columns} />
      </div>
    </div>
  );
};

export default List;
