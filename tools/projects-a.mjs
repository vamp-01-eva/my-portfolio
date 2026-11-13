// Project records 01 to 03. Content supplied by Mark Justine J. Mauricio.
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
    stack: ['Google Apps Script', 'HTML', 'CSS', 'JavaScript', 'Google Drive', 'Google Sheets', 'Gmail'],
    summary: 'A booking app for vehicle drop-off and pick-up requests, with an admin approval dashboard and email notifications.',
    card: 'vehicle requests, approvals, records',
    lead: 'An internal booking tool built during the DepEd ICT internship. Requests are submitted in the browser, reviewed by an administrator, and kept in one organized record.',
    overview: [
      'The system organizes vehicle drop-off and pick-up requests in one web app. A requester submits the trip details, the request receives a control number, and an administrator reviews it in a dashboard.',
      'Booking data is kept in Google Drive and Google Sheets. The dashboard shows request totals by status and a searchable list of requests, and each request opens into a detail view.',
      'The build was part of the DepEd ICT Unit internship in Antipolo. It was made for internal administrative use.'
    ],
    problem: 'Vehicle requests were handled as separate messages and manual notes. The office needed one booking record, a clear approval state, and a notification that did not depend on someone re-typing the details.',
    objectives: [
      'Accept drop-off and pick-up requests in one form.',
      'Give each request a control number and a record.',
      'Let administrators review and update request status.',
      'Send an email notification when a booking is made.',
      'Keep booking data in Google Drive and Google Sheets.'
    ],
    role: [
      { label: 'requirements', text: 'Worked with end users to map the booking request, the approval states, and the information the office needed to capture.' },
      { label: 'build', text: 'Implemented the booking form, control numbers, admin dashboard, and email notification flow with Google Apps Script and a browser interface.' },
      { label: 'testing', text: 'Tested the request-to-approval flow and the email notification by hand before review.' },
      { label: 'refinement', text: 'Adjusted the form fields, status labels, and dashboard filters based on user feedback.' }
    ],
    roleNote: 'AI-assisted development tools were used for parts of the implementation. I reviewed the generated code, tested the flow, and refined the result rather than treating the output as finished.',
    tech: [
      { group: 'build', items: ['Google Apps Script', 'HTML', 'CSS', 'JavaScript'] },
      { group: 'storage', items: ['Google Drive', 'Google Sheets'] },
      { group: 'notifications', items: ['Gmail'] }
    ],
    features: [
      { title: 'Booking request form', text: 'Captures the requester, contact details, trip type, passengers, vehicle, and schedule.' },
      { title: 'Control number', text: 'Gives each request a reference number and a printable record.' },
      { title: 'Admin review', text: 'Administrators sign in, open a request, and move it through pending, approved, declined, or rescheduled.' },
      { title: 'Request dashboard', text: 'Shows request totals by status and a searchable list of bookings.' },
      { title: 'Request detail', text: 'Keeps the requester, trip, vehicle, and admin notes together.' },
      { title: 'Email notification', text: 'Sends the booking details to the people who need them.' }
    ],
    workflow: {
      title: 'The booking route',
      caption: 'Request to control number to admin review to status, with the record kept in Drive and Sheets.',
      nodes: [
        { label: 'request', note: 'drop-off or pick-up' },
        { label: 'booking form', note: 'captures details' },
        { label: 'control number', note: 'record created' },
        { label: 'admin review', note: 'approve or decline', accent: true },
        { label: 'records', note: 'drive and sheets' }
      ]
    },
    screens: {
      title: 'The booking screens',
      caption: 'Captures from the booking app: the landing page, the request form, the admin sign-in, and the request dashboard.',
      images: [
        {
          src: 'assets/screens/vehicle-landing.png',
          alt: 'Vehicle Booking System landing page with Book a Vehicle and Admin Login buttons.',
          caption: 'The landing page: book a vehicle or open the admin side.',
          tag: 'landing',
          wide: true,
          w: 1920,
          h: 954
        },
        {
          src: 'assets/screens/vehicle-form.png',
          alt: 'Vehicle Booking Request Form with requester and trip detail fields.',
          caption: 'The request form captures the requester, contact details, trip type, passengers, and purpose.',
          tag: 'request',
          w: 900,
          h: 860
        },
        {
          src: 'assets/screens/vehicle-admin-login.png',
          alt: 'Admin login card for the Vehicle Booking Management System.',
          caption: 'Administrators sign in before reviewing requests.',
          tag: 'admin',
          w: 440,
          h: 500
        },
        {
          src: 'assets/screens/vehicle-dashboard.png',
          alt: 'Admin dashboard showing request totals and a table of vehicle requests.',
          caption: 'The admin dashboard: request totals, status filters, and the request list.',
          tag: 'dashboard',
          wide: true,
          w: 1919,
          h: 955
        }
      ]
    },
    challenges: [
      { constraint: 'A request has to keep its details and its approval state in one place.', response: 'The form creates a control number, and the admin dashboard carries that request through its statuses.' },
      { constraint: 'Requests need to be findable after the notification is sent.', response: 'Every booking stays in the Drive and Sheets record with its control number and status.' }
    ],
    statusDetail: 'Completed and used during the DepEd ICT internship. The request form, control numbers, admin dashboard, and email notifications were part of the build. No public deployment or usage metric is claimed.',
    notClaimed: 'No booking volume, adoption figures, or client deployment are claimed on this page.'
  },
  {
    slug: 'contract-renewal',
    number: '03',
    title: 'Personnel Inventory: Contract Tracker & Automated Email Notification System',
    navTitle: 'personnel inventory',
    category: 'automation',
    group: 'web',
    status: 'build',
    year: '2026',
    stack: ['Google Forms', 'Google Sheets', 'Google Apps Script', 'HTML', 'CSS', 'JavaScript', 'Gmail'],
    summary: 'A personnel contract inventory that connects a Google Form, a sheet database, a dashboard, and automated email reminders.',
    card: 'personnel contracts, tracked to renewal',
    lead: 'A Google Workspace automation that keeps personnel contract information in one inventory, monitors renewal dates in a dashboard, and sends email notifications. Super Admin and School Admin roles control what each administrator can see.',
    overview: [
      'The system connects Google Forms, Google Sheets, a web dashboard, and email notifications. A form submission becomes a row in the personnel inventory, the dashboard monitors contract and renewal details, and the email workflow notifies the people involved.',
      'The build includes two administrator roles. A Super Admin sees the whole organization and can export records; a School Admin sees the school assigned to them. The dashboard groups records into all records, renewal alerts, and archives.'
    ],
    problem: 'Contract details and renewal dates were spread across separate records. Administrators needed one personnel inventory that showed which contracts were due and a repeatable way to notify the people involved.',
    objectives: [
      'Collect personnel contract information through Google Forms.',
      'Keep the data in Google Sheets as the central inventory.',
      'Monitor contracts and renewal dates in a web dashboard.',
      'Send automated email notifications before a contract expires.',
      'Limit each administrator\'s view to the records they are allowed to see.'
    ],
    role: [
      { label: 'design', text: 'Designed the form-to-sheet-to-dashboard flow, the renewal alert states, and the role-based visibility model.' },
      { label: 'build', text: 'Built the Google Forms and Google Sheets structure, the web dashboard, and the email notification workflow.' },
      { label: 'access', text: 'Implemented Super Admin and School Admin views, including organization-wide visibility and export for the Super Admin.' },
      { label: 'testing', text: 'Tested the form submission, dashboard views, role restrictions, and email notification by hand.' }
    ],
    roleNote: 'AI-assisted development tools were used for parts of the implementation. I reviewed the generated code, tested the flow, and refined the result rather than treating the output as finished.',
    tech: [
      { group: 'collection', items: ['Google Forms'] },
      { group: 'database', items: ['Google Sheets'] },
      { group: 'dashboard', items: ['Google Apps Script', 'HTML', 'CSS', 'JavaScript'] },
      { group: 'notifications', items: ['Gmail'] }
    ],
    features: [
      { title: 'Form collection', text: 'Google Forms captures the personnel and contract information.' },
      { title: 'Sheet inventory', text: 'Google Sheets holds the central personnel and renewal record.' },
      { title: 'Monitoring dashboard', text: 'A web dashboard shows staff totals, contract details, and renewal status.' },
      { title: 'Renewal alerts', text: 'Records are grouped into all records, renewal alerts, and archives.' },
      { title: 'Email notifications', text: 'The workflow sends a renewal notice with the contract details and days remaining.' },
      { title: 'Super Admin view', text: 'Organization-wide visibility and export.' },
      { title: 'School Admin view', text: 'Access limited to the administrator\'s assigned school.' }
    ],
    workflow: {
      title: 'The renewal route',
      caption: 'Google Form to Google Sheet to dashboard to email, with a role-based branch.',
      nodes: [
        { label: 'google form', note: 'contract details' },
        { label: 'google sheet', note: 'inventory' },
        { label: 'dashboard', note: 'monitoring', accent: true },
        { label: 'email', note: 'renewal notice' }
      ],
      branch: 'Super Admin sees all schools and exports. School Admin sees only the assigned school.'
    },
    screens: {
      title: 'The inventory screens',
      caption: 'Captures from the personnel inventory: the dashboard, a staff record, the sign-in screen, and the renewal notice.',
      images: [
        {
          src: 'assets/screens/personnel-dashboard.png',
          alt: 'Personnel Inventory dashboard with staff totals, renewal alerts, and a searchable staff table.',
          caption: 'The dashboard: staff totals, renewal alerts, filters, and the staff record table.',
          tag: 'dashboard',
          wide: true,
          w: 1903,
          h: 800
        },
        {
          src: 'assets/screens/personnel-record.png',
          alt: 'Personnel record detail showing contract and renewal information.',
          caption: 'A staff record: contract duration, renewal date, appointment type, school, and years in service.',
          tag: 'record',
          w: 600,
          h: 420
        },
        {
          src: 'assets/screens/personnel-login.png',
          alt: 'Personnel Inventory sign-in screen.',
          caption: 'Authorized access only: the sign-in screen for the inventory.',
          tag: 'access',
          w: 450,
          h: 540
        },
        {
          src: 'assets/screens/personnel-email.png',
          alt: 'Automated renewal notice email with contract details and days remaining.',
          caption: 'The renewal notice: contract details, days remaining, and a request to coordinate with HR.',
          tag: 'notification',
          portrait: true,
          w: 470,
          h: 770
        }
      ]
    },
    challenges: [
      { constraint: 'A form response is easy to collect but hard to monitor over time.', response: 'The sheet acts as the inventory, and the dashboard turns the rows into a contract and renewal list.' },
      { constraint: 'A single organization-wide view is not right for every administrator.', response: 'Super Admin and School Admin roles limit each view to the records that administrator should see.' },
      { constraint: 'A renewal date is only useful if someone acts before it passes.', response: 'The email workflow sends a notice with the contract details and the days remaining.' }
    ],
    statusDetail: 'Built as a Google Workspace automation. The form, sheet inventory, dashboard, roles, renewal alerts, and email workflow are the described build. No client deployment or usage metric is claimed.',
    notClaimed: 'No renewal volume, adoption figures, or client deployment are claimed on this page.'
  }
];
