// The single source of truth for the eight builds.
// Values are ported verbatim from the previous generator. No metrics, clients,
// testimonials, or deployment claims are added.

export type ProjectGroup = "web" | "ai" | "academic";

export type ProjectStatus =
  | "completed"
  | "build"
  | "prototype"
  | "academic project"
  | "in progress"
  | "internship build";

export interface Screenshot {
  src: string;
  alt: string;
  caption: string;
  tag: string;
  w: number;
  h: number;
}

export interface ScreenPanel {
  title: string;
  items: string[];
}

export interface Screens {
  title: string;
  caption: string;
  images?: Screenshot[];
  panels?: ScreenPanel[];
}

export interface WorkflowNode {
  label: string;
  note: string;
  accent?: boolean;
}

export interface Workflow {
  title: string;
  caption: string;
  nodes: WorkflowNode[];
  branch?: string;
}

export interface RoleRow {
  label: string;
  text: string;
}

export interface Feature {
  title: string;
  text: string;
}

export interface Challenge {
  constraint: string;
  response: string;
}

export interface StackGroup {
  group: string;
  items: string[];
}

export interface Pipeline {
  step: number;
}

export interface Project {
  slug: string;
  number: string;
  title: string;
  navTitle: string;
  category: string;
  group: ProjectGroup;
  status: ProjectStatus;
  year: string;
  stack: string[];
  summary: string;
  card: string;
  lead: string;
  overview: string[];
  problem: string;
  objectives: string[];
  role: RoleRow[];
  roleNote: string;
  tech: StackGroup[];
  features: Feature[];
  planned?: string[];
  workflow: Workflow;
  screens: Screens;
  challenges: Challenge[];
  statusDetail: string;
  notClaimed: string;
  pipeline?: Pipeline;
}

