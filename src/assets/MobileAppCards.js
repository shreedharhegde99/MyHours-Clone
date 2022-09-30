import { imageList } from "./ImagesList";

const {
  mobileTime,
  organize,
  mobileTimeReport,
  setRates,
  reminders,
  trackTime,
  saveMoney,
  findAndFix,
  beMobile,
} = imageList.mobileApp;

const cardDetails = [
  {
    image: mobileTime,
    title: `
  Mobile time tracking`,
    subtitle: `Log your work hours with a simple click in the time tracking app.`,
    details: [
      "Start, stop or pause tracking instantly",
      "Add projects, tasks and tags to logs",
      "Add favorite time logs",
      "Enter description for each time log",
    ],
    reverse: false,
  },
  {
    image: organize,
    title: `Organize your work`,
    subtitle: `Edit your projects and add to-do lists and tasks. Keep an eye on your project at all times.`,
    details: [
      "Create projects",
      "Add team members",
      "Create to-do lists and add tasks",
      "Oversee your budget and total project hours",
    ],
    reverse: true,
  },
  {
    image: mobileTimeReport,
    title: `Mobile time reporting`,
    subtitle: `Insightful reports on time and billable amount spent on your projects. Ideal for a quick check-up.`,
    details: [
      "Custom date range",
      "Total hours and billable amout for specific time period",
      "Filter by project, client, task or team",
      "Reporting on the go",
    ],
    reverse: false,
  },
  {
    image: setRates,
    title: `Set billable rates`,
    subtitle: `Custom billable rates for your projects and additional expenses for time logs.`,
    details: [
      "Project, team member, task based rates",
      "Non-billable time logs",
      "Additional expenses",
    ],
    reverse: true,
  },
  {
    image: reminders,
    title: `Reminders`,
    subtitle: `Set helpful reminders that help you and your team to remember to track your work hours.`,
    details: [
      "Set a daily working routine",
      "Notifications to start or stop tracking time",
      "Optional for every user",
    ],
    reverse: false,
  },
];

const benefits = [
  {
    image: trackTime,
    title: `Track time easily`,
    details: `Always be on top of your time at work with precisely tracking your work hours.`,
  },
  {
    image: saveMoney,
    title: `Save money`,
    details: `Get the most money for time spent at work with accurate billing and invoicing.`,
  },
  {
    image: findAndFix,
    title: `Find and fix time tracking mistakes`,
    details: `Analyze your work hours with ease, by going through your time logs if needed.`,
  },
  {
    image: beMobile,
    title: `Be mobile`,
    details: `Track time from anywhere at any time with My Hours mobile time tracking.`,
  },
];

export { cardDetails, benefits };
