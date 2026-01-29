
import { AutomationProject, MobileAppProject } from './types';

export const AUTOMATION_PROJECTS: AutomationProject[] = [
  {
    id: 'meeting-intel',
    title: 'Intelligent Meeting Intelligence Pipeline',
    concept: 'A system that ingests raw meeting transcripts, analyzes them using LLMs, and structures the data into a knowledge base.',
    role: 'Automation Architect',
    challenge: 'Professionals spend hours reviewing transcripts to extract action items, often missing key details due to fatigue.',
    solution: 'Built a "Listen & Organize" pipeline. The system detects new transcript files, parses the text, and utilizes GPT-4 to categorize content into "Key Decisions," "Action Items," and "Open Questions" before syncing to a team workspace.',
    techStack: ['OpenAI API', 'Make.com', 'Notion API', 'JSON'],
    steps: [
      { label: 'Trigger', description: '"Watch Folder" module (Google Drive/Dropbox) detects a new text/audio file.' },
      { label: 'Processing', description: 'Send content to OpenAI API with a structured PM system prompt to summarize and extract tasks.' },
      { label: 'Formatting', description: 'Use a JSON Parser node to separate output into distinct variables.' },
      { label: 'Action', description: 'Create a new Notion page populated with parsed Action Items.' }
    ]
  },
  {
    id: 'lead-nurture',
    title: 'Zero-Latency Lead Nurture Ecosystem',
    concept: 'An instant response system that captures leads, logs them in a CRM, and engages them immediately.',
    role: 'Backend Automation Specialist',
    challenge: 'Delayed follow-ups kill conversion rates. Manual data entry moves too slowly for modern digital marketing.',
    solution: 'Designed a completely automated funnel. Data is validated, stored, and engaged within 3 seconds of submission, ensuring zero lead leakage.',
    techStack: ['Webhooks', 'Airtable', 'Gmail API', 'Slack'],
    steps: [
      { label: 'Trigger', description: 'Webhook listener receives payload from landing page forms.' },
      { label: 'Validation', description: 'Filter node checks for valid email syntax and non-empty fields.' },
      { label: 'Database', description: 'Create record in Airtable to log lead status as "New".' },
      { label: 'Engagement', description: 'Gmail module sends a personalized follow-up with a Calendly link.' },
      { label: 'Notification', description: 'Slack alert to sales channel: "New Lead: [Name]".' }
    ]
  },
  {
    id: 'content-scheduler',
    title: 'Closed-Loop Content Scheduler & Tracker',
    concept: 'An automation handling the full lifecycle of social media content—from publishing to analytics reporting.',
    role: 'Workflow Engineer',
    challenge: 'Posting content is easy; tracking it is hard. Creators disconnect posting from performance analysis.',
    solution: 'A "Post & Track" system. It reads a content calendar, publishes automatically, and queries APIs later to report performance metrics.',
    techStack: ['Google Sheets', 'REST APIs', 'HTTP Requests', 'Cron Jobs'],
    steps: [
      { label: 'Trigger', description: 'Watch Rows in Google Sheets for "Ready to Post" status at specific times.' },
      { label: 'Action', description: 'HTTP POST request to LinkedIn/X API to publish text and imagery.' },
      { label: 'Update', description: 'Mark sheet row as "Published" and store the Post ID.' },
      { label: 'The Loop', description: '24-hour trigger queries the API for impressions/likes and updates the original sheet.' }
    ]
  }
];

// Inside src/constants.tsx
export const MOBILE_APPS = [
  {
    id: 1,
    name: "2Easy (Fitness Ecosystem)",
    tagline: "Fitness Made Simple.",
    description: "A streamlined application designed to remove friction from workout tracking, membership management, and scheduling. It bridges the gap between complex gym data and user-friendly progress tracking.",
    features: [
      "Workout Tracking",
      "Gym Scheduling",
      "Digital ID Membership",
      "Engagement Streaks"
    ],
    techStack: ["Flutter", "Firebase", "MongoDB", "Riverpod", "OAuth 2.0"],
    image: "/gym.png.png", // Make sure you have an image named gym.png or gym.jpg in your public folder
    projectUrl: "#"
  },
  {
    id: 2,
    name: "Be-commerce (Native Retail)",
    tagline: "Shop Smarter, Faster, Securely.",
    description: "A robust mobile shopping solution bridging the gap between complex online stores and native mobile performance. Handles the entire lifecycle from discovery to secure payment and logistics.",
    features: [
      "Dynamic Catalog",
      "Secure Stripe Checkout",
      "Order History & Invoices",
      "Real-time Logistics"
    ],
    techStack: ["Flutter", "Node.js", "Firebase", "Stripe SDK", "AWS S3"],
    image: "/checkout.png.png", // Update this filename to match your actual image
    projectUrl: "#"
  },
  {
    id: 3,
    name: "SchoolBase (Attendance Management)",
    tagline: "Secure Schools. Smart Attendance.",
    description: "An NFC-based attendance system simplifying student tracking for admins and security staff. Designed for offline reliability and rapid role-based access control.",
    features: [
      "Role-Based Access",
      "NFC Card Scanning",
      "Offline Sync (SQLite)",
      "Live Attendance Logs"
    ],
    techStack: ["Flutter", "Dart", "Provider", "NFC Manager", "SQLite"],
    image: "/nfc.jpeg.jpeg", // Update this filename to match your actual image
    projectUrl: "#"
  }
];