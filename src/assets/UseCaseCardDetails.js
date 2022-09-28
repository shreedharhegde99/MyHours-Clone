import { imageList } from "./ImagesList";
const {
  billing,
  timeReports,
  timesheet,
  expenseTracking,
  attendance,
  projectProfitability,
} = imageList.usecaseImages;
const cardDetails = [
  [
    {
      image: billing,
      heading: "Project billing",
      details:
        "Choose the billing method that is fair for your client and represents your actual work.",
    },
    {
      image: expenseTracking,
      heading: "Expense tracking",
      details:
        "Get expenses of your mind and into your invoice, without losing a cent or a receipt.",
      color: true,
    },
  ],
  [
    {
      image: timeReports,
      heading: "Time reports & Project analytics",
      details:
        "Always know how much time has been spent on your projects and tasks in a specific period of time with easy-to-create reports.",
    },
    {
      image: projectProfitability,
      heading: "Calculating project profitability",
      details:
        "Grow your business faster by prioritizing the projects that are worth your time, effort and resources.",
    },
  ],
  [
    {
      image: attendance,
      heading: "Attendance & Absence",
      details: `Know who was present at work and track absences and the reasons behind them.
     Make your payroll faster and more accurate by exporting all the tracked data.
      Time, attendance and absence tracking in one streamlined solution.`,
      color: true,
    },
    {
      image: timesheet,
      heading: "Timesheet time tracking",
      details:
        "Track time just as you are used to, but simpler Because you are tired of using unmanageable stacks of paper, excel templates, or complex apps week in week out.  ",
    },
  ],
];

export { cardDetails };
