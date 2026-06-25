export const sectionsBreakdown = [
  {
    id: "earlyWeb",
    label: "The Early Web",
    content: `The internet didn't arrive polished. It arrived raw — a tangle of blue hyperlinks, blinking text, and table-based layouts held together by hope and HTML 2.0. The year was 1991, and Tim Berners-Lee had just handed the world a blank canvas. Nobody quite knew what to paint.
  
  Early websites were purely functional. If the text was readable and the link worked, it was a success. Design wasn't a conversation — it was an afterthought. Pages were built in Notepad, uploaded via FTP, and viewed on monitors so small that 640px felt generous. The web was a library, not an experience.`,
    points: [
      {
        id: "earlyWeb-html",
        label: "Plain HTML & Tables",
        content: `Before CSS was widely supported, developers used HTML tables for everything — not just data, but entire page layouts. Columns, sidebars, navigation bars — all built with <table>, <tr>, and <td>. It was hacky, fragile, and completely brilliant given the constraints. Spacer GIFs — transparent 1x1 pixel images — were used to nudge elements into position. It sounds absurd now. At the time, it was craft.
  Font choices were limited to whatever the user had installed on their machine. Comic Sans wasn't a joke — it was one of six options. Colors were chosen from a "web-safe palette" of 216 shades that rendered consistently across browsers. Design decisions weren't aesthetic — they were survival tactics.`,
      },
      {
        id: "earlyWeb-geocities",
        label: "Geocities & Personal Pages",
        image: "/early-web.jpg",
        content: `GeoCities launched in 1994 and became the internet's first neighborhood. Users claimed virtual addresses — themed districts like "SiliconValley" for tech pages or "Hollywood" for entertainment — and built personal homepages that were chaotic, expressive, and deeply human. Tiled backgrounds, visitor counters, and MIDI music that autoplay the moment the page loaded — it was sensory overload by today's standards.
  
  But there was something honest about it. Every page screamed personality. You knew a real person made it, because no algorithm would ever choose that combination of neon green text on a black background. GeoCities was deleted by Yahoo in 2009 — one of the most criticized decisions in internet history. The Archive Team rescued over 650 gigabytes of it. Some things are worth keeping.`,
      },
    ],
  },
  {
    id: "flashEra",
    label: "The Flash Era",
    content: `Around 1996, something changed. Macromedia Flash arrived and handed designers a weapon they'd never had before — motion. Suddenly, websites could move, breathe, and perform. The browser became a stage, and everyone wanted a show.
  
  Flash was a genuine creative revolution. It decoupled web design from the limitations of HTML and CSS, letting designers — not just developers — dictate exactly how things looked and behaved. For a few glorious years, the web felt like it was becoming an art form. Then it became an arms race.`,
    points: [
      {
        id: "flashEra-skeuomorphism",
        label: "Skeuomorphism",
        content: `Skeuomorphism was the philosophy that digital interfaces should mimic their physical counterparts. Buttons should look pressable. Calendars should look like leather-bound notebooks. Notes apps should look like legal pads, complete with stitching along the top edge. The logic was sound — users were new to digital interfaces, and familiar visual metaphors reduced friction.
  Apple perfected this under Scott Forstall. iCal had a torn paper texture at the top. The Contacts app looked like an address book. The Game Center had green felt like a casino table. Critics called it kitsch. Users loved it. And then, almost overnight, they didn't.`,
      },
      {
        id: "flashEra-intros",
        label: "Splash Screens & Intros",
        image: "/flash-era.png",
        content: `If you used the internet between 1998 and 2005, you remember the skip intro button. Flash enabled elaborate animated introductions — logo reveals, particle effects, soundscapes — that played before you could access the actual website. Agencies competed to out-spectacle each other. Loading bars became design elements. Preloaders had preloaders.
  
  The user experience was, objectively, terrible. You wanted to find a phone number. Instead, you watched a 45-second animation of a logo assembling itself from shards of light. But nobody cared. It was new. It was impressive. And it taught the industry its most important lesson: just because you can doesn't mean you should.`,
      },
    ],
  },
  {
    id: "mobileRevolution",
    label: "The Mobile Revolution",
    content: `On January 9, 2007, Steve Jobs walked onto a stage in San Francisco and introduced a device with "a widescreen iPod, a revolutionary mobile phone, and a breakthrough internet communicator." The audience laughed when he said it was all one device. Then they understood. Then everything changed.
  
  The iPhone didn't just launch a product — it launched a crisis. Designers who had spent years mastering fixed-width, 960px grid layouts suddenly had to reckon with a 320px screen that people held in their hands, touched with their fingers, and carried everywhere. The comfortable assumptions of desktop design evaporated overnight.`,
    points: [
      {
        id: "mobileRevolution-responsive",
        label: "Responsive Design",
        content: `In 2010, Ethan Marcotte published an article in A List Apart that introduced a term that would define the next decade of web design: responsive design. The idea was elegant — rather than building separate sites for desktop and mobile, you build one site that responds to its environment. Fluid grids, flexible images, and media queries became the new fundamentals.
  
  The CSS that followed wasn't always pretty. Floats were coerced into layout systems they were never designed for. Clearfix hacks were copied and pasted without understanding. But responsive design worked, and it worked well enough that by 2015, Google began penalizing non-mobile-friendly sites in search rankings. Adaptation was no longer optional.`,
      },
      {
        id: "mobileRevolution-mobileFirst",
        label: "Mobile First Thinking",
        image: "/mobile-rev.jpg",
        content: `Luke Wroblewski coined the phrase "mobile first" in 2009, and it flipped the design process inside out. Instead of designing for desktop and scaling down, you start with the smallest screen and scale up. The constraint becomes the creative brief. When you only have 320px and a thumb, every element earns its place or gets cut.
  
  Mobile first thinking changed more than screen sizes — it changed priorities. Performance became a design value, not just an engineering concern. Content hierarchy became critical when you couldn't rely on sidebars and secondary columns. Touch targets replaced hover states. The discipline that emerged from these constraints made the web genuinely better.`,
      },
    ],
  },
  {
    id: "flatDesign",
    label: "Flat Design & Minimalism",
    content: `In June 2013, Apple released iOS 7 and the design world collectively gasped. Gone were the leather textures, the stitching, the drop shadows, the gradients. In their place: clean lines, bold typography, translucency, and color. Jony Ive's design language was stark, confident, and polarizing. Designers had opinions. Users had to relearn where everything was.
  
  But iOS 7 wasn't a sudden mutation — it was a response to something already happening. Microsoft's Metro design language had been pushing flat aesthetics since 2010. Google was quietly building what would become Material Design. The industry had grown tired of ornamentation and was hungry for clarity.`,
    points: [
      {
        id: "flatDesign-ios7",
        label: "The iOS 7 Moment",
        content: `The reaction to iOS 7 was visceral. Designers who had built careers on crafting photorealistic icons suddenly found their aesthetic obsolete. Entire visual vocabularies — bevels, embossing, realistic textures — were declared dead by a single software update. It was brutal, and it was clarifying.
  
  What iOS 7 actually accomplished, beyond the aesthetic shift, was a reframing of what interface design was for. It argued that the interface should get out of the way of the content. The chrome should be invisible. The experience should feel like touching the content directly, not touching a representation of it. That philosophy has quietly governed interface design ever since.`,
      },
      {
        id: "flatDesign-material",
        label: "Google Material Design",
        image: "flat-design.jpeg",
        content: `Google's answer to flat design wasn't flat at all — it was Material. Introduced in 2014, Material Design introduced the concept of a digital "paper and ink" metaphor. Elements existed on surfaces that had depth and cast shadows. Motion had meaning — things moved in ways that communicated hierarchy and relationship. It was flat design with physics.
  
  Material Design was also the first major design system to be released publicly as a complete, documented framework. Colors, typography, spacing, motion — all specified, all justified. It shifted the conversation from individual design decisions to systems thinking. And it gave developers and designers a common language that reduced the friction between them enormously.`,
      },
    ],
  },
  {
    id: "designSystemsEra",
    label: "The Design Systems Era",
    content: `By 2015, the web had grown complex enough that individual design decisions weren't the bottleneck anymore — consistency was. Large companies were shipping products built by hundreds of designers and developers across dozens of teams. The result was visual chaos: seventeen shades of blue, button styles that varied by product, typography that shifted between pages. Users noticed, even when they couldn't articulate why.
  
  The design systems era emerged from a simple but powerful idea: define things once and reuse them everywhere. A button shouldn't be redesigned every time someone needs a button. A color palette shouldn't be assembled from memory. A spacing scale shouldn't be eyeballed. Systems thinking entered design, and it changed the craft permanently.`,
    points: [
      {
        id: "designSystemsEra-figma",
        label: "Figma & Collaboration",
        content: `Figma launched in 2016 with a proposition that seemed obvious in retrospect: design should work like Google Docs. Multiple people, one file, real-time. No more emailing PSDs. No more version conflicts. No more "which file is the final one." The browser became the design tool, and collaboration became native to the process rather than bolted on.
  
  The effect on workflows was transformative. Developers could inspect designs without being handed a file. Stakeholders could comment without being in the room. Design reviews could happen asynchronously. Figma didn't just improve how designers worked — it changed who was involved in the design process. The handoff, that awkward moment between design and engineering, became a conversation instead of a transaction.`,
      },
      {
        id: "designSystemsEra-tokens",
        label: "Design Tokens",
        image: "/design-systems.webp",
        content: `Design tokens are the smallest decisions in a design system — a specific hex value, a spacing unit, a font size, a duration. Named and stored centrally, they become the connective tissue between design tools and code. Change a token, and the change propagates everywhere that token is used. It sounds administrative. It is, in fact, one of the most powerful ideas in modern design engineering.
  
  Tokens enabled something that had seemed impossible: a single source of truth shared between Figma and a codebase. When a designer changes "color-primary" in the design system, that change can automatically flow to CSS variables, iOS Swift files, and Android XML. The design and the product stay in sync — not through discipline, but through infrastructure.`,
      },
    ],
  },
  {
    id: "aiFrontier",
    label: "AI & the New Frontier",
    content: `We are living through another inflection point — one that feels as significant as the iPhone moment, and possibly more disorienting. AI hasn't just entered the design process; it's begun to question the nature of the process itself. When a tool can generate a reasonable UI from a text prompt in seconds, what exactly is the designer's job?
  The honest answer is that nobody knows yet. The tools are moving faster than the frameworks for thinking about them. Designers are simultaneously threatened, empowered, and confused — sometimes in the same afternoon. What's clear is that the skills that matter most are shifting, and the designers who thrive will be the ones who adapt without abandoning what makes design human.`,
    points: [
      {
        id: "aiFrontier-generative",
        label: "Generative UI",
        content: `Generative UI is the idea that interfaces don't have to be static — they can be created dynamically, in response to context, user behavior, or natural language input. Ask for a dashboard, get a dashboard. Describe a form, see a form. The interface becomes a response rather than a product. It's early, it's rough, and it's genuinely remarkable.
  The implications are significant enough to be uncomfortable. If a language model can assemble a functional UI from a description, the traditional design process — research, wireframes, prototypes, handoff — looks very different. Not obsolete, but transformed. The designer's role shifts from maker to editor, from author to curator. That's not a smaller role. But it is a different one.`,
      },
      {
        id: "aiFrontier-copilots",
        label: "Design Co-pilots",
        image: "/aifrontier.webp",
        content: `The more immediate and practical shift is AI as co-pilot rather than replacement. Tools like Figma's AI features, GitHub Copilot for frontend engineers, and a growing ecosystem of specialized assistants are changing the texture of daily work. Autocomplete isn't just for code anymore — it's for layouts, copy, component variants, and accessibility checks.
  The designers and developers who are thriving right now are the ones who've learned to treat AI as a collaborator with strong opinions and no taste. It can generate ten variations in the time it would take you to sketch one. It cannot tell you which variation is right, or why, or what it means for the person who'll use it. Judgment, context, and care remain stubbornly human. For now, that's enough.`,
      },
    ],
  },
];

 