// Project records 04 to 08. Content supplied by Mark Justine J. Mauricio.
// No metrics, clients, testimonials, or deployment claims are added.

export const projectsB = [
  {
    slug: 'barbershop-manager',
    number: '04',
    title: 'Barbershop Manager AI Assistant',
    navTitle: 'barbershop manager',
    category: 'ai automation',
    group: 'ai',
    status: 'prototype',
    year: 'now',
    stack: ['n8n', 'Google Gemini', 'Facebook Messenger', 'Google Docs', 'Google Sheets', 'Google Calendar'],
    summary: 'A Messenger AI assistant that answers shop questions, checks appointment availability, and books appointments into Google Calendar.',
    card: 'shop questions, availability, and bookings',
    lead: 'An AI customer support and booking prototype for barbershops. The main assistant answers service questions in English, Tagalog, or Taglish, keeps conversation context, and calls two sub-workflows to check open slots and create a booking.',
    overview: [
      'The assistant runs as an n8n workflow. A Messenger message passes through the main workflow, which loads the shop instructions from Google Docs, calls Google Gemini with conversation memory, and can invoke two tools: one checks calendar availability, the other books an appointment.',
      'The booking sub-workflow validates the request, checks the slot again, creates a Google Calendar event, and logs the booking in Google Sheets. The availability sub-workflow builds a time window and reads open slots from the calendar.',
      'The project is a working prototype. Appointment changes, cancellations, and reminders are not implemented.'
    ],
    problem: 'Barbershop staff answer the same questions repeatedly and coordinate appointments by hand. The shop needed a way to answer common questions quickly, check real availability, and keep the booking record in one place.',
    objectives: [
      'Answer common barbershop questions in English, Tagalog, and Taglish.',
      'Keep the assistant\'s instructions and shop information in a Google Doc.',
      'Maintain conversation context with a memory node.',
      'Check open appointment slots against Google Calendar.',
      'Create a booking and log it in Google Sheets.',
      'Send the assistant\'s reply back through Messenger.'
    ],
    role: [
      { label: 'design', text: 'Designed the conversation flow, the knowledge base structure, and the boundary between the assistant and the two booking sub-workflows.' },
      { label: 'prompt', text: 'Wrote and refined the instructions for the model, including the language mix, the shop details, and the limits of the answers.' },
      { label: 'integration', text: 'Connected Facebook Messenger, n8n, Google Gemini, Google Docs, Google Sheets, and Google Calendar.' },
      { label: 'testing', text: 'Tested the reply flow, the availability check, the booking path, and the conversation log by hand.' }
    ],
    roleNote: 'AI-assisted development tools were used for parts of the implementation. I reviewed the workflow, tested the reply and booking paths, and refined the result rather than treating the output as finished.',
    tech: [
      { group: 'channel', items: ['Facebook Messenger'] },
      { group: 'automation', items: ['n8n'] },
      { group: 'model', items: ['Google Gemini'] },
      { group: 'knowledge', items: ['Google Docs'] },
      { group: 'records', items: ['Google Sheets', 'Google Calendar'] }
    ],
    features: [
      { title: 'Multilingual replies', text: 'Answers in English, Tagalog, and Taglish.' },
      { title: 'Shop knowledge base', text: 'Uses a Google Docs document for the assistant\'s instructions and shop information.' },
      { title: 'Conversation memory', text: 'Keeps the exchange coherent with a memory node in the main workflow.' },
      { title: 'Availability checking', text: 'Calls a sub-workflow that reads open slots from Google Calendar.' },
      { title: 'Appointment booking', text: 'Calls a sub-workflow that validates the request, creates a calendar event, and logs the booking.' },
      { title: 'Booking record', text: 'Keeps each confirmed appointment in Google Sheets.' },
      { title: 'Admin booking list', text: 'A separate branch lists bookings from the Google Sheets record.' }
    ],
    planned: [
      'Appointment changes and cancellations.',
      'Automated appointment reminders.',
      'Rescheduling from the Messenger conversation.'
    ],
    workflow: {
      title: 'The assistant route',
      caption: 'Messenger to the main assistant, with Google Gemini and memory, then the availability and booking sub-workflows and a reply.',
      nodes: [
        { label: 'messenger', note: 'customer message' },
        { label: 'main assistant', note: 'instructions + memory' },
        { label: 'gemini', note: 'reply and tool choice' },
        { label: 'availability', note: 'sub-workflow' },
        { label: 'booking', note: 'sub-workflow', accent: true },
        { label: 'reply', note: 'sent back' }
      ],
      branch: 'The booking sub-workflow validates the request, checks the slot, creates a Google Calendar event, and appends the booking to Google Sheets.'
    },
    screens: {
      title: 'The assistant workflows',
      caption: 'Captures from n8n: the main assistant workflow and the two booking sub-workflows.',
      images: [
        {
          src: 'assets/screens/barbershop-main.png',
          alt: 'n8n barbershop assistant workflow with Messenger, Google Docs, Gemini, memory, and booking tools.',
          caption: 'The main assistant: Messenger trigger, shop instructions, Gemini, conversation memory, and the availability and booking tools.',
          tag: 'main workflow',
          wide: true,
          w: 980,
          h: 580
        },
        {
          src: 'assets/screens/barbershop-booking.png',
          alt: 'n8n booking sub-workflow with validation, calendar availability, event creation, and Google Sheets logging.',
          caption: 'The booking sub-workflow: validate the request, re-check the slot, create the calendar event, and log the booking.',
          tag: 'sub-workflow',
          wide: true,
          w: 1620,
          h: 545
        },
        {
          src: 'assets/screens/barbershop-availability.png',
          alt: 'n8n availability sub-workflow reading open calendar slots.',
          caption: 'The availability sub-workflow: build a time window and read open slots from Google Calendar.',
          tag: 'sub-workflow',
          wide: true,
          w: 1620,
          h: 570
        }
      ]
    },
    challenges: [
      { constraint: 'Customers write in English, Tagalog, and Taglish, sometimes in the same message.', response: 'The instructions and the knowledge base describe the language mix, and the reply stays in the customer\'s register.' },
      { constraint: 'A booking can collide if the assistant only talks about availability.', response: 'The availability sub-workflow reads the calendar, and the booking sub-workflow re-checks the slot before creating the event.' },
      { constraint: 'A chat is hard to review after it ends.', response: 'The main workflow keeps conversation memory, and confirmed bookings are logged in Google Sheets.' }
    ],
    statusDetail: 'Working prototype. The Messenger assistant, availability check, and booking sub-workflows are built in n8n. Appointment changes, cancellations, and reminders are planned, not implemented.',
    notClaimed: 'No booking volume, customer count, or client deployment is claimed on this page.'
  },
  {
    slug: 'youtube-clipper',
    number: '05',
    title: 'YouTube Shorts Clipper',
    navTitle: 'shorts clipper',
    category: 'video pipeline',
    group: 'ai',
    status: 'prototype',
    year: 'now',
    pipeline: { step: 1 },
    stack: ['n8n', 'Google Gemini', 'YouTube', 'Google Drive'],
    summary: 'An n8n workflow that turns a YouTube video into vertical, caption-free Shorts and uploads them to Google Drive.',
    card: 'long video in, vertical clips out',
    lead: 'The first stage of a shorts production pipeline. A form takes a YouTube URL and clip settings; the workflow downloads the source, transcribes it, asks Google Gemini to pick the strongest moments, cuts vertical clips, and uploads them to Google Drive.',
    overview: [
      'The clipper is built in n8n. A form submission starts the job. The workflow downloads the source video, gets and parses the transcript, builds candidate windows, and sends them to Google Gemini to pick the strongest moments. The selected ranges are cut into vertical clips and uploaded to a Google Drive folder.',
      'Clips are rendered without burned-in captions on purpose. Editing happens first; the Local Video Captioner adds styled captions afterward.',
      'The project is a working local prototype. The workflow runs from the request form to the Drive upload.'
    ],
    problem: 'Turning a long video into Shorts is repetitive: download, transcribe, find the moments worth keeping, cut them, reframe them, and upload the results. Doing each step by hand slows down a publishing schedule.',
    objectives: [
      'Accept a YouTube URL and clip settings in one form.',
      'Download the source and get its transcript.',
      'Use the transcript to build candidate clip windows.',
      'Ask Google Gemini to pick the strongest moments.',
      'Cut vertical, caption-free clips.',
      'Upload the clips to Google Drive and build a job report.'
    ],
    role: [
      { label: 'design', text: 'Designed the job flow from form submission through download, transcript, moment selection, cuts, and Drive delivery.' },
      { label: 'build', text: 'Built the n8n workflow, the request form, the clip settings, and the Drive upload path.' },
      { label: 'prompt', text: 'Wrote the moment-selection prompt and tuned it against the candidate windows and the requested focus.' },
      { label: 'testing', text: 'Tested the workflow end to end with sample videos and adjusted the cut and upload steps.' }
    ],
    roleNote: 'AI-assisted development tools were used for parts of the implementation. I reviewed the workflow, ran it against sample videos, and refined the result rather than treating the output as finished.',
    tech: [
      { group: 'workflow', items: ['n8n'] },
      { group: 'model', items: ['Google Gemini'] },
      { group: 'source', items: ['YouTube'] },
      { group: 'output', items: ['Google Drive'] }
    ],
    features: [
      { title: 'Request form', text: 'Takes the YouTube URL, clip count, framing, length, hook card, progress bar, audio polish, watermark, and cookie setting.' },
      { title: 'Transcript-driven windows', text: 'Downloads the source, gets the transcript, and builds candidate moments from it.' },
      { title: 'AI moment picking', text: 'Sends the candidate windows to Google Gemini and selects the strongest moments for the requested focus.' },
      { title: 'Vertical cuts', text: 'Cuts the selected ranges into vertical clips with the chosen framing.' },
      { title: 'Drive delivery', text: 'Creates a Drive folder and uploads the finished clips.' },
      { title: 'Job report', text: 'Builds a report for the run after the clips are uploaded.' }
    ],
    workflow: {
      title: 'The clipper route',
      caption: 'Form to download and transcript to moment selection to cuts to Google Drive.',
      nodes: [
        { label: 'request form', note: 'url and settings' },
        { label: 'download + transcript', note: 'source prepared' },
        { label: 'pick moment', note: 'gemini', accent: true },
        { label: 'cut clips', note: 'vertical, caption-free' },
        { label: 'upload', note: 'google drive' }
      ]
    },
    screens: {
      title: 'The clipper screens',
      caption: 'Captures from the clipper: the n8n workflow and the request form settings.',
      images: [
        {
          src: 'assets/screens/shorts-clipper-workflow.png',
          alt: 'n8n YouTube Shorts Clipper workflow with download, transcript, Gemini moment selection, cuts, and Drive upload.',
          caption: 'The clipper workflow: form submission, download, transcript, moment selection with Gemini, cuts, and Drive upload.',
          tag: 'workflow',
          wide: true,
          w: 1470,
          h: 658
        },
        {
          src: 'assets/screens/shorts-clipper-form.png',
          alt: 'YouTube Shorts Clipper request form with framing, clip length, and audio settings.',
          caption: 'The request form settings: framing, clip length, hook card, progress bar, audio polish, watermark, and cookies.',
          tag: 'request form',
          portrait: true,
          w: 455,
          h: 910
        }
      ]
    },
    challenges: [
      { constraint: 'A long video has more material than a Shorts run can use.', response: 'The workflow builds candidate windows from the transcript and lets Gemini rank the strongest moments against the requested focus.' },
      { constraint: 'Burned-in captions make a clip harder to edit later.', response: 'The clipper leaves the clips caption-free; the Local Video Captioner adds captions after editing.' }
    ],
    statusDetail: 'Working local prototype. The n8n workflow runs from the request form to the Drive upload. No public deployment or usage metric is claimed.',
    notClaimed: 'No video volume, publishing schedule, or client deployment is claimed on this page.'
  },
  {
    slug: 'youtube-reclipper',
    number: '06',
    title: 'YouTube Shorts Reclipper',
    navTitle: 'shorts reclipper',
    category: 'video pipeline',
    group: 'ai',
    status: 'prototype',
    year: 'now',
    pipeline: { step: 2 },
    stack: ['n8n', 'Google Gemini', 'local source file'],
    summary: 'An n8n workflow that re-cuts a saved source video into fresh caption-free Shorts without downloading it again.',
    card: 'saved source, new clips',
    lead: 'The second stage of the pipeline. It reuses the source video saved by an earlier clipper job, re-runs moment selection with new settings, and produces fresh caption-free clips without downloading the video again.',
    overview: [
      'The reclipper starts from a form that points at a saved source file or defaults to the newest job. It inspects the source, resolves the job folder, and either reuses the existing transcript and windows or builds new ones. Google Gemini picks a new set of moments, and the selected ranges are cut again.',
      'Because the source is already local, the workflow skips the download, cookies, and Drive upload steps. The output stays caption-free so the clips can be edited before captions are added.',
      'The project is a working local prototype. It is meant to run after the clipper, not as a replacement for it.'
    ],
    problem: 'A good source video often needs a second or third pass with different clip settings. Re-downloading and re-transcribing the source each time wastes work and slows down the next set of clips.',
    objectives: [
      'Reuse the source video saved by an earlier clipper job.',
      'Accept a new clip count, framing, focus, and length.',
      'Reuse the existing transcript when one is available.',
      'Ask Google Gemini to pick a fresh set of moments.',
      'Cut new caption-free clips without a download or Drive upload.'
    ],
    role: [
      { label: 'design', text: 'Designed the reclip flow around the saved source, the job folder, and the existing transcript.' },
      { label: 'build', text: 'Built the n8n workflow, the source resolution step, the reclip form, and the cut path.' },
      { label: 'prompt', text: 'Reused the moment-selection prompt and adjusted it for a fresh pass over the same transcript.' },
      { label: 'testing', text: 'Tested the reclip path against saved sources and checked that the new clips stayed caption-free.' }
    ],
    roleNote: 'AI-assisted development tools were used for parts of the implementation. I reviewed the workflow, ran it against saved sources, and refined the result rather than treating the output as finished.',
    tech: [
      { group: 'workflow', items: ['n8n'] },
      { group: 'model', items: ['Google Gemini'] },
      { group: 'source', items: ['Saved local source video'] },
      { group: 'output', items: ['Local clip folder'] }
    ],
    features: [
      { title: 'Saved-source input', text: 'Points at a job folder or path; a blank value uses the newest job.' },
      { title: 'Transcript reuse', text: 'Uses the existing transcript and windows when the job already has them.' },
      { title: 'New moment selection', text: 'Asks Google Gemini for a fresh set of moments based on the new focus.' },
      { title: 'New clip settings', text: 'Takes a new clip count, framing, length, hook card, progress bar, audio polish, and watermark.' },
      { title: 'Local output', text: 'Cuts the new clips on disk without a download or Drive upload.' },
      { title: 'Job report', text: 'Builds a report for the reclip run.' }
    ],
    workflow: {
      title: 'The reclipper route',
      caption: 'Form to saved source to transcript reuse to new moment selection to fresh cuts.',
      nodes: [
        { label: 'request form', note: 'saved source + settings' },
        { label: 'inspect source', note: 'job folder resolved' },
        { label: 'reuse transcript', note: 'or rebuild' },
        { label: 'pick moment', note: 'gemini', accent: true },
        { label: 'cut clips', note: 'caption-free' }
      ],
      branch: 'If the job already has a transcript, it is reused; otherwise the workflow rebuilds it.'
    },
    screens: {
      title: 'The reclipper screens',
      caption: 'Captures from the reclipper: the n8n workflow and the request form.',
      images: [
        {
          src: 'assets/screens/shorts-reclipper-workflow.png',
          alt: 'n8n YouTube Shorts Reclipper workflow reusing a saved source and cutting a fresh set of clips.',
          caption: 'The reclipper reuses a saved source, re-runs moment selection, and cuts a fresh set of clips.',
          tag: 'workflow',
          wide: true,
          w: 1520,
          h: 430
        },
        {
          src: 'assets/screens/shorts-reclipper-form.png',
          alt: 'YouTube Shorts Reclipper request form with saved source and new clip settings.',
          caption: 'The reclipper form points at a saved source and takes new clip settings; no download or Drive step.',
          tag: 'request form',
          portrait: true,
          w: 455,
          h: 920
        }
      ]
    },
    challenges: [
      { constraint: 'Re-downloading and re-transcribing a source for every new set of clips wastes work.', response: 'The reclipper reads the saved source and reuses the existing transcript when the job has one.' },
      { constraint: 'A second pass should not overwrite the first set of clips.', response: 'The reclip job resolves its own output folder and writes a new set of clips.' }
    ],
    statusDetail: 'Working local prototype. The reclipper runs against saved sources and writes a fresh set of caption-free clips. No public deployment or usage metric is claimed.',
    notClaimed: 'No video volume, publishing schedule, or client deployment are claimed on this page.'
  },
  {
    slug: 'local-video-captioner',
    number: '07',
    title: 'Local Video Captioner',
    navTitle: 'video captioner',
    category: 'video pipeline',
    group: 'ai',
    status: 'prototype',
    year: 'now',
    pipeline: { step: 3 },
    stack: ['n8n', 'Python', 'clip_helper.py', 'local video'],
    summary: 'An n8n workflow that burns styled captions onto a local video after editing.',
    card: 'edited clip in, captioned clip out',
    lead: 'The final stage of the pipeline. It takes an edited local video, finds its subtitle track, and burns styled captions onto it with clip_helper.py, keeping the source resolution.',
    overview: [
      'The captioner runs after the clips have been edited. A form supplies the local video path, an optional subtitle path, and the caption style. The workflow prepares the job, calls clip_helper.py to burn the captions, parses the result, and builds a report.',
      'Subtitle lookup checks an explicit path first, then a matching .srt or .vtt beside the video, then an embedded text track. The output keeps the source resolution and is written to a captions folder with the ASS and JSON caption files.',
      'The project is a working local prototype. It does not download, cut, or reframe the video; it only adds captions.'
    ],
    problem: 'Captioning after editing is a separate manual step. Re-burning captions on every edit is slow and easy to get wrong, especially when the subtitle file and the video are handled separately.',
    objectives: [
      'Accept a local video and an optional subtitle path.',
      'Find a matching or embedded subtitle track when no path is given.',
      'Apply a caption style, position, and text effect.',
      'Burn the captions without changing the source resolution.',
      'Write the captioned video and its caption files to one output folder.'
    ],
    role: [
      { label: 'design', text: 'Designed the caption job around the local video, the subtitle lookup, and the output folder.' },
      { label: 'build', text: 'Built the n8n workflow, the caption form, and the clip_helper.py caption step.' },
      { label: 'styling', text: 'Defined the caption styles, positions, and text effects exposed in the form.' },
      { label: 'testing', text: 'Tested explicit subtitle paths, matching sidecar files, and embedded tracks against sample clips.' }
    ],
    roleNote: 'AI-assisted development tools were used for parts of the implementation. I reviewed the workflow, ran it against sample clips, and refined the result rather than treating the output as finished.',
    tech: [
      { group: 'workflow', items: ['n8n'] },
      { group: 'caption helper', items: ['Python', 'clip_helper.py'] },
      { group: 'source', items: ['Local video file'] },
      { group: 'output', items: ['Captioned MP4, ASS, and JSON'] }
    ],
    features: [
      { title: 'Local video input', text: 'Takes any video path on disk.' },
      { title: 'Subtitle lookup', text: 'Uses an explicit path, then a matching .srt or .vtt beside the video, then an embedded text track.' },
      { title: 'Caption styles', text: 'Viral, Classic, Boxed, Minimal, and Neon.' },
      { title: 'Position and effect', text: 'Upper, middle, or lower position with effects such as pop, shake, bounce, fade, word pop, or karaoke.' },
      { title: 'Resolution preserved', text: 'Burns captions without cutting or reframing the source.' },
      { title: 'Caption files', text: 'Writes the captioned MP4 plus the ASS and JSON caption files to one folder.' }
    ],
    workflow: {
      title: 'The captioner route',
      caption: 'Form to job preparation to clip_helper.py caption burn-in to parsed output and a report.',
      nodes: [
        { label: 'request form', note: 'video and style' },
        { label: 'prepare job', note: 'subtitle lookup' },
        { label: 'add captions', note: 'clip_helper.py', accent: true },
        { label: 'parse captions', note: 'output checked' },
        { label: 'report', note: 'job summary' }
      ]
    },
    screens: {
      title: 'The captioner screens',
      caption: 'Captures from the captioner: the n8n workflow and the request form.',
      images: [
        {
          src: 'assets/screens/video-captioner-workflow.png',
          alt: 'n8n Local Video Captioner workflow with job preparation, clip_helper.py caption burn-in, parsing, and a report.',
          caption: 'The captioner workflow: prepare the job, burn captions with clip_helper.py, parse the result, and build a report.',
          tag: 'workflow',
          wide: true,
          w: 1490,
          h: 320
        },
        {
          src: 'assets/screens/video-captioner-form.png',
          alt: 'Local Video Captioner request form with video path, caption style, position, and text effect.',
          caption: 'The caption form takes a local video path, subtitle path, style, position, and text effect.',
          tag: 'request form',
          portrait: true,
          w: 455,
          h: 920
        }
      ]
    },
    challenges: [
      { constraint: 'A video may have an explicit subtitle file, a sidecar file, or an embedded track.', response: 'The subtitle lookup checks those sources in order and reports the one it used.' },
      { constraint: 'Captions need to match the edited cut, not the original source.', response: 'The captioner runs after editing and burns the captions onto the edited local video.' }
    ],
    statusDetail: 'Working local prototype. The captioner burns styled captions onto local videos and writes the output files. No public deployment or usage metric is claimed.',
    notClaimed: 'No video volume, publishing schedule, or client deployment is claimed on this page.'
  },
  {
    slug: 'soletisfaction',
    number: '08',
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
      caption: 'Captures from the admin and customer sides of the capstone.',
      images: [
        {
          src: 'assets/screens/soletisfaction-admin-products.png',
          alt: 'Soletisfaction admin product list with prices, categories, stock, and markdowns.',
          caption: 'The product list: prices, categories, stock, markdowns, and archive controls.',
          tag: 'admin',
          wide: true,
          w: 1006,
          h: 481
        },
        {
          src: 'assets/screens/soletisfaction-admin-dashboard.png',
          alt: 'Soletisfaction admin dashboard with sales analytics and totals.',
          caption: 'The admin dashboard: earnings, users, sales, active orders, and returns.',
          tag: 'dashboard',
          wide: true,
          w: 840,
          h: 394
        },
        {
          src: 'assets/screens/soletisfaction-customer-login.png',
          alt: 'Soletisfaction customer login screen.',
          caption: 'The customer sign-in screen for the online store.',
          tag: 'customer',
          wide: true,
          w: 1007,
          h: 446
        },
        {
          src: 'assets/screens/soletisfaction-catalog.png',
          alt: 'Soletisfaction customer product catalog with category filters.',
          caption: 'The customer catalog with category filters, prices, and stock status.',
          tag: 'storefront',
          wide: true,
          w: 1010,
          h: 445
        }
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
