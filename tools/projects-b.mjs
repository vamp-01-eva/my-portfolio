// Project records 06 to 10. Content supplied by Mark Justine J. Mauricio.
// No metrics, clients, testimonials, or deployment claims are added.

export const projectsB = [
  {
    slug: 'contract-renewal',
    number: '06',
    title: 'Contract Renewal Tracker & Automated Email Notification System',
    navTitle: 'contract renewal tracker',
    category: 'automation',
    group: 'web',
    status: 'build',
    year: '2026',
    stack: ['Google Forms', 'Google Sheets', 'Google Apps Script', 'HTML', 'CSS', 'JavaScript', 'Gmail'],
    summary: 'A Google Workspace automation that connects a form, a sheet, a dashboard, and email notifications.',
    card: 'form to sheet to dashboard to email',
    lead: 'A workflow automation that collects contract renewal information through Google Forms, keeps it in Google Sheets, monitors it in a web dashboard, and sends email notifications. Super Admin and School Admin roles control what each administrator can see.',
    overview: [
      'The system connects Google Forms, Google Sheets, a web dashboard, and email notifications. A form submission becomes a row in the sheet, the dashboard monitors the renewal record, and the email workflow notifies the people involved.',
      'The build includes two administrator roles. A Super Admin sees the whole organization and can export records; a School Admin sees the school assigned to them.'
    ],
    problem: 'Google Forms makes it easy to collect renewal information, but a form response on its own is hard to monitor. The office needed one database, a dashboard that showed what was due, role-based visibility, and a notification workflow.',
    objectives: [
      'Collect contract renewal information through Google Forms.',
      'Keep the data in Google Sheets as the central database.',
      'Monitor renewals in a web dashboard.',
      'Send automated email notifications.',
      'Limit each administrator\'s view to the records they are allowed to see.'
    ],
    role: [
      { label: 'design', text: 'Designed the form-to-sheet-to-dashboard flow and the role-based visibility model.' },
      { label: 'build', text: 'Built the Google Forms and Google Sheets structure, the web dashboard, and the email notification workflow.' },
      { label: 'access', text: 'Implemented Super Admin and School Admin views, including organization-wide visibility and export for the Super Admin.' },
      { label: 'testing', text: 'Tested the form submission, dashboard view, role restrictions, and email notification by hand.' }
    ],
    roleNote: 'AI-assisted development tools were used for parts of the implementation. I reviewed the generated code, tested the flow, and refined the result rather than treating the output as finished.',
    tech: [
      { group: 'collection', items: ['Google Forms'] },
      { group: 'database', items: ['Google Sheets'] },
      { group: 'dashboard', items: ['Google Apps Script', 'HTML', 'CSS', 'JavaScript'] },
      { group: 'notifications', items: ['Gmail'] }
    ],
    features: [
      { title: 'Form collection', text: 'Google Forms captures the renewal information.' },
      { title: 'Sheet database', text: 'Google Sheets holds the central renewal record.' },
      { title: 'Monitoring dashboard', text: 'A web dashboard shows the renewal list and its status.' },
      { title: 'Email notifications', text: 'The workflow sends the renewal message to the people involved.' },
      { title: 'Super Admin view', text: 'Organization-wide visibility and export.' },
      { title: 'School Admin view', text: 'Access limited to the administrator\'s assigned school.' }
    ],
    workflow: {
      title: 'The renewal route',
      caption: 'Google Form to Google Sheet to dashboard to email, with a role-based branch.',
      nodes: [
        { label: 'google form', note: 'renewal details' },
        { label: 'google sheet', note: 'database' },
        { label: 'dashboard', note: 'monitoring', accent: true },
        { label: 'email', note: 'notification' }
      ],
      branch: 'Super Admin sees all schools and exports. School Admin sees only the assigned school.'
    },
    screens: {
      title: 'The dashboard screens',
      caption: 'The dashboard keeps the renewal list, the role filter, and the export in one view.',
      panels: [
        { title: 'renewal list', items: ['personnel', 'school', 'renewal date', 'status'] },
        { title: 'role filter', items: ['Super Admin', 'School Admin', 'assigned school'] },
        { title: 'export', items: ['filtered records', 'renewal status', 'school'] }
      ]
    },
    challenges: [
      { constraint: 'A form response is easy to collect but hard to monitor over time.', response: 'The sheet acts as the database, and the dashboard turns the rows into a renewal list.' },
      { constraint: 'A single organization-wide view is not right for every administrator.', response: 'Super Admin and School Admin roles limit each view to the records that administrator should see.' }
    ],
    statusDetail: 'Built as a Google Workspace automation. The form, sheet, dashboard, roles, and email workflow are the described build. No client deployment or usage metric is claimed.',
    notClaimed: 'No renewal volume, adoption figures, or client deployment are claimed on this page.'
  },
  {
    slug: 'barbershop-chatbot',
    number: '07',
    title: 'AI-Powered Facebook Messenger Chatbot for Barbershops',
    navTitle: 'barbershop chatbot',
    category: 'ai automation',
    group: 'ai',
    status: 'prototype',
    year: 'now',
    stack: ['Make.com', 'OpenAI Responses API', 'Facebook Messenger', 'Google Sheets', 'Google Docs'],
    summary: 'A Messenger chatbot for barbershop inquiries, with English, Tagalog, and Taglish replies and a Google Docs knowledge base.',
    card: 'multilingual replies and a chat log',
    lead: 'An AI customer support prototype for barbershops. It answers common questions about services and haircuts in English, Tagalog, or Taglish, keeps conversation context with thread identifiers, and logs the conversation in Google Sheets.',
    overview: [
      'The chatbot is designed for customer inquiries on Facebook Messenger. A message goes through Make.com to the OpenAI Responses API, which answers with the help of a Google Docs knowledge base. The conversation is logged in Google Sheets.',
      'The project is an independent prototype. The chat and FAQ flow is the current build; appointment booking is a planned extension, not a finished feature.'
    ],
    problem: 'Barbershop staff answer the same questions repeatedly, often in a mix of English, Tagalog, and Taglish. The shop needed a way to answer common questions quickly without losing the thread of the conversation.',
    objectives: [
      'Answer common barbershop questions in English, Tagalog, and Taglish.',
      'Keep the chatbot\'s instructions and knowledge in a Google Doc.',
      'Maintain conversation context with a thread identifier.',
      'Log conversations in Google Sheets for review.',
      'Leave room for an appointment booking workflow.'
    ],
    role: [
      { label: 'design', text: 'Designed the conversation flow and the knowledge base structure.' },
      { label: 'prompt', text: 'Wrote and refined the instructions for the model, including the language mix and the limits of the answers.' },
      { label: 'integration', text: 'Connected Facebook Messenger, Make.com, the OpenAI Responses API, Google Docs, and Google Sheets.' },
      { label: 'testing', text: 'Tested the reply flow and the conversation log by hand. Booking is not presented as implemented.' }
    ],
    roleNote: 'AI-assisted development tools were used for parts of the implementation. I reviewed the generated code, tested the flow, and refined the result rather than treating the output as finished.',
    tech: [
      { group: 'channel', items: ['Facebook Messenger'] },
      { group: 'automation', items: ['Make.com'] },
      { group: 'model', items: ['OpenAI Responses API'] },
      { group: 'knowledge', items: ['Google Docs'] },
      { group: 'records', items: ['Google Sheets'] }
    ],
    features: [
      { title: 'Multilingual replies', text: 'Answers in English, Tagalog, and Taglish.' },
      { title: 'Service and haircut questions', text: 'Handles common questions about barber services and haircuts.' },
      { title: 'Knowledge base', text: 'Uses a Google Docs document for the chatbot\'s instructions and shop information.' },
      { title: 'Conversation context', text: 'Uses conversation or thread identifiers to keep the exchange coherent.' },
      { title: 'Conversation log', text: 'Records the conversation in Google Sheets.' }
    ],
    planned: [
      'Real-time appointment availability checking.',
      'Automated booking creation.',
      'Booking confirmation messages.',
      'Appointment changes and cancellations.',
      'Automated appointment reminders.'
    ],
    workflow: {
      title: 'The chatbot route',
      caption: 'Messenger to Make.com to the OpenAI Responses API, with the Google Docs knowledge base and the Google Sheets log alongside. Booking is a planned branch.',
      nodes: [
        { label: 'messenger', note: 'customer message' },
        { label: 'make.com', note: 'workflow' },
        { label: 'openai', note: 'responses api' },
        { label: 'docs + sheets', note: 'knowledge and log' },
        { label: 'reply', note: 'sent back' }
      ],
      branch: 'Appointment booking is planned, not implemented.'
    },
    screens: {
      title: 'The chatbot screens',
      caption: 'The Messenger thread, the Make.com scenario, the Google Doc, and the Sheet are the working parts.',
      panels: [
        { title: 'messenger thread', items: ['customer message', 'bot reply', 'conversation context'] },
        { title: 'make.com scenario', items: ['webhook', 'openai call', 'google sheets row'] },
        { title: 'google doc', items: ['instructions', 'services', 'answer limits'] }
      ]
    },
    challenges: [
      { constraint: 'Customers write in English, Tagalog, and Taglish, sometimes in the same message.', response: 'The instructions and the knowledge base describe the language mix, and the reply stays in the customer\'s register.' },
      { constraint: 'A chat is hard to review after it ends.', response: 'Each conversation is logged in Google Sheets with its thread identifier.' }
    ],
    statusDetail: 'Working prototype for the chat and FAQ flow. Appointment availability, booking creation, confirmation, changes, and reminders are planned, not implemented.',
    notClaimed: 'No booking volume, customer count, or client deployment is claimed on this page.'
  },
  {
    slug: 'gmail-organizer',
    number: '08',
    title: 'AI-Powered Gmail Inbox Organizer',
    navTitle: 'gmail organizer',
    category: 'ai automation',
    group: 'ai',
    status: 'prototype',
    year: 'now',
    stack: ['Make.com', 'Gmail', 'OpenAI API'],
    summary: 'An AI email organization prototype that classifies incoming mail, applies Gmail labels, and surfaces priority messages.',
    card: 'labels and priority for gmail',
    lead: 'A workflow prototype that reads incoming Gmail, asks OpenAI to classify the message, and applies labels based on the content. Priority detection and optional summaries are part of the intended scope.',
    overview: [
      'The organizer is a Make.com workflow that watches Gmail and calls the OpenAI API to classify each message. The classification is used to apply labels and identify promotional or spam-like mail.',
      'The project is an independent prototype. The page describes the intended feature set; each feature should be confirmed against the current build before it is presented as complete.'
    ],
    problem: 'Inbox triage is repetitive. Messages arrive in different categories, and the important ones can get buried under promotions and routine mail.',
    objectives: [
      'Classify incoming email by content and intent.',
      'Apply Gmail labels automatically.',
      'Identify spam and promotional messages.',
      'Surface priority messages.',
      'Optionally generate a short summary.'
    ],
    role: [
      { label: 'design', text: 'Designed the classification categories and the label set.' },
      { label: 'integration', text: 'Connected Gmail, Make.com, and the OpenAI API in a workflow.' },
      { label: 'testing', text: 'Tested the workflow against sample messages and refined the prompt and labels.' }
    ],
    roleNote: 'AI-assisted development tools were used for parts of the implementation. I reviewed the generated code, tested the flow, and refined the result rather than treating the output as finished. The feature list is a prototype scope, not a claim that every feature is finished.',
    tech: [
      { group: 'mail', items: ['Gmail'] },
      { group: 'automation', items: ['Make.com'] },
      { group: 'model', items: ['OpenAI API'] }
    ],
    features: [
      { title: 'Email classification', text: 'Reads the message and assigns a category.' },
      { title: 'Gmail labels', text: 'Applies labels based on the classification.' },
      { title: 'Spam and promotions', text: 'Identifies promotional and spam-like messages.' },
      { title: 'Priority detection', text: 'Flags messages that need attention.' },
      { title: 'Optional summaries', text: 'Adds a short summary to the message record.' }
    ],
    workflow: {
      title: 'The inbox route',
      caption: 'Gmail to Make.com to the OpenAI API, then labels, priority, and an optional summary.',
      nodes: [
        { label: 'gmail', note: 'new message' },
        { label: 'make.com', note: 'workflow' },
        { label: 'openai', note: 'classification' },
        { label: 'labels', note: 'applied' },
        { label: 'priority', note: 'flagged' }
      ]
    },
    screens: {
      title: 'The organizer screens',
      caption: 'The Gmail inbox, the label set, and the workflow are the working parts.',
      panels: [
        { title: 'gmail inbox', items: ['incoming message', 'label', 'priority'] },
        { title: 'make.com scenario', items: ['gmail trigger', 'openai call', 'label action'] },
        { title: 'label set', items: ['category', 'promotion', 'spam', 'priority'] }
      ]
    },
    challenges: [
      { constraint: 'Email categories are not always clean.', response: 'The prompt and the label set define the categories, and the workflow keeps the model\'s classification visible in the label.' },
      { constraint: 'A wrong label is worse than no label.', response: 'The prototype is tested against sample messages before the labels are treated as reliable.' }
    ],
    statusDetail: 'Prototype. Classification, labeling, spam and promotion detection, priority detection, and summaries are the intended scope. Confirm the implementation status of each feature before presenting it as complete.',
    notClaimed: 'No inbox volume, accuracy figure, or client deployment is claimed on this page.'
  },
  {
    slug: 'discord-bot',
    number: '09',
    title: 'Discord AI Automation Bot',
    navTitle: 'discord bot',
    category: 'ai automation',
    group: 'ai',
    status: 'prototype',
    year: 'now',
    stack: ['Discord API', 'OpenAI API', 'automation platform (to confirm)'],
    summary: 'An early AI automation prototype for Discord server assistance, FAQ replies, and moderation support.',
    card: 'discord faq and moderation support',
    lead: 'An early prototype for a Discord bot that can answer common server questions, assist with FAQs, and support moderation work. The page records the project direction; the build is not presented as finished.',
    overview: [
      'The project explores an AI assistant for Discord servers. The intended scope includes question answering, FAQ responses, server assistance, message classification, and moderation support.',
      'The build is early. The technologies and features below are the project scope; they are not presented as completed.'
    ],
    problem: 'Server questions repeat, and moderators spend time answering the same things. A bot could handle the routine questions and surface the messages that need a person.',
    objectives: [
      'Answer common server questions.',
      'Provide FAQ responses.',
      'Assist with server information.',
      'Classify messages that need moderation attention.',
      'Keep a person in the loop for moderation decisions.'
    ],
    role: [
      { label: 'scope', text: 'Defined the bot\'s use cases and the boundary between automated replies and human moderation.' },
      { label: 'design', text: 'Outlined the Discord, OpenAI, and automation workflow.' },
      { label: 'status', text: 'The implementation is early; this page is a scope record, not a finished build report.' }
    ],
    roleNote: 'Only the parts that are actually implemented should be described as built. The current page keeps the feature list at the scope level.',
    tech: [
      { group: 'platform', items: ['Discord API'] },
      { group: 'model', items: ['OpenAI API'] },
      { group: 'automation', items: ['Make.com or another automation platform (to confirm)'] }
    ],
    features: [
      { title: 'Question answering', text: 'Answers common server questions.' },
      { title: 'FAQ responses', text: 'Returns prepared answers for repeated questions.' },
      { title: 'Server assistance', text: 'Helps users find server information.' },
      { title: 'Message classification', text: 'Flags messages that may need moderation.' },
      { title: 'Moderation support', text: 'Surfaces items for a human moderator.' }
    ],
    workflow: {
      title: 'The bot route',
      caption: 'Discord to the bot to the OpenAI API, with a moderation branch for a human.',
      nodes: [
        { label: 'discord', note: 'message' },
        { label: 'bot', note: 'workflow' },
        { label: 'openai', note: 'reply or classification' },
        { label: 'reply', note: 'to the channel' },
        { label: 'moderation', note: 'human review' }
      ],
      branch: 'Moderation decisions stay with a person.'
    },
    screens: {
      title: 'The bot screens',
      caption: 'The Discord channel, the bot reply, and the moderation queue are the intended views.',
      panels: [
        { title: 'discord channel', items: ['question', 'bot reply', 'context'] },
        { title: 'bot workflow', items: ['event', 'openai call', 'response'] },
        { title: 'moderation queue', items: ['flagged message', 'reason', 'moderator'] }
      ]
    },
    challenges: [
      { constraint: 'A server assistant can overstep into moderation decisions.', response: 'The scope keeps moderation decisions with a person and uses the bot to surface messages, not to punish.' },
      { constraint: 'The build is early, and an overstated feature list would be misleading.', response: 'The case page labels the feature set as scope and does not present it as completed.' }
    ],
    statusDetail: 'Early prototype. The page records the project direction; features and technologies are not presented as completed. Confirm the implemented parts before publishing them as build details.',
    notClaimed: 'No server count, user count, moderation outcome, or client deployment is claimed on this page.'
  },
  {
    slug: 'soletisfaction',
    number: '10',
    title: 'Soletisfaction E-commerce, POS & Inventory Management System',
    navTitle: 'soletisfaction',
    category: 'academic',
    group: 'academic',
    status: 'academic project',
    year: '2025 to 2026',
    stack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    summary: 'An academic capstone that brings an online catalog, point-of-sale, inventory, sales monitoring, and customer records into one system.',
    card: 'catalog, pos, inventory, sales',
    lead: 'A capstone project for a shoe reselling business. The system combines an online product catalog, point-of-sale transactions, inventory management, sales monitoring, and customer accounts in one platform.',
    overview: [
      'Soletisfaction is an academic capstone project for a shoe reselling business. The system was designed to manage online sales, in-store point-of-sale transactions, inventory, pricing, and customer information in one place.',
      'The project was built as a team capstone at STI College. The work covered front-end and back-end implementation, database management, and application testing.'
    ],
    problem: 'The business tracked online sales, in-store sales, and inventory separately. The manual process made it harder to see what was in stock, what had sold, and what the business had earned.',
    objectives: [
      'Create one product catalog for the online store and the point of sale.',
      'Manage product and inventory records.',
      'Record point-of-sale transactions.',
      'Monitor sales and income.',
      'Manage customer accounts and status.',
      'Send email notifications and give administrators a dashboard.'
    ],
    role: [
      { label: 'front end', text: 'Built storefront and administrative interfaces with HTML, CSS, and JavaScript.' },
      { label: 'back end', text: 'Implemented application logic with PHP and managed the MySQL database.' },
      { label: 'data', text: 'Maintained product inventory, user data, and transaction records.' },
      { label: 'teamwork', text: 'Collaborated on development tasks, code changes, debugging, and application improvements.' }
    ],
    roleNote: 'AI-assisted coding tools were used for parts of the implementation. I reviewed, tested, and refined the generated code with the team.',
    tech: [
      { group: 'front end', items: ['HTML', 'CSS', 'JavaScript'] },
      { group: 'back end', items: ['PHP'] },
      { group: 'database', items: ['MySQL'] },
      { group: 'features', items: ['E-commerce', 'Point of sale', 'Inventory', 'Email notifications'] }
    ],
    features: [
      { title: 'Online catalog', text: 'Shows the product catalog for online sales.' },
      { title: 'Product and inventory management', text: 'Keeps product records and stock information in one place.' },
      { title: 'Point of sale', text: 'Records in-store transactions.' },
      { title: 'Sales and income monitoring', text: 'Gives administrators a view of sales activity.' },
      { title: 'Pricing and markdowns', text: 'Manages product prices and markdowns.' },
      { title: 'Customer accounts', text: 'Keeps customer information and account status.' },
      { title: 'Email notifications', text: 'Sends notifications for customer and order activity.' },
      { title: 'Administrative dashboard', text: 'Centralizes the administrative views.' }
    ],
    workflow: {
      title: 'The sales route',
      caption: 'Catalog to cart or POS to inventory to sales, with customer records and email notifications alongside.',
      nodes: [
        { label: 'catalog', note: 'products' },
        { label: 'cart / pos', note: 'transaction' },
        { label: 'inventory', note: 'stock update' },
        { label: 'sales', note: 'monitoring' },
        { label: 'customer', note: 'account and email' }
      ]
    },
    screens: {
      title: 'The system screens',
      caption: 'The storefront, the POS, the inventory list, and the sales dashboard are the main views.',
      panels: [
        { title: 'storefront', items: ['catalog', 'product detail', 'cart'] },
        { title: 'pos', items: ['items', 'total', 'transaction'] },
        { title: 'inventory', items: ['product', 'stock', 'price'] },
        { title: 'sales dashboard', items: ['sales', 'income', 'customer status'] }
      ]
    },
    challenges: [
      { constraint: 'Online sales, in-store sales, and inventory were tracked separately.', response: 'The system keeps the catalog, the POS, and the inventory record in one platform.' },
      { constraint: 'A sale changes stock, sales totals, and customer records at once.', response: 'The transaction flow updates the connected records together.' }
    ],
    statusDetail: 'Academic capstone, implemented as a team project at STI College. No commercial deployment is claimed.',
    notClaimed: 'No sales figures, customer counts, or commercial deployment are claimed on this page.'
  }
];