export const projects: Project[] = [
  {
    slug: "time-in-out",
    number: "01",
    title: "Employee Time-In / Time-Out Management System",
    navTitle: "time-in / time-out",
    category: "web application",
    group: "web",
    status: "completed",
    year: "2026",
    stack: ["Google Apps Script", "HTML", "CSS", "JavaScript", "Google Workspace"],
    summary: "A web-based attendance record for daily time-in and time-out entries.",
    card: "daily attendance, one record",
    lead: "An internal attendance tool built during the DepEd ICT internship. Employees record time-in and time-out in the browser; administrators get one central attendance record instead of scattered manual entries.",
    overview: [
      "The system digitizes the employee attendance log for daily office use. An employee opens the web app, records a time-in or time-out, and the entry lands in a central attendance record.",
      "The build was part of the DepEd ICT Unit internship in Antipolo. It was made for internal administrative use, not as a public product."
    ],
    problem: "Attendance records were kept as manual entries. The office needed a digital record that was easier to complete, easier to keep in one place, and easier for administrators to review.",
    objectives: [
      "Give employees a simple browser-based way to record time-in and time-out.",
      "Keep attendance entries in one central record.",
      "Give administrators a clear view of the day’s attendance.",
      "Reduce the manual work of collecting and checking attendance logs."
    ],
    role: [
      { label: "requirements", text: "Worked with end users to understand the attendance flow and the information the office needed to keep." },
      { label: "build", text: "Implemented the web app with Google Apps Script, HTML, CSS, and JavaScript." },
      { label: "testing", text: "Tested the time-in and time-out flow by hand and checked the resulting records before review by the IT Officer." },
      { label: "refinement", text: "Adjusted the interface and validation based on feedback from the people using it." }
    ],
    roleNote: "AI-assisted development tools were used for parts of the implementation. I reviewed the generated code, tested the flow, and refined the result rather than treating the output as finished.",
    tech: [
      { group: "build", items: ["Google Apps Script", "HTML", "CSS", "JavaScript"] },
      { group: "data", items: ["Google Workspace"] },
      { group: "environment", items: ["Browser-based internal web app"] }
    ],
    features: [
      { title: "Time-in and time-out", text: "A single control records the employee’s current attendance action." },
      { title: "Attendance record", text: "Entries are kept in one central list for administrative review." },
      { title: "Employee view", text: "The employee sees the current state and the entries recorded for the day." },
      { title: "Administrative view", text: "Administrators can review attendance records by employee and date." }
    ],
    workflow: {
      title: "The attendance route",
      caption: "Employee to time record to administrative review.",
      nodes: [
        { label: "employee", note: "opens the web app" },
        { label: "time-in / time-out", note: "records the action" },
        { label: "attendance record", note: "central entry" },
        { label: "admin review", note: "checks the record" }
      ]
    },
    screens: {
      title: "The two screens",
      caption: "The employee view records the action; the admin view reads the record.",
      panels: [
        { title: "employee view", items: ["current status", "time-in / time-out control", "today’s entries"] },
        { title: "admin view", items: ["employee list", "date filter", "attendance records"] }
      ]
    },
    challenges: [
      { constraint: "The office needed a digital record without adding a new desktop tool.", response: "The app runs in the browser and keeps the entry flow to one action." },
      { constraint: "The record has to be readable by the person who enters it and by the administrator who reviews it.", response: "The employee view and the admin view show the same entry from two angles." }
    ],
    statusDetail: "Completed and used during the DepEd ICT internship. No public deployment or usage metric is claimed.",
    notClaimed: "No attendance statistics, adoption figures, or client deployment are claimed on this page."
  },
  {
    slug: "vehicle-booking",
    number: "02",
    title: "Vehicle Drop-off / Pick-up Booking System",
    navTitle: "vehicle booking",
    category: "web application",
    group: "web",
    status: "completed",
    year: "2026",
    stack: ["Google Apps Script", "HTML", "CSS", "JavaScript", "Google Drive", "Google Sheets", "Gmail"],
    summary: "A booking app for vehicle drop-off and pick-up requests, with an admin approval dashboard and email notifications.",
    card: "vehicle requests, approvals, records",
    lead: "An internal booking tool built during the DepEd ICT internship. Requests are submitted in the browser, reviewed by an administrator, and kept in one organized record.",
    overview: [
      "The system organizes vehicle drop-off and pick-up requests in one web app. A requester submits the trip details, the request receives a control number, and an administrator reviews it in a dashboard.",
      "Booking data is kept in Google Drive and Google Sheets. The dashboard shows request totals by status and a searchable list of requests, and each request opens into a detail view.",
      "The build was part of the DepEd ICT Unit internship in Antipolo. It was made for internal administrative use."
    ],
    problem: "Vehicle requests were handled as separate messages and manual notes. The office needed one booking record, a clear approval state, and a notification that did not depend on someone re-typing the details.",
    objectives: [
      "Accept drop-off and pick-up requests in one form.",
      "Give each request a control number and a record.",
      "Let administrators review and update request status.",
      "Send an email notification when a booking is made.",
      "Keep booking data in Google Drive and Google Sheets."
    ],
    role: [
      { label: "requirements", text: "Worked with end users to map the booking request, the approval states, and the information the office needed to capture." },
      { label: "build", text: "Implemented the booking form, control numbers, admin dashboard, and email notification flow with Google Apps Script and a browser interface." },
      { label: "testing", text: "Tested the request-to-approval flow and the email notification by hand before review." },
      { label: "refinement", text: "Adjusted the form fields, status labels, and dashboard filters based on user feedback." }
    ],
    roleNote: "AI-assisted development tools were used for parts of the implementation. I reviewed the generated code, tested the flow, and refined the result rather than treating the output as finished.",
    tech: [
      { group: "build", items: ["Google Apps Script", "HTML", "CSS", "JavaScript"] },
      { group: "storage", items: ["Google Drive", "Google Sheets"] },
      { group: "notifications", items: ["Gmail"] }
    ],
    features: [
      { title: "Booking request form", text: "Captures the requester, contact details, trip type, passengers, vehicle, and schedule." },
      { title: "Control number", text: "Gives each request a reference number and a printable record." },
      { title: "Admin review", text: "Administrators sign in, open a request, and move it through pending, approved, declined, or rescheduled." },
      { title: "Request dashboard", text: "Shows request totals by status and a searchable list of bookings." },
      { title: "Request detail", text: "Keeps the requester, trip, vehicle, and admin notes together." },
      { title: "Email notification", text: "Sends the booking details to the people who need them." }
    ],
    workflow: {
      title: "The booking route",
      caption: "Request to control number to admin review to status, with the record kept in Drive and Sheets.",
      nodes: [
        { label: "request", note: "drop-off or pick-up" },
        { label: "booking form", note: "captures details" },
        { label: "control number", note: "record created" },
        { label: "admin review", note: "approve or decline", accent: true },
        { label: "records", note: "drive and sheets" }
      ]
    },
    screens: {
      title: "The booking screens",
      caption: "Captures from the booking app: the landing page, the request form, the admin sign-in, and the request dashboard.",
      images: [
        {
          src: "/assets/screens/vehicle-landing.png",
          alt: "Vehicle Booking System landing page with Book a Vehicle and Admin Login buttons.",
          caption: "The landing page: book a vehicle or open the admin side.",
          tag: "landing",
          w: 1920,
          h: 954
        },
        {
          src: "/assets/screens/vehicle-form.png",
          alt: "Vehicle Booking Request Form with requester and trip detail fields.",
          caption: "The request form captures the requester, contact details, trip type, passengers, and purpose.",
          tag: "request",
          w: 900,
          h: 860
        },
        {
          src: "/assets/screens/vehicle-admin-login.png",
          alt: "Admin login card for the Vehicle Booking Management System.",
          caption: "Administrators sign in before reviewing requests.",
          tag: "admin",
          w: 440,
          h: 500
        },
        {
          src: "/assets/screens/vehicle-dashboard.png",
          alt: "Admin dashboard showing request totals and a table of vehicle requests.",
          caption: "The admin dashboard: request totals, status filters, and the request list.",
          tag: "dashboard",
          w: 1919,
          h: 955
        }
      ]
    },
    challenges: [
      { constraint: "A request has to keep its details and its approval state in one place.", response: "The form creates a control number, and the admin dashboard carries that request through its statuses." },
      { constraint: "Requests need to be findable after the notification is sent.", response: "Every booking stays in the Drive and Sheets record with its control number and status." }
    ],
    statusDetail: "Completed and used during the DepEd ICT internship. The request form, control numbers, admin dashboard, and email notifications were part of the build. No public deployment or usage metric is claimed.",
    notClaimed: "No booking volume, adoption figures, or client deployment are claimed on this page."
  },
  {
    slug: "contract-renewal",
    number: "03",
    title: "Personnel Inventory: Contract Tracker & Automated Email Notification System",
    navTitle: "personnel inventory",
    category: "automation",
    group: "web",
    status: "build",
    year: "2026",
    stack: ["Google Forms", "Google Sheets", "Google Apps Script", "HTML", "CSS", "JavaScript", "Gmail"],
    summary: "A personnel contract inventory that connects a Google Form, a sheet database, a dashboard, and automated email reminders.",
    card: "personnel contracts, tracked to renewal",
    lead: "A Google Workspace automation that keeps personnel contract information in one inventory, monitors renewal dates in a dashboard, and sends email notifications. Super Admin and School Admin roles control what each administrator can see.",
    overview: [
      "The system connects Google Forms, Google Sheets, a web dashboard, and email notifications. A form submission becomes a row in the personnel inventory, the dashboard monitors contract and renewal details, and the email workflow notifies the people involved.",
      "The build includes two administrator roles. A Super Admin sees the whole organization and can export records; a School Admin sees the school assigned to them. The dashboard groups records into all records, renewal alerts, and archives."
    ],
    problem: "Contract details and renewal dates were spread across separate records. Administrators needed one personnel inventory that showed which contracts were due and a repeatable way to notify the people involved.",
    objectives: [
      "Collect personnel contract information through Google Forms.",
      "Keep the data in Google Sheets as the central inventory.",
      "Monitor contracts and renewal dates in a web dashboard.",
      "Send automated email notifications before a contract expires.",
      "Limit each administrator’s view to the records they are allowed to see."
    ],
    role: [
      { label: "design", text: "Designed the form-to-sheet-to-dashboard flow, the renewal alert states, and the role-based visibility model." },
      { label: "build", text: "Built the Google Forms and Google Sheets structure, the web dashboard, and the email notification workflow." },
      { label: "access", text: "Implemented Super Admin and School Admin views, including organization-wide visibility and export for the Super Admin." },
      { label: "testing", text: "Tested the form submission, dashboard views, role restrictions, and email notification by hand." }
    ],
    roleNote: "AI-assisted development tools were used for parts of the implementation. I reviewed the generated code, tested the flow, and refined the result rather than treating the output as finished.",
    tech: [
      { group: "collection", items: ["Google Forms"] },
      { group: "database", items: ["Google Sheets"] },
      { group: "dashboard", items: ["Google Apps Script", "HTML", "CSS", "JavaScript"] },
      { group: "notifications", items: ["Gmail"] }
    ],
    features: [
      { title: "Form collection", text: "Google Forms captures the personnel and contract information." },
      { title: "Sheet inventory", text: "Google Sheets holds the central personnel and renewal record." },
      { title: "Monitoring dashboard", text: "A web dashboard shows staff totals, contract details, and renewal status." },
      { title: "Renewal alerts", text: "Records are grouped into all records, renewal alerts, and archives." },
      { title: "Email notifications", text: "The workflow sends a renewal notice with the contract details and days remaining." },
      { title: "Super Admin view", text: "Organization-wide visibility and export." },
      { title: "School Admin view", text: "Access limited to the administrator’s assigned school." }
    ],
    workflow: {
      title: "The renewal route",
      caption: "Google Form to Google Sheet to dashboard to email, with a role-based branch.",
      nodes: [
        { label: "google form", note: "contract details" },
        { label: "google sheet", note: "inventory" },
        { label: "dashboard", note: "monitoring", accent: true },
        { label: "email", note: "renewal notice" }
      ],
      branch: "Super Admin sees all schools and exports. School Admin sees only the assigned school."
    },
    screens: {
      title: "The inventory screens",
      caption: "Captures from the personnel inventory: the dashboard, a staff record, the sign-in screen, and the renewal notice.",
      images: [
        {
          src: "/assets/screens/personnel-dashboard.png",
          alt: "Personnel Inventory dashboard with staff totals, renewal alerts, and a searchable staff table.",
          caption: "The dashboard: staff totals, renewal alerts, filters, and the staff record table.",
          tag: "dashboard",
          w: 1903,
          h: 800
        },
        {
          src: "/assets/screens/personnel-record.png",
          alt: "Personnel record detail showing contract and renewal information.",
          caption: "A staff record: contract duration, renewal date, appointment type, school, and years in service.",
          tag: "record",
          w: 600,
          h: 420
        },
        {
          src: "/assets/screens/personnel-login.png",
          alt: "Personnel Inventory sign-in screen.",
          caption: "Authorized access only: the sign-in screen for the inventory.",
          tag: "access",
          w: 450,
          h: 540
        },
        {
          src: "/assets/screens/personnel-email.png",
          alt: "Automated renewal notice email with contract details and days remaining.",
          caption: "The renewal notice: contract details, days remaining, and a request to coordinate with HR.",
          tag: "notification",
          w: 470,
          h: 770
        }
      ]
    },
    challenges: [
      { constraint: "A form response is easy to collect but hard to monitor over time.", response: "The sheet acts as the inventory, and the dashboard turns the rows into a contract and renewal list." },
      { constraint: "A single organization-wide view is not right for every administrator.", response: "Super Admin and School Admin roles limit each view to the records that administrator should see." },
      { constraint: "A renewal date is only useful if someone acts before it passes.", response: "The email workflow sends a notice with the contract details and the days remaining." }
    ],
    statusDetail: "Built as a Google Workspace automation. The form, sheet inventory, dashboard, roles, renewal alerts, and email workflow are the described build. No client deployment or usage metric is claimed.",
    notClaimed: "No renewal volume, adoption figures, or client deployment are claimed on this page."
  },
  {
    slug: "barbershop-manager",
    number: "04",
    title: "Barbershop Manager AI Assistant",
    navTitle: "barbershop manager",
    category: "ai automation",
    group: "ai",
    status: "prototype",
    year: "now",
    stack: ["n8n", "Google Gemini", "Facebook Messenger", "Google Docs", "Google Sheets", "Google Calendar"],
    summary: "A Messenger AI assistant that answers shop questions, checks appointment availability, and books appointments into Google Calendar.",
    card: "shop questions, availability, and bookings",
    lead: "An AI customer support and booking prototype for barbershops. The main assistant answers service questions in English, Tagalog, or Taglish, keeps conversation context, and calls two sub-workflows to check open slots and create a booking.",
    overview: [
      "The assistant runs as an n8n workflow. A Messenger message passes through the main workflow, which loads the shop instructions from Google Docs, calls Google Gemini with conversation memory, and can invoke two tools: one checks calendar availability, the other books an appointment.",
      "The booking sub-workflow validates the request, checks the slot again, creates a Google Calendar event, and logs the booking in Google Sheets. The availability sub-workflow builds a time window and reads open slots from the calendar.",
      "The project is a working prototype. Appointment changes, cancellations, and reminders are not implemented."
    ],
    problem: "Barbershop staff answer the same questions repeatedly and coordinate appointments by hand. The shop needed a way to answer common questions quickly, check real availability, and keep the booking record in one place.",
    objectives: [
      "Answer common barbershop questions in English, Tagalog, and Taglish.",
      "Keep the assistant’s instructions and shop information in a Google Doc.",
      "Maintain conversation context with a memory node.",
      "Check open appointment slots against Google Calendar.",
      "Create a booking and log it in Google Sheets.",
      "Send the assistant’s reply back through Messenger."
    ],
    role: [
      { label: "design", text: "Designed the conversation flow, the knowledge base structure, and the boundary between the assistant and the two booking sub-workflows." },
      { label: "prompt", text: "Wrote and refined the instructions for the model, including the language mix, the shop details, and the limits of the answers." },
      { label: "integration", text: "Connected Facebook Messenger, n8n, Google Gemini, Google Docs, Google Sheets, and Google Calendar." },
      { label: "testing", text: "Tested the reply flow, the availability check, the booking path, and the conversation log by hand." }
    ],
    roleNote: "AI-assisted development tools were used for parts of the implementation. I reviewed the workflow, tested the reply and booking paths, and refined the result rather than treating the output as finished.",
    tech: [
      { group: "channel", items: ["Facebook Messenger"] },
      { group: "automation", items: ["n8n"] },
      { group: "model", items: ["Google Gemini"] },
      { group: "knowledge", items: ["Google Docs"] },
      { group: "records", items: ["Google Sheets", "Google Calendar"] }
    ],
    features: [
      { title: "Multilingual replies", text: "Answers in English, Tagalog, and Taglish." },
      { title: "Shop knowledge base", text: "Uses a Google Docs document for the assistant’s instructions and shop information." },
      { title: "Conversation memory", text: "Keeps the exchange coherent with a memory node in the main workflow." },
      { title: "Availability checking", text: "Calls a sub-workflow that reads open slots from Google Calendar." },
      { title: "Appointment booking", text: "Calls a sub-workflow that validates the request, creates a calendar event, and logs the booking." },
      { title: "Booking record", text: "Keeps each confirmed appointment in Google Sheets." },
      { title: "Admin booking list", text: "A separate branch lists bookings from the Google Sheets record." }
    ],
    planned: [
      "Appointment changes and cancellations.",
      "Automated appointment reminders.",
      "Rescheduling from the Messenger conversation."
    ],
    workflow: {
      title: "The assistant route",
      caption: "Messenger to the main assistant, with Google Gemini and memory, then the availability and booking sub-workflows and a reply.",
      nodes: [
        { label: "messenger", note: "customer message" },
        { label: "main assistant", note: "instructions + memory" },
        { label: "gemini", note: "reply and tool choice" },
        { label: "availability", note: "sub-workflow" },
        { label: "booking", note: "sub-workflow", accent: true },
        { label: "reply", note: "sent back" }
      ],
      branch: "The booking sub-workflow validates the request, checks the slot, creates a Google Calendar event, and appends the booking to Google Sheets."
    },
    screens: {
      title: "The assistant workflows",
      caption: "Captures from n8n: the main assistant workflow and the two booking sub-workflows.",
      images: [
        {
          src: "/assets/screens/barbershop-main.png",
          alt: "n8n barbershop assistant workflow with Messenger, Google Docs, Gemini, memory, and booking tools.",
          caption: "The main assistant: Messenger trigger, shop instructions, Gemini, conversation memory, and the availability and booking tools.",
          tag: "main workflow",
          w: 980,
          h: 580
        },
        {
          src: "/assets/screens/barbershop-booking.png",
          alt: "n8n booking sub-workflow with validation, calendar availability, event creation, and Google Sheets logging.",
          caption: "The booking sub-workflow: validate the request, re-check the slot, create the calendar event, and log the booking.",
          tag: "sub-workflow",
          w: 1620,
          h: 545
        },
        {
          src: "/assets/screens/barbershop-availability.png",
          alt: "n8n availability sub-workflow reading open calendar slots.",
          caption: "The availability sub-workflow: build a time window and read open slots from Google Calendar.",
          tag: "sub-workflow",
          w: 1620,
          h: 570
        }
      ]
    },
    challenges: [
      { constraint: "Customers write in English, Tagalog, and Taglish, sometimes in the same message.", response: "The instructions and the knowledge base describe the language mix, and the reply stays in the customer’s register." },
      { constraint: "A booking can collide if the assistant only talks about availability.", response: "The availability sub-workflow reads the calendar, and the booking sub-workflow re-checks the slot before creating the event." },
      { constraint: "A chat is hard to review after it ends.", response: "The main workflow keeps conversation memory, and confirmed bookings are logged in Google Sheets." }
    ],
    statusDetail: "Working prototype. The Messenger assistant, availability check, and booking sub-workflows are built in n8n. Appointment changes, cancellations, and reminders are planned, not implemented.",
    notClaimed: "No booking volume, customer count, or client deployment is claimed on this page."
  },
  {
    slug: "youtube-clipper",
    number: "05",
    title: "YouTube Shorts Clipper",
    navTitle: "shorts clipper",
    category: "video pipeline",
    group: "ai",
    status: "prototype",
    year: "now",
    pipeline: { step: 1 },
    stack: ["n8n", "Google Gemini", "YouTube", "Google Drive"],
    summary: "An n8n workflow that turns a YouTube video into vertical, caption-free Shorts and uploads them to Google Drive.",
    card: "long video in, vertical clips out",
    lead: "The first stage of a shorts production pipeline. A form takes a YouTube URL and clip settings; the workflow downloads the source, transcribes it, asks Google Gemini to pick the strongest moments, cuts vertical clips, and uploads them to Google Drive.",
    overview: [
      "The clipper is built in n8n. A form submission starts the job. The workflow downloads the source video, gets and parses the transcript, builds candidate windows, and sends them to Google Gemini to pick the strongest moments. The selected ranges are cut into vertical clips and uploaded to a Google Drive folder.",
      "Clips are rendered without burned-in captions on purpose. Editing happens first; the Local Video Captioner adds styled captions afterward.",
      "The project is a working local prototype. The workflow runs from the request form to the Drive upload."
    ],
    problem: "Turning a long video into Shorts is repetitive: download, transcribe, find the moments worth keeping, cut them, reframe them, and upload the results. Doing each step by hand slows down a publishing schedule.",
    objectives: [
      "Accept a YouTube URL and clip settings in one form.",
      "Download the source and get its transcript.",
      "Use the transcript to build candidate clip windows.",
      "Ask Google Gemini to pick the strongest moments.",
      "Cut vertical, caption-free clips.",
      "Upload the clips to Google Drive and build a job report."
    ],
    role: [
      { label: "design", text: "Designed the job flow from form submission through download, transcript, moment selection, cuts, and Drive delivery." },
      { label: "build", text: "Built the n8n workflow, the request form, the clip settings, and the Drive upload path." },
      { label: "prompt", text: "Wrote the moment-selection prompt and tuned it against the candidate windows and the requested focus." },
      { label: "testing", text: "Tested the workflow end to end with sample videos and adjusted the cut and upload steps." }
    ],
    roleNote: "AI-assisted development tools were used for parts of the implementation. I reviewed the workflow, ran it against sample videos, and refined the result rather than treating the output as finished.",
    tech: [
      { group: "workflow", items: ["n8n"] },
      { group: "model", items: ["Google Gemini"] },
      { group: "source", items: ["YouTube"] },
      { group: "output", items: ["Google Drive"] }
    ],
    features: [
      { title: "Request form", text: "Takes the YouTube URL, clip count, framing, length, hook card, progress bar, audio polish, watermark, and cookie setting." },
      { title: "Transcript-driven windows", text: "Downloads the source, gets the transcript, and builds candidate moments from it." },
      { title: "AI moment picking", text: "Sends the candidate windows to Google Gemini and selects the strongest moments for the requested focus." },
      { title: "Vertical cuts", text: "Cuts the selected ranges into vertical clips with the chosen framing." },
      { title: "Drive delivery", text: "Creates a Drive folder and uploads the finished clips." },
      { title: "Job report", text: "Builds a report for the run after the clips are uploaded." }
    ],
    workflow: {
      title: "The clipper route",
      caption: "Form to download and transcript to moment selection to cuts to Google Drive.",
      nodes: [
        { label: "request form", note: "url and settings" },
        { label: "download + transcript", note: "source prepared" },
        { label: "pick moment", note: "gemini", accent: true },
        { label: "cut clips", note: "vertical, caption-free" },
        { label: "upload", note: "google drive" }
      ]
    },
    screens: {
      title: "The clipper screens",
      caption: "Captures from the clipper: the n8n workflow and the request form settings.",
      images: [
        {
          src: "/assets/screens/shorts-clipper-workflow.png",
          alt: "n8n YouTube Shorts Clipper workflow with download, transcript, Gemini moment selection, cuts, and Drive upload.",
          caption: "The clipper workflow: form submission, download, transcript, moment selection with Gemini, cuts, and Drive upload.",
          tag: "workflow",
          w: 1470,
          h: 658
        },
        {
          src: "/assets/screens/shorts-clipper-form.png",
          alt: "YouTube Shorts Clipper request form with framing, clip length, and audio settings.",
          caption: "The request form settings: framing, clip length, hook card, progress bar, audio polish, watermark, and cookies.",
          tag: "request form",
          w: 455,
          h: 910
        }
      ]
    },
    challenges: [
      { constraint: "A long video has more material than a Shorts run can use.", response: "The workflow builds candidate windows from the transcript and lets Gemini rank the strongest moments against the requested focus." },
      { constraint: "Burned-in captions make a clip harder to edit later.", response: "The clipper leaves the clips caption-free; the Local Video Captioner adds captions after editing." }
    ],
    statusDetail: "Working local prototype. The n8n workflow runs from the request form to the Drive upload. No public deployment or usage metric is claimed.",
    notClaimed: "No video volume, publishing schedule, or client deployment is claimed on this page."
  },
  {
    slug: "youtube-reclipper",
    number: "06",
    title: "YouTube Shorts Reclipper",
    navTitle: "shorts reclipper",
    category: "video pipeline",
    group: "ai",
    status: "prototype",
    year: "now",
    pipeline: { step: 2 },
    stack: ["n8n", "Google Gemini", "local source file"],
    summary: "An n8n workflow that re-cuts a saved source video into fresh caption-free Shorts without downloading it again.",
    card: "saved source, new clips",
    lead: "The second stage of the pipeline. It reuses the source video saved by an earlier clipper job, re-runs moment selection with new settings, and produces fresh caption-free clips without downloading the video again.",
    overview: [
      "The reclipper starts from a form that points at a saved source file or defaults to the newest job. It inspects the source, resolves the job folder, and either reuses the existing transcript and windows or builds new ones. Google Gemini picks a new set of moments, and the selected ranges are cut again.",
      "Because the source is already local, the workflow skips the download, cookies, and Drive upload steps. The output stays caption-free so the clips can be edited before captions are added.",
      "The project is a working local prototype. It is meant to run after the clipper, not as a replacement for it."
    ],
    problem: "A good source video often needs a second or third pass with different clip settings. Re-downloading and re-transcribing the source each time wastes work and slows down the next set of clips.",
    objectives: [
      "Reuse the source video saved by an earlier clipper job.",
      "Accept a new clip count, framing, focus, and length.",
      "Reuse the existing transcript when one is available.",
      "Ask Google Gemini to pick a fresh set of moments.",
      "Cut new caption-free clips without a download or Drive upload."
    ],
    role: [
      { label: "design", text: "Designed the reclip flow around the saved source, the job folder, and the existing transcript." },
      { label: "build", text: "Built the n8n workflow, the source resolution step, the reclip form, and the cut path." },
      { label: "prompt", text: "Reused the moment-selection prompt and adjusted it for a fresh pass over the same transcript." },
      { label: "testing", text: "Tested the reclip path against saved sources and checked that the new clips stayed caption-free." }
    ],
    roleNote: "AI-assisted development tools were used for parts of the implementation. I reviewed the workflow, ran it against saved sources, and refined the result rather than treating the output as finished.",
    tech: [
      { group: "workflow", items: ["n8n"] },
      { group: "model", items: ["Google Gemini"] },
      { group: "source", items: ["Saved local source video"] },
      { group: "output", items: ["Local clip folder"] }
    ],
    features: [
      { title: "Saved-source input", text: "Points at a job folder or path; a blank value uses the newest job." },
      { title: "Transcript reuse", text: "Uses the existing transcript and windows when the job already has them." },
      { title: "New moment selection", text: "Asks Google Gemini for a fresh set of moments based on the new focus." },
      { title: "New clip settings", text: "Takes a new clip count, framing, length, hook card, progress bar, audio polish, and watermark." },
      { title: "Local output", text: "Cuts the new clips on disk without a download or Drive upload." },
      { title: "Job report", text: "Builds a report for the reclip run." }
    ],
    workflow: {
      title: "The reclipper route",
      caption: "Form to saved source to transcript reuse to new moment selection to fresh cuts.",
      nodes: [
        { label: "request form", note: "saved source + settings" },
        { label: "inspect source", note: "job folder resolved" },
        { label: "reuse transcript", note: "or rebuild" },
        { label: "pick moment", note: "gemini", accent: true },
        { label: "cut clips", note: "caption-free" }
      ],
      branch: "If the job already has a transcript, it is reused; otherwise the workflow rebuilds it."
    },
    screens: {
      title: "The reclipper screens",
      caption: "Captures from the reclipper: the n8n workflow and the request form.",
      images: [
        {
          src: "/assets/screens/shorts-reclipper-workflow.png",
          alt: "n8n YouTube Shorts Reclipper workflow reusing a saved source and cutting a fresh set of clips.",
          caption: "The reclipper reuses a saved source, re-runs moment selection, and cuts a fresh set of clips.",
          tag: "workflow",
          w: 1520,
          h: 430
        },
        {
          src: "/assets/screens/shorts-reclipper-form.png",
          alt: "YouTube Shorts Reclipper request form with saved source and new clip settings.",
          caption: "The reclipper form points at a saved source and takes new clip settings; no download or Drive step.",
          tag: "request form",
          w: 455,
          h: 920
        }
      ]
    },
    challenges: [
      { constraint: "Re-downloading and re-transcribing a source for every new set of clips wastes work.", response: "The reclipper reads the saved source and reuses the existing transcript when the job has one." },
      { constraint: "A second pass should not overwrite the first set of clips.", response: "The reclip job resolves its own output folder and writes a new set of clips." }
    ],
    statusDetail: "Working local prototype. The reclipper runs against saved sources and writes a fresh set of caption-free clips. No public deployment or usage metric is claimed.",
    notClaimed: "No video volume, publishing schedule, or client deployment are claimed on this page."
  },
  {
    slug: "local-video-captioner",
    number: "07",
    title: "Local Video Captioner",
    navTitle: "video captioner",
    category: "video pipeline",
    group: "ai",
    status: "prototype",
    year: "now",
    pipeline: { step: 3 },
    stack: ["n8n", "Python", "clip_helper.py", "local video"],
    summary: "An n8n workflow that burns styled captions onto a local video after editing.",
    card: "edited clip in, captioned clip out",
    lead: "The final stage of the pipeline. It takes an edited local video, finds its subtitle track, and burns styled captions onto it with clip_helper.py, keeping the source resolution.",
    overview: [
      "The captioner runs after the clips have been edited. A form supplies the local video path, an optional subtitle path, and the caption style. The workflow prepares the job, calls clip_helper.py to burn the captions, parses the result, and builds a report.",
      "Subtitle lookup checks an explicit path first, then a matching .srt or .vtt beside the video, then an embedded text track. The output keeps the source resolution and is written to a captions folder with the ASS and JSON caption files.",
      "The project is a working local prototype. It does not download, cut, or reframe the video; it only adds captions."
    ],
    problem: "Captioning after editing is a separate manual step. Re-burning captions on every edit is slow and easy to get wrong, especially when the subtitle file and the video are handled separately.",
    objectives: [
      "Accept a local video and an optional subtitle path.",
      "Find a matching or embedded subtitle track when no path is given.",
      "Apply a caption style, position, and text effect.",
      "Burn the captions without changing the source resolution.",
      "Write the captioned video and its caption files to one output folder."
    ],
    role: [
      { label: "design", text: "Designed the caption job around the local video, the subtitle lookup, and the output folder." },
      { label: "build", text: "Built the n8n workflow, the caption form, and the clip_helper.py caption step." },
      { label: "styling", text: "Defined the caption styles, positions, and text effects exposed in the form." },
      { label: "testing", text: "Tested explicit subtitle paths, matching sidecar files, and embedded tracks against sample clips." }
    ],
    roleNote: "AI-assisted development tools were used for parts of the implementation. I reviewed the workflow, ran it against sample clips, and refined the result rather than treating the output as finished.",
    tech: [
      { group: "workflow", items: ["n8n"] },
      { group: "caption helper", items: ["Python", "clip_helper.py"] },
      { group: "source", items: ["Local video file"] },
      { group: "output", items: ["Captioned MP4, ASS, and JSON"] }
    ],
    features: [
      { title: "Local video input", text: "Takes any video path on disk." },
      { title: "Subtitle lookup", text: "Uses an explicit path, then a matching .srt or .vtt beside the video, then an embedded text track." },
      { title: "Caption styles", text: "Viral, Classic, Boxed, Minimal, and Neon." },
      { title: "Position and effect", text: "Upper, middle, or lower position with effects such as pop, shake, bounce, fade, word pop, or karaoke." },
      { title: "Resolution preserved", text: "Burns captions without cutting or reframing the source." },
      { title: "Caption files", text: "Writes the captioned MP4 plus the ASS and JSON caption files to one folder." }
    ],
    workflow: {
      title: "The captioner route",
      caption: "Form to job preparation to clip_helper.py caption burn-in to parsed output and a report.",
      nodes: [
        { label: "request form", note: "video and style" },
        { label: "prepare job", note: "subtitle lookup" },
        { label: "add captions", note: "clip_helper.py", accent: true },
        { label: "parse captions", note: "output checked" },
        { label: "report", note: "job summary" }
      ]
    },
    screens: {
      title: "The captioner screens",
      caption: "Captures from the captioner: the n8n workflow and the request form.",
      images: [
        {
          src: "/assets/screens/video-captioner-workflow.png",
          alt: "n8n Local Video Captioner workflow with job preparation, clip_helper.py caption burn-in, parsing, and a report.",
          caption: "The captioner workflow: prepare the job, burn captions with clip_helper.py, parse the result, and build a report.",
          tag: "workflow",
          w: 1490,
          h: 320
        },
        {
          src: "/assets/screens/video-captioner-form.png",
          alt: "Local Video Captioner request form with video path, caption style, position, and text effect.",
          caption: "The caption form takes a local video path, subtitle path, style, position, and text effect.",
          tag: "request form",
          w: 455,
          h: 920
        }
      ]
    },
    challenges: [
      { constraint: "A video may have an explicit subtitle file, a sidecar file, or an embedded track.", response: "The subtitle lookup checks those sources in order and reports the one it used." },
      { constraint: "Captions need to match the edited cut, not the original source.", response: "The captioner runs after editing and burns the captions onto the edited local video." }
    ],
    statusDetail: "Working local prototype. The captioner burns styled captions onto local videos and writes the output files. No public deployment or usage metric is claimed.",
    notClaimed: "No video volume, publishing schedule, or client deployment is claimed on this page."
  },
  {
    slug: "soletisfaction",
    number: "08",
    title: "Soletisfaction E-commerce, POS & Inventory Management System",
    navTitle: "soletisfaction",
    category: "academic",
    group: "academic",
    status: "academic project",
    year: "2025 to 2026",
    stack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    summary: "An academic capstone that brings an online catalog, point-of-sale, inventory, sales monitoring, and customer records into one system.",
    card: "catalog, pos, inventory, sales",
    lead: "A capstone project for a shoe reselling business. The system combines an online product catalog, point-of-sale transactions, inventory management, sales monitoring, and customer accounts in one platform.",
    overview: [
      "Soletisfaction is an academic capstone project for a shoe reselling business. The system was designed to manage online sales, in-store point-of-sale transactions, inventory, pricing, and customer information in one place.",
      "The project was built as a team capstone at STI College. The work covered front-end and back-end implementation, database management, and application testing."
    ],
    problem: "The business tracked online sales, in-store sales, and inventory separately. The manual process made it harder to see what was in stock, what had sold, and what the business had earned.",
    objectives: [
      "Create one product catalog for the online store and the point of sale.",
      "Manage product and inventory records.",
      "Record point-of-sale transactions.",
      "Monitor sales and income.",
      "Manage customer accounts and status.",
      "Send email notifications and give administrators a dashboard."
    ],
    role: [
      { label: "front end", text: "Built storefront and administrative interfaces with HTML, CSS, and JavaScript." },
      { label: "back end", text: "Implemented application logic with PHP and managed the MySQL database." },
      { label: "data", text: "Maintained product inventory, user data, and transaction records." },
      { label: "teamwork", text: "Collaborated on development tasks, code changes, debugging, and application improvements." }
    ],
    roleNote: "AI-assisted coding tools were used for parts of the implementation. I reviewed, tested, and refined the generated code with the team.",
    tech: [
      { group: "front end", items: ["HTML", "CSS", "JavaScript"] },
      { group: "back end", items: ["PHP"] },
      { group: "database", items: ["MySQL"] },
      { group: "features", items: ["E-commerce", "Point of sale", "Inventory", "Email notifications"] }
    ],
    features: [
      { title: "Online catalog", text: "Shows the product catalog for online sales." },
      { title: "Product and inventory management", text: "Keeps product records and stock information in one place." },
      { title: "Point of sale", text: "Records in-store transactions." },
      { title: "Sales and income monitoring", text: "Gives administrators a view of sales activity." },
      { title: "Pricing and markdowns", text: "Manages product prices and markdowns." },
      { title: "Customer accounts", text: "Keeps customer information and account status." },
      { title: "Email notifications", text: "Sends notifications for customer and order activity." },
      { title: "Administrative dashboard", text: "Centralizes the administrative views." }
    ],
    workflow: {
      title: "The sales route",
      caption: "Catalog to cart or POS to inventory to sales, with customer records and email notifications alongside.",
      nodes: [
        { label: "catalog", note: "products" },
        { label: "cart / pos", note: "transaction" },
        { label: "inventory", note: "stock update" },
        { label: "sales", note: "monitoring" },
        { label: "customer", note: "account and email" }
      ]
    },
    screens: {
      title: "The system screens",
      caption: "Captures from the admin and customer sides of the capstone.",
      images: [
        {
          src: "/assets/screens/soletisfaction-admin-products.png",
          alt: "Soletisfaction admin product list with prices, categories, stock, and markdowns.",
          caption: "The product list: prices, categories, stock, markdowns, and archive controls.",
          tag: "admin",
          w: 1006,
          h: 481
        },
        {
          src: "/assets/screens/soletisfaction-admin-dashboard.png",
          alt: "Soletisfaction admin dashboard with sales analytics and totals.",
          caption: "The admin dashboard: earnings, users, sales, active orders, and returns.",
          tag: "dashboard",
          w: 840,
          h: 394
        },
        {
          src: "/assets/screens/soletisfaction-customer-login.png",
          alt: "Soletisfaction customer login screen.",
          caption: "The customer sign-in screen for the online store.",
          tag: "customer",
          w: 1007,
          h: 446
        },
        {
          src: "/assets/screens/soletisfaction-catalog.png",
          alt: "Soletisfaction customer product catalog with category filters.",
          caption: "The customer catalog with category filters, prices, and stock status.",
          tag: "storefront",
          w: 1010,
          h: 445
        }
      ]
    },
    challenges: [
      { constraint: "Online sales, in-store sales, and inventory were tracked separately.", response: "The system keeps the catalog, the POS, and the inventory record in one platform." },
      { constraint: "A sale changes stock, sales totals, and customer records at once.", response: "The transaction flow updates the connected records together." }
    ],
    statusDetail: "Academic capstone, implemented as a team project at STI College. No commercial deployment is claimed.",
    notClaimed: "No sales figures, customer counts, or commercial deployment are claimed on this page."
  }
];

export const bySlug = new Map(projects.map((project) => [project.slug, project]));

export const projectSlugs = projects.map((project) => project.slug);
