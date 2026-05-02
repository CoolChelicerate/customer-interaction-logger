import { Log } from "../../types";

type LogTableProps = {
  displayedLogs: Log[];
  logs: Log[];
  filterBy: string;
  setFilterBy: (value: string) => void;
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  onEdit: (i: number) => void;
  onAdd: () => void;
};

export default function LogTable({
  displayedLogs,
  logs,
  filterBy,
  setFilterBy,
  searchTerm,
  setSearchTerm,
  onEdit,
  onAdd,
}: LogTableProps) {
  return (
    <>
      <h2 className="logs-header">
        <i className="fa-solid fa-file-lines"></i> Logs
        <select
          className="logs-filter-dropdown"
          value={filterBy}
          onChange={(e) => setFilterBy(e.target.value)}
        >
          <option value="none">All</option>
          <option value="urgent">Urgent</option>
          <option value="new">New</option>
          <option value="open">Open</option>
          <option value="resolved">Resolved</option>
          <option value="recent">Recent (last 24 hours)</option>
        </select>
        <input
          className="log-searchbar"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </h2>

      <table className="log-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Description</th>
            <th>Status</th>
            <th>Date/Time Reported</th>
            <th>Date/Time Resolved</th>

            <th>
              <button className="new-log-button" onClick={onAdd}>
                <i className="fa-solid fa-plus"></i>
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {displayedLogs.map((log, i) => (
            <tr key={i}>
              <td>{log.name}</td>
              <td>{log.category}</td>
              <td id="log-desc">{log.description}</td>
              <td>{log.status}</td>
              <td>{log.dateReported}</td>
              <td>{log.dateResolved}</td>

              <td>
                <button
                  className="edit-btn"
                  onClick={() => onEdit(logs.indexOf(log))}
                >
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
