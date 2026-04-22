export type Log = {
  name: string;
  category: string;
  description: string;
  status: string;
  dateReported: string;
  dateResolved: string;
};

export type Agent = {
  name: string;
  position: string;
  department: string;
};

export const emptyForm: Log = {
  name: "",
  category: "",
  description: "",
  status: "New",
  dateReported: "",
  dateResolved: "N/A",
};
