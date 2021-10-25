export const board = {
  id: "board",
  userId: "",
  tasks: [],
  title: "",
  priorities: [
    {value: "high", display: "High"},
    {value: "medium", display: "Medium"},
    {value: "low", display: "Low"}
  ],
  sortBy: "",
  sortByOptions: [
    {value: "priority", display: "Priority"},
    {value: "dueDate", display:"Due Date"}
  ],
  createdOn: 0,
  description: ""
};
