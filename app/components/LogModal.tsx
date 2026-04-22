import { Log } from "../types";

type LogModalProps = {
  showModal: boolean;
  form: Log;
  editIndex: number | null;
  onSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => void;
  onClose: () => void;
};

export default function LogModal({
  showModal,
  form,
  editIndex,
  onSubmit,
  onChange,
  onClose,
}: LogModalProps) {
  if (!showModal) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>{editIndex !== null ? "Edit Log" : "New Log"}</h3>
        <form onSubmit={onSubmit}>
          <label>Name</label>
          <input name="name" value={form.name} onChange={onChange} required />

          <label>Category</label>
          <select name="category" value={form.category} onChange={onChange}>
            <option value="Billing">Billing</option>
            <option value="Account">Account</option>
            <option value="Server-side">Server-side</option>
            <option value="Client-side">Client-side</option>
            <option value="Miscellaneous">Miscellaneous</option>
          </select>

          <label>Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={onChange}
            required
          />

          <label>Status</label>
          <select name="status" value={form.status} onChange={onChange}>
            <option value="New">New</option>
            <option value="Open">Open</option>
            <option value="Urgent">Urgent</option>
            <option value="Resolved">Resolved</option>
          </select>

          <label>Date/Time Resolved</label>
          <input
            name="dateResolved"
            value={form.dateResolved}
            onChange={onChange}
            placeholder="N/A"
          />

          <div className="modal-actions">
            <button type="submit">Submit</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
