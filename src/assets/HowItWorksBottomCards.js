import { imageList } from "./ImagesList";
const {
  emailReports,
  createInvoice,
  accessRoles,
  calculateCosts,
  integrations,
  mobileApp,
} = imageList.howItWorks;

const bottomCardsOne = [
  {
    image: emailReports,
    heading: "Keep clients in the loop with scheduled email reports",
    details:
      "Setting and downloading reports each month takes precious time. Save your report settings and have My Hours send it to you or your clients directly every period.",
  },
  {
    image: createInvoice,
    heading: "Create invoices straight from your tracked hours",
    details:
      "No need for an additional tool that handles the invoicing. Calculate the billable amount for each client and generate a numbered invoice that can be sent via email straight away.",
  },
  {
    image: accessRoles,
    heading: "Flexible, but simple access roles",
    details:
      "With a simple 3-role system, you’ll always know who sees what. You can hide costs and billable amounts from anyone, except account administrators.",
  },
  {
    image: calculateCosts,
    heading: "Count your chickens and calculate your costs",
    details:
      "On top of billable rates, teams can add labor costs and expenses. Monitor your project costs with a (monthly) budget and calculate your profits or losses.",
  },
];

const bottomCardsTwo = [
  {
    image: integrations,
    heading: "Sync your data with more than a 1000 tools",
    details:
      "Transfer clients, projects and tasks from Quickbooks and other solutions via Zapier. Documented API enables tech-savvy folks to build their own integrations.",
  },
  {
    image: mobileApp,
    heading: "Track time on the go with a mobile app",
    details:
      "Besides tracking time, add new projects, manage tasks and view reports - all through our mobile apps. Both iOS and Android are supported",
  },
];

export { bottomCardsOne, bottomCardsTwo };
