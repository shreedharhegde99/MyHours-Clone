import { imageList } from "./ImagesList";

const {
  setBillable,
  templates,
  addTasks,
  projectBudget,
  estimateBudget,
  advancedBudget,
  timeTracking,
  detailedWorklog,
  expenseWithReceipts,
  flexibleBill,
  roundTime,
  markLogs,
  hourlyRate,
  expenses,
  calculateBalance,
  inviteTeam,
  flexibleRoles,
  teamActivity,
  editLogs,
  approval,
  trackingReminder,
  customReports,
  downloadReport,
  analyze,
  sendInvoice,
  personalize,
  sendEmail,
  quickbook,
  zapier,
  appleStore,
  playStore,
} = imageList.feature;

const featureCards = [
  {
    heading: `Organize projects`,
    details: [
      {
        title: `Set as billable`,
        desc: `Assign a project to a client and set as billable or not billable.`,
      },
      {
        title: `Add tasks and project members`,
        desc: `Describe tasks in detail, set billable rates for each. Add team members and tasks.`,
      },
      {
        title: `Templates`,
        desc: `Set up task templates and copy pre-set projects to speed up admin work.`,
      },
    ],
    images: [setBillable, addTasks, templates],
  },
  {
    heading: `Project budgeting`,
    details: [
      {
        title: `Set a project budget`,
        desc: `Decide how much time are you willing to spent on a project. Monthly retainers are supported.`,
      },
      {
        title: `Advanced budgeting`,
        desc: `Budget for hours, billable or cost amounts.`,
      },
      {
        title: `Estimate budgets per task`,
        desc: `Divide the entire budget into smaller steps with task budgeting.`,
      },
    ],
    images: [projectBudget, advancedBudget, estimateBudget],
  },
  {
    heading: `Track time and expenses`,
    details: [
      {
        title: `Time tracking`,
        desc: `Start a timer or add manually (or with a timesheet).`,
      },
      {
        title: `Detailed work logs`,
        desc: `Add versatile descriptions to time logs.`,
      },
      {
        title: `Add expenses with receipts`,
        desc: `Add attachments to specific time logs.`,
      },
    ],
    images: [timeTracking, detailedWorklog, expenseWithReceipts],
  },
  {
    heading: `Set billing rates`,
    details: [
      {
        title: `Flexible billable rates`,
        desc: `Hourly rates can be set per project, per task or team member.`,
      },
      {
        title: `Round time`,
        desc: `In order not to bill for every second your timer clocks, round your billable hours.
        `,
      },
      {
        title: `Mark logs as non-billable`,
        desc: `Logs like break and lunch can be marked as non-billable.`,
      },
    ],
    images: [flexibleBill, roundTime, markLogs],
  },
  {
    heading: `Track your costs`,
    details: [
      {
        title: `Set team member’s hourly rate`,
        desc: `Approximate hourly rates of your team in order to calculate the project costs.`,
      },
      {
        title: `Expenses`,
        desc: `Track expenses by adding the amount to specific time logs.`,
      },
      {
        title: `Calculate your balance`,
        desc: ` Calculate balance per Project, Client, Team member or Task.`,
      },
    ],
    images: [hourlyRate, expenses, calculateBalance],
  },

  {
    heading: `Manage your team`,
    details: [
      {
        title: `Invite your team`,
        desc: `Add unlimited team members for free and assign them to the projects.`,
      },
      {
        title: `Flexible roles`,
        desc: `Normal role can only track time. Project managers manage assigned projects.`,
      },
      {
        title: `Team activity`,
        desc: `View the past and current time logs of your team members.`,
      },
    ],
    images: [inviteTeam, flexibleRoles, teamActivity],
  },

  {
    heading: `Team workflow`,
    details: [
      {
        title: `Edit and add logs`,
        desc: ` Add, edit or delete logs of your team.`,
      },
      {
        title: `  Approvals`,
        desc: `Require approval of team’s logs from administrators`,
      },
      {
        title: `Tracking reminders`,
        desc: `Remind your team so they don't forget to track their time.`,
      },
    ],
    images: [editLogs, approval, trackingReminder],
  },

  {
    heading: `Report your work done`,
    details: [
      {
        title: ` From dashboard to custom report`,
        desc: `Start with a high-level view and dig deeper with advanced customized reports.`,
      },
      {
        title: `Download reports`,
        desc: `Download custom reports with your logo.`,
      },
      {
        title: `Analyze your time`,
        desc: `Use Team pivot, Weekly timesheet and Economy report to drill deeper into your team’s data.`,
      },
    ],
    images: [customReports, downloadReport, analyze],
  },

  {
    heading: `Invoicing`,
    details: [
      {
        title: `Send invoices easily`,
        desc: `Automatically add up the hours and amount and send an invoice.`,
      },
      {
        title: `Personalize`,
        desc: `Make a professional-looking, customizable invoice and impress.`,
      },
      {
        title: `PDF or send via email`,
        desc: `Download the invoice in a PDF form or send them directly to your clients.`,
      },
    ],
    images: [sendInvoice, personalize, sendEmail],
  },

  {
    heading: `Integrations`,
    details: [
      {
        title: `QuickBooks`,
        desc: `Connect My Hours with one of the most popular accounting apps.`,
      },
      {
        title: `Zapier`,
        desc: `Connect with Zapier and automate your workflow with 2000+ integrations.`,
      },
    ],
    images: [quickbook, zapier],
  },

  {
    heading: `Mobile apps`,
    details: [
      {
        title: `iOS mobile app`,
        desc: `Download the app for free from App Store.`,
      },
      {
        title: `Android mobile app`,
        desc: `Download the app for free from Google Play.`,
      },
    ],
    images: [appleStore, playStore],
  },
];

const moreFeatures = [
  {
    title: `Import timesheets`,
    details: `Easily transfer your timesheets, projects and clients to My Hours and start tracking more systematically.`,
  },
  {
    title: `Hide billing and cost`,
    details: `Hide the billing and cost details from your team.`,
  },
  {
    title: `Lock time logs`,
    details: `Auto-lock time logs for a specific period of time.`,
  },
  {
    title: `Audit log`,
    details: `Know how time tracking is being done in your team and find all the changes to the time logs.`,
  },
  {
    title: `Required fields`,
    details: `Required Project and Task inputs so a time log can be logged successfully.`,
  },
  {
    title: `Flexible settings`,
    details: `Set time, date and currency setting to your needs.`,
  },
];

const appsList = [
  {
    image:
      "https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5c77a918ef1968b24cbe7c02_section-5-img-web.png",
    title: "Web application",
    btnText: "Sign up",
  },
  {
    image:
      "https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5c77a918ef19686763be7c01_section-5-img-mobile.png",
    title: "iPhone - iOS app",
    btnText: "Download",
  },
  {
    image:
      "https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5c77a918ef19686763be7c01_section-5-img-mobile.png",
    title: "Android app",
    btnText: "Download",
  },
  {
    image:
      "https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5c77a918ef19686a74be7c00_section-5-img-desktop.png",
    title: "Desktop",
    btnText: "Coming soon...",
  },
];

export { featureCards, moreFeatures, appsList };
