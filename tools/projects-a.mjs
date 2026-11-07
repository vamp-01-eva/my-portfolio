// Project records 01 to 05. Content supplied by Mark Justine J. Mauricio.
// No metrics, clients, testimonials, or deployment claims are added.

export const projectsA = [
  {
    slug: 'time-in-out',
    number: '01',
    title: 'Employee Time-In / Time-Out Management System',
    navTitle: 'time-in / time-out',
    category: 'web application',
    group: 'web',
    status: 'completed',
    year: '2026',
    stack: ['Google Apps Script', 'HTML', 'CSS', 'JavaScript', 'Google Workspace'],
    summary: 'A web-based attendance record for daily time-in and time-out entries.',
    card: 'daily attendance, one record',
    lead: 'An internal attendance tool built during the DepEd ICT internship. Employees record time-in and time-out in the browser; administrators get one central attendance record instead of scattered manual entries.',
    overview: [
      'The system digitizes the employee attendance log for daily office use. An employee opens the web app, records a time-in or time-out, and the entry lands in a central attendance record.',
      'The build was part of the DepEd ICT Unit internship in Antipolo. It was made for internal administrative use, not as a public product.'
    ],
    problem: 'Attendance records were kept as manual entries. The office needed a digital record that was easier to complete, easier to keep in one place, and easier for administrators to review.',
    objectives: [
      'Give employees a simple browser-based way to record time-in and time-out.',
      'Keep attendance entries in one central record.',
      'Give administrators a clear view of the day\'s attendance.',
      'Reduce the manual work of collecting and checking attendance logs.'
    ],
    role: [
      { label: 'requirements', text: 'Worked with end users to understand the attendance flow and the information the office needed to keep.' },
      { label: 'build', text: 'Implemented the web app with Google Apps Script, HTML, CSS, and JavaScript.' },
      { label: 'testing', text: 'Tested the time-in and time-out flow by hand and checked the resulting records before review by the IT Officer.' },
      { label: 'refinement', text: 'Adjusted the interface and validation based on feedback from the people using it.' }
    ],
    roleNote: 'AI-assisted development tools were used for parts of the implementation. I reviewed the generated code, tested the flow, and refined the result rather than treating the output as finished.',
    tech: [
      { group: 'build', items: ['Google Apps Script', 'HTML', 'CSS', 'JavaScript'] },
      { group: 'data', items: ['Google Workspace'] },
      { group: 'environment', items: ['Browser-based internal web app'] }
    ],
    features: [
      { title: 'Time-in and time-out', text: 'A single control records the employee\'s current attendance action.' },
      { title: 'Attendance record', text: 'Entries are kept in one central list for administrative review.' },
      { title: 'Employee view', text: 'The employee sees the current state and the entries recorded for the day.' },
      { title: 'Administrative view', text: 'Administrators can review attendance records by employee and date.' }
    ],
    workflow: {
      title: 'The attendance route',
      caption: 'Employee to time record to administrative review.',
      nodes: [
        { label: 'employee', note: 'opens the web app' },
        { label: 'time-in / time-out', note: 'records the action' },
        { label: 'attendance record', note: 'central entry' },
        { label: 'admin review', note: 'checks the record' }
      ]
    },
    screens: {
      title: 'The two screens',
      caption: 'The employee view records the action; the admin view reads the record.',
      panels: [
        { title: 'employee view', items: ['current status', 'time-in / time-out control', 'today\'s entries'] },
        { title: 'admin view', items: ['employee list', 'date filter', 'attendance records'] }
      ]
    },
    challenges: [
      { constraint: 'The office needed a digital record without adding a new desktop tool.', response: 'The app runs in the browser and keeps the entry flow to one action.' },
      { constraint: 'The record has to be readable by the person who enters it and by the administrator who reviews it.', response: 'The employee view and the admin view show the same entry from two angles.' }
    ],
    statusDetail: 'Completed and used during the DepEd ICT internship. No public deployment or usage metric is claimed.',
    notClaimed: 'No attendance statistics, adoption figures, or client deployment are claimed on this page.'
  },
  {
    slug: 'vehicle-booking',
    number: '02',
    title: 'Vehicle Drop-off / Pick-up Booking System',
    navTitle: 'vehicle booking',
    category: 'web application',
    group: 'web',
    status: 'completed',
    year: '2026',
    stack: ['Google Apps Script', 'HTML', 'CSS', 'JavaScript', 'Gmail'],
    summary: 'A booking app for vehicle drop-off and pick-up requests, with ticket generation and email notifications.',
    card: 'vehicle requests, tickets, email',
    lead: 'An internal booking tool built during the DepEd ICT internship. A request becomes a ticket, the ticket triggers an email notification, and the booking stays in one organized record.',
    overview: [
      'The system organizes vehicle drop-off and pick-up requests in one web app. A requester submits the booking details, the app generates a ticket, and an email notification goes out.',
      'The build was part of the DepEd ICT Unit internship in Antipolo. It was made for internal administrative use.'
    ],
    problem: 'Vehicle requests were handled as separate messages and manual notes. The office needed a booking record that could be tracked, a ticket for each request, and a notification that did not depend on someone re-typing the details.',
    objectives: [
      'Accept drop-off and pick-up requests in one form.',
      'Generate a ticket for each booking.',
      'Send an email notification when a booking is made.',
      'Keep booking records organized and easy to track.'
    ],
    role: [
      { label: 'requirements', text: 'Worked with end users to map the booking request and the information the office needed to capture.' },
      { label: 'build', text: 'Implemented the booking form, ticket generation, and email notification flow with Google Apps Script and a browser interface.' },
      { label: 'testing', text: 'Tested the request-to-ticket flow and the email notification by hand before review.' },
      { label: 'refinement', text: 'Adjusted the form fields and the ticket details based on user feedback.' }
    ],
    roleNote: 'AI-assisted development tools were used for parts of the implementation. I reviewed the generated code, tested the flow, and refined the result rather than treating the output as finished.',
    tech: [
      { group: 'build', items: ['Google Apps Script', 'HTML', 'CSS', 'JavaScript'] },
      { group: 'notifications', items: ['Gmail'] },
      { group: 'data', items: ['Google Workspace'] }
    ],
    features: [
      { title: 'Booking form', text: 'Captures the requester, vehicle, drop-off, and pick-up details.' },
      { title: 'Ticket generation', text: 'Creates a ticket for each booking request.' },
      { title: 'Email notification', text: 'Sends the booking details to the people who need them.' },
      { title: 'Booking records', text: 'Keeps requests in one list for tracking and review.' }
    ],
    workflow: {
      title: 'The booking route',
      caption: 'Request to ticket to email to record.',
      nodes: [
        { label: 'request', note: 'drop-off or pick-up' },
        { label: 'booking form', note: 'captures details' },
        { label: 'ticket', note: 'generated' },
        { label: 'email', note: 'notification' },
        { label: 'records', note: 'tracked' }
      ]
    },
    screens: {
      title: 'The booking screens',
      caption: 'The form creates the request; the ticket and the record carry it forward.',
      panels: [
        { title: 'booking form', items: ['requester', 'vehicle', 'drop-off / pick-up', 'submit'] },
        { title: 'ticket', items: ['ticket number', 'booking details', 'status'] },
        { title: 'booking list', items: ['requests', 'dates', 'status'] }
      ]
    },
    challenges: [
      { constraint: 'A booking request has to become a ticket and an email without staff re-keying the details.', response: 'The form generates the ticket and triggers the notification from the same submission.' },
      { constraint: 'Requests need to be findable after the email is sent.', response: 'Every booking stays in a central record with its ticket and status.' }
    ],
    statusDetail: 'Completed and used during the DepEd ICT internship. Ticket generation and email notifications were part of the build. No public deployment or usage metric is claimed.',
    notClaimed: 'No booking volume, adoption figures, or client deployment are claimed on this page.'
  },
  {
    slug: 'conference-room',
    number: '03',
    title: 'Conference Room Booking System',
    navTitle: 'conference room',
    category: 'web application',
    group: 'web',
    status: 'completed',
    year: '2026',
    stack: ['Google Apps Script', 'HTML', 'CSS', 'JavaScript', 'Gmail'],
    summary: 'An internal room reservation system with centralized booking records and email notifications.',
    card: 'room reservations in one schedule',
    lead: 'An internal reservation tool built during the DepEd ICT internship. Room requests go into one schedule, and the booking triggers an email notification.',
    overview: [
      'The system simplifies conference room scheduling by keeping reservations in one web app. A requester selects a room and a time, and the booking is recorded and sent by email.',
      'The build was part of the DepEd ICT Unit internship in Antipolo. It was made for internal administrative use.'
    ],
    problem: 'Room requests were handled through separate messages and manual notes. The office needed one reservation record that showed what was booked, when, and by whom.',
    objectives: [
      'Accept conference room reservations in one form.',
      'Keep room bookings in a central record.',
      'Send an email notification for each reservation.',
      'Make the room schedule easier to review and track.'
    ],
    role: [
      { label: 'requirements', text: 'Worked with end users to understand how rooms were requested and how conflicts were checked.' },
      { label: 'build', text: 'Implemented the reservation form, booking record, and email notification with Google Apps Script and a browser interface.' },
      { label: 'testing', text: 'Tested the reservation flow and the notification by hand before review.' },
      { label: 'refinement', text: 'Adjusted the form and the booking details based on user feedback.' }
    ],
    roleNote: 'AI-assisted development tools were used for parts of the implementation. I reviewed the generated code, tested the flow, and refined the result rather than treating the output as finished.',
    tech: [
      { group: 'build', items: ['Google Apps Script', 'HTML', 'CSS', 'JavaScript'] },
      { group: 'notifications', items: ['Gmail'] },
      { group: 'data', items: ['Google Workspace'] }
    ],
    features: [
      { title: 'Room reservation', text: 'Captures the room, date, time, and requester.' },
      { title: 'Central booking record', text: 'Keeps reservations in one list.' },
      { title: 'Email notification', text: 'Sends the reservation details to the people who need them.' },
      { title: 'Reservation tracking', text: 'Makes the room schedule easier to review.' }
    ],
    workflow: {
      title: 'The reservation route',
      caption: 'Request to room record to email.',
      nodes: [
        { label: 'request', note: 'room and time' },
        { label: 'reservation form', note: 'captures details' },
        { label: 'room record', note: 'central booking' },
        { label: 'email', note: 'notification' }
      ]
    },
    screens: {
      title: 'The reservation screens',
      caption: 'The form takes the request; the record and the email keep it visible.',
      panels: [
        { title: 'reservation form', items: ['room', 'date', 'time', 'requester'] },
        { title: 'room record', items: ['bookings', 'schedule', 'status'] },
        { title: 'notification', items: ['room', 'time', 'requester'] }
      ]
    },
    challenges: [
      { constraint: 'Room requests can collide when they live in separate messages.', response: 'One reservation record keeps the room, date, and time together.' },
      { constraint: 'The people involved need the booking without checking the app.', response: 'The reservation triggers an email notification.' }
    ],
    statusDetail: 'Completed and used during the DepEd ICT internship. Email notifications were part of the build. No public deployment or usage metric is claimed.',
    notClaimed: 'No booking volume, adoption figures, or client deployment are claimed on this page.'
  },
  {
    slug: 'contract-audit',
    number: '04',
    title: 'Personnel Contract Audit & Renewal System',
    navTitle: 'contract audit',
    category: 'web application',
    group: 'web',
    status: 'in progress',
    year: '2026',
    stack: ['Google Apps Script', 'HTML', 'CSS', 'JavaScript', 'Gmail'],
    summary: 'An administrative contract record with renewal tracking and email notification workflows. Partially developed.',
    card: 'contract renewals, tracked',
    lead: 'An internal contract monitoring tool started during the DepEd ICT internship. It keeps personnel contract information and renewal dates in one place and uses email workflows to flag renewals. The build was not fully completed.',
    overview: [
      'The system was designed to help administrators manage personnel contract information and monitor renewals. It combines a contract record, renewal tracking, and email notification workflows.',
      'The project was partially developed during the internship. It is presented here as an in-progress build, not a completed deployment.'
    ],
    problem: 'Contract details and renewal dates were spread across separate records. Administrators needed a central view of which contracts were due and a repeatable way to notify the people involved.',
    objectives: [
      'Keep personnel contract information in one record.',
      'Track renewal dates and the status of each contract.',
      'Use email workflows to notify the people involved.',
      'Give administrators a clearer monitoring view.'
    ],
    role: [
      { label: 'requirements', text: 'Worked with end users to identify the contract fields and the renewal information the office needed to track.' },
      { label: 'build', text: 'Implemented the contract record, renewal tracking, and email workflow with Google Apps Script and a browser interface.' },
      { label: 'testing', text: 'Tested the record and notification flow by hand while the build was in progress.' },
      { label: 'handover', text: 'Documented the unfinished parts so the next person could continue the work.' }
    ],
    roleNote: 'AI-assisted development tools were used for parts of the implementation. I reviewed and tested the generated code. The project was not fully completed during the internship.',
    tech: [
      { group: 'build', items: ['Google Apps Script', 'HTML', 'CSS', 'JavaScript'] },
      { group: 'notifications', items: ['Gmail'] },
      { group: 'data', items: ['Google Workspace'] }
    ],
    features: [
      { title: 'Contract record', text: 'Keeps personnel contract information in one place.' },
      { title: 'Renewal tracking', text: 'Shows the renewal date and the status of each contract.' },
      { title: 'Email workflow', text: 'Prepares notifications for the people involved in a renewal.' },
      { title: 'Administrative view', text: 'Gives administrators a monitoring view of the contract list.' }
    ],
    workflow: {
      title: 'The renewal route',
      caption: 'Contract record to renewal date to email workflow to admin review.',
      nodes: [
        { label: 'contract record', note: 'personnel details' },
        { label: 'renewal date', note: 'tracked' },
        { label: 'email workflow', note: 'notification' },
        { label: 'admin review', note: 'monitoring' }
      ]
    },
    screens: {
      title: 'The monitoring screens',
      caption: 'The contract list and the renewal detail are the two main views.',
      panels: [
        { title: 'contract list', items: ['personnel', 'contract status', 'renewal date'] },
        { title: 'renewal detail', items: ['contract information', 'renewal date', 'notification status'] },
        { title: 'admin view', items: ['due renewals', 'status', 'records'] }
      ]
    },
    challenges: [
      { constraint: 'Renewal dates and contract details live across separate records.', response: 'One contract record keeps the personnel details and the renewal date together.' },
      { constraint: 'The build had to stop before every planned workflow was finished.', response: 'The completed parts are documented, and the unfinished parts are named as unfinished.' }
    ],
    statusDetail: 'Partially developed during the DepEd ICT internship. The contract record, renewal tracking, and email workflow were in progress; the project was not fully completed.',
    notClaimed: 'This page does not present the system as finished, deployed, or used for live contract decisions.'
  },
  {
    slug: 'account-requests',
    number: '05',
    title: 'Account Request Management Dashboard',
    navTitle: 'account requests',
    category: 'web application',
    group: 'web',
    status: 'internship build',
    year: '2026',
    stack: ['Google Apps Script', 'HTML', 'CSS', 'JavaScript', 'Google Workspace'],
    summary: 'A single queue for Google and Microsoft account requests, with admin roles, approval states, and activity logs.',
    card: 'account requests, roles, activity log',
    lead: 'An internal dashboard built during the DepEd ICT internship. Teachers submit account requests, administrators review them, and every request keeps its status and activity history.',
    overview: [
      'The dashboard centralizes teacher account requests for Google and Microsoft accounts. A request enters one queue, an administrator reviews it, and the request moves through a visible approval state.',
      'The design includes multiple administrator roles and an activity log so the office can see who reviewed or changed a request. The build was part of the DepEd ICT Unit internship in Antipolo.'
    ],
    problem: 'Account requests arrived through different channels, and administrators needed different levels of access. The office needed one queue, a clear approval state, and a record of who did what.',
    objectives: [
      'Collect Google and Microsoft account requests in one queue.',
      'Support multiple administrator roles.',
      'Make the approval workflow and request status visible.',
      'Keep an activity log for administrative review.'
    ],
    role: [
      { label: 'requirements', text: 'Worked with end users to map the request types, the administrator roles, and the approval states.' },
      { label: 'build', text: 'Implemented the request queue, request detail, role-based views, and activity log with Google Apps Script and a browser interface.' },
      { label: 'testing', text: 'Tested the request flow and the role views by hand before review by the IT Officer.' },
      { label: 'refinement', text: 'Adjusted the status labels and the admin view based on user feedback.' }
    ],
    roleNote: 'AI-assisted development tools were used for parts of the implementation. I reviewed the generated code, tested the flow, and refined the result rather than treating the output as finished.',
    tech: [
      { group: 'build', items: ['Google Apps Script', 'HTML', 'CSS', 'JavaScript'] },
      { group: 'accounts', items: ['Google Workspace', 'Microsoft 365'] },
      { group: 'data', items: ['Google Workspace'] }
    ],
    features: [
      { title: 'Request queue', text: 'Google and Microsoft account requests land in one list.' },
      { title: 'Request detail', text: 'Shows the requester, the account type, and the current state.' },
      { title: 'Administrator roles', text: 'Gives different administrators different levels of access.' },
      { title: 'Approval workflow', text: 'Moves a request through review and approval states.' },
      { title: 'Status monitoring', text: 'Makes the current state of each request visible.' },
      { title: 'Activity log', text: 'Records administrative actions for review.' }
    ],
    workflow: {
      title: 'The request route',
      caption: 'Teacher request to queue to admin review to approval or return, with an activity log alongside.',
      nodes: [
        { label: 'teacher request', note: 'Google or Microsoft' },
        { label: 'request queue', note: 'one list' },
        { label: 'admin review', note: 'role-based' },
        { label: 'approval', note: 'status' },
        { label: 'activity log', note: 'record' }
      ]
    },
    screens: {
      title: 'The dashboard screens',
      caption: 'The queue, the request detail, and the activity log are the main views.',
      panels: [
        { title: 'request queue', items: ['account type', 'requester', 'status', 'assigned admin'] },
        { title: 'request detail', items: ['request information', 'approval state', 'admin notes'] },
        { title: 'activity log', items: ['action', 'administrator', 'time'] }
      ]
    },
    challenges: [
      { constraint: 'Requests arrive through different channels and administrators need different views.', response: 'One queue holds every request, and role-based views show each administrator the requests they can act on.' },
      { constraint: 'An approval is only useful if the office can see how it happened.', response: 'The activity log records the administrative actions around each request.' }
    ],
    statusDetail: 'Built during the DepEd ICT internship. The dashboard, roles, approval flow, and activity log are described from the project scope. No public deployment or usage metric is claimed.',
    notClaimed: 'No request volume, adoption figures, or client deployment are claimed on this page.'
  }
];
