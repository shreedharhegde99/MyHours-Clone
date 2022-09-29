import { imageList } from "./ImagesList";

const { organize, setRates, trackTime, customReports, timeSpent, approveLogs } =
  imageList.howItWorks;

const topCards = [
  {
    image: organize,
    heading: "Organize your work with projects and tasks",
    details:
      "Breaking down your work into projects and tasks is done with a few keystrokes. Prioritize tasks, add details and assign them to your team to complete. Set up an estimated budget on a project or task level.",
  },
  {
    image: setRates,
    heading: "Set flexible billable rates and manage rate changes",
    details:
      "Every client, project, task and team member can be billed with a custom rate, but with smart defaults. And, when rates change, you decide how it applies to your past work.",
  },
  {
    image: trackTime,
    heading: "Track your time working with all the details",
    details:
      "Tracking work time is more than a few fields. Add styled notes to your logs, tag with custom keywords, attach files and enter expenses. With keyboard shortcuts, you can do it in no-time.",
  },
  {
    image: customReports,
    heading: "Dazzle your clients with custom reports",
    details:
      "No more one-style-fits-all reports. Go beyond filters and set up reports the way you or your clients want them, without having to retreat back to Excel.",
  },
  {
    image: timeSpent,
    heading: "Look at the time spent from every angle",
    details:
      "Fancy dashboards are not enough and with My Hours you can calculate your profit, generate real-time pivot tables or download a simple weekly timesheet.",
  },
  {
    image: approveLogs,
    heading: "Approve or comment on your team’s time logs  ",
    details:
      "Going through every timesheet is a hassle. Select a few projects or team members that might need a careful inspection, while other time logs do not need explicit approval.",
  },
];

export { topCards };
