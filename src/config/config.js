// ============================================================================
// WEDDING CONFIGURATION
// This is the ONLY file you should need to edit to customize the invitation.
// Replace text, dates, image paths, and links below.
// Image paths should point to files you add in src/assets/images/.
// ============================================================================

// Import assets so Vite includes them in the production build. Keep images
// inside `src/assets/...` and update these imports when swapping photos.

import event1 from '../assets/images/events/event1.webp';
import event2 from '../assets/images/events/event2.webp';
// import doorLeft from '../assets/images/door/door-left.jpg';
import doorLeft from '../assets/images/door/door-left.webp';
// import doorRight from '../assets/images/door/door-right.jpg';
import doorRight from '../assets/images/door/door-right.webp';
import doorFrame from '../assets/images/door/door_frame.png';

//import peacockPlaceholder from '../assets/images/peacock-placeholder.svg';
// Background music (replace with your file in src/assets/audio/)
import bgm from '../assets/audio/bgm.mp3';
import coupleBg from '../assets/images/props/bg2.png';
import welcomeBg from '../assets/images/props/welcomebg.png';
import godImg from '../assets/images/props/god.png';
import scratchBg from '../assets/images/props/scratch_bg.png';
// import section2Bg from '../assets/images/props/green_section.png';
import section2Bg from '../assets/images/props/invi_bg.png';
import venue2Bg from '../assets/images/venue_bg.png';
import eventBg from '../assets/images/event_bgr.png';
import joinUsBg from '../assets/images/joinus_bg.webp';


const config = {
  // Set true to allow the invitation on tablets, desktops, and landscape screens.
  allowLargeDisplays: true,

  // ---------------------------------------------------------------- SEO
  seo: {
    siteTitle: 'House warming ceremony — Invitation',
    description: 'Join us to celebrate our house warming ceremony on November 22, 2026.',
    url: 'https://gruha-pravesha-eta.vercel.app',
    ogImage: '/cover.png',
  },

  // ---------------------------------------------------------------- HERO SECTION
  heroSection: {
    intro: 'You are Cordially Invited to our',
    title: 'Gruha Pravesha',
    titleFontSize: 'clamp(40px, 12vw, 96px)',
    titleGradientTop: 'rgb(1, 52, 1)',
    titleGradientBottom: '#0f5c4a',
    subtitle: 'House Warming Ceremony',
    subtitlePosition: {
      top: '0px',
      right: 'auto',
      bottom: 'auto',
      left: '0px',
    },
    bottomText: {
      text: 'A New Home, A New Beginning',
      color: '#26080D',
      fontSize: '1rem',
      fontWeight: 700,
      fontFamily: '"Cormorant Garamond", serif',
      textAlign: 'center',
      position: {
        top: 'auto',
        right: '0',
        bottom: '20%',
        left: '0',
      },
    },
  },
  section2: {
    enabled: true,
    backgroundImage: section2Bg,
    backgroundSize: '100% 100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#F6ECD9',
    height: '100svh',
    minHeight: '600px',
    contentPosition: { top: '20%', right: '8%', bottom: 'auto', left: '8%' },
    contentGap: '1rem',
    heading: {
      text: 'Invitation',
      color: '#FFF8E7',
      fontFamily: '"Cormorant Garamond", serif',
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: 1.2,
      textAlign: 'center',
    },
    introParagraph: {
      text: 'With the divine blessings of our Almighty and elders,',
      color: '#F8F3E8',
      fontFamily: '"Mukta", sans-serif',
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.6,
      textAlign: 'center',
    },
    subheading: {
      text: 'Smt. Lalitha & Shri Hanumantha',
      color: '#E8C477',
      fontFamily: '"Cormorant Garamond", serif',
      fontSize: '1.25rem',
      fontWeight: 900,
      lineHeight: 1.2,
      textAlign: 'center',
    },
    subheading2: {
      text: 'Smt. Mahalakshmi & Shri Rajesh',
      color: '#E8C477',
      fontFamily: '"Cormorant Garamond", serif',
      fontSize: '1.25rem',
      fontWeight: 900,
      lineHeight: 1.2,
      textAlign: 'center',
    },
    paragraph: {
      text: 'we cordially invite you and your family to grace the occasion of our House Warming Ceremony and bless us as we step into our new home.',
      color: '#F8F3E8',
      fontFamily: '"Mukta", sans-serif',
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.6,
      textAlign: 'center',
    },
    dateTime: {
      enabled: true,
      heading: 'With Compliments from Kutties:',
      date: 'Dikshan kumar &',
      time: 'Lavin Kumar',
      headingColor: '#E8C477',
      color: '#E8C477',
      iconColor: '#26080D',
      headingFontFamily: '"Cormorant Garamond", serif',
      fontFamily: '"Mukta", sans-serif',
      headingFontSize: '1.25rem',
      fontSize: '1rem',
      headingFontWeight: 700,
      fontWeight: 500,
      iconSize: 18,
      iconTextGap: '0.5rem',
      rowGap: '0.5rem',
      textAlign: 'center',
      alignItems: 'center',
    },
  },

  quote: {
    text: 'Two souls, one heart, one destiny woven in gold thread and temple bells.',
    by: 'House warming ceremony',
  },

  welcome: {
    flowerEmojis: ['🌼', '🌸'],
    backgroundImage: welcomeBg,
    backgroundColor: '#170509',
    backgroundGradient: 'linear-gradient(rgba(23, 5, 9, 0), rgba(23, 5, 9, 0.72))',
    backgroundImageOpacity: 1,
    backgroundGradientOpacity: 1,
  },

  // ------------------------------------------------------------- DATES
  weddingDate: '2026-11-22T05:00:00',
  receptionDate: '2026-11-22T05:00:00',

  // ------------------------------------------------------------- VENUE
  venue: {
    name: 'The Venue',
    address: '',
    mapsLink: 'https://maps.app.goo.gl/WmnSSgpmcJteWaDx8',
    mapsEmbed:
      'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3889.551919338341!2d77.66564227507509!3d12.87219198743416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDUyJzE5LjkiTiA3N8KwNDAnMDUuNiJF!5e0!3m2!1sen!2sin!4v1794307022411!5m2!1sen!2sin',
    parkingInfo: '4th cross road, Akshaya Layout, Naganathapura, Rayasandra, Bengaluru, Karnataka - 560100',
    hotelsNearby: [
      { name: 'The Oberoi, New Delhi', distance: '2.1 km' },
      { name: 'Taj Mahal Hotel', distance: '3.4 km' },
    ],
  },
  venue2: {
    enabled: true,
    backgroundImage: venue2Bg,
    backgroundSize: '100% 100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#07320A',
    height: 'auto',
    minHeight: '700px',
    aspectRatio: '768 / 1365',
    contentPosition: { top: '15%', right: '7%', bottom: 'auto', left: '7%' },
    contentMaxWidth: '520px',
    contentGap: '0.85rem',
    heading: {
      text: 'Venue',
      // fontFamily: '"Great Vibes", cursive',
      //fontFamily: '"Great Vibes", cursive',
      fontSize: '2rem',
      // fontSize: 'clamp(3rem, 10vw, 2.5rem)',
      fontWeight: 400,
      gradientTop: '#FFF4B0',
      gradientMiddle: '#F6C343',
      gradientBottom: '#B87508',
      textAlign: 'center',
      lineHeight: 1.05,
    },
    address: {
      text: '',
      details: '',
      color: '#FFFFFF',
      fontFamily: 'display, sans-serif',
      fontSize: '0.9rem',
      fontWeight: 400,
      lineHeight: 1.5,
      textAlign: 'center',
    },
    button: {
      text: 'View Location on Map',
      textColor: '#14532D',
      fontFamily: '"Mukta", sans-serif',
      fontSize: '0.95rem',
      fontWeight: 700,
      gradientStart: '#B87508',
      gradientMiddle: '#FFE58A',
      gradientEnd: '#D99A16',
      highlightColor: 'rgba(255,255,255,0.82)',
      borderColor: '#FFE58A',
      borderRadius: '999px',
      padding: '0.9rem 1.4rem',
      shineDuration: '2.8s',
      iconSize: 20,
      iconTextGap: '0.65rem',
    },
    map: {
      embedUrl: '',
      height: '180px',
      borderRadius: '12px',
      borderColor: 'rgba(255, 215, 95, 0.8)',
      show: false,
    },
  },

  // ---------------------------------------------------------- CONTACTS
  contacts: {
    //groomPhone: '+91',
    //bridePhone: '+919886678539',
    parentsPhone: '+919886678539',
    whatsapp: '919886678539',
    //email: 'hello@sushmavinay.wedding',
  },
  contactsSection: {
    title: 'Get In Touch',
    titleSmall: 'Need help?',
    // Color configuration for contact section
    colors: {
      title: '#0f5c4a',           // ivory - main title color
      titleSmall: 'rgb(15, 92, 74)',      // goldBright - subtitle color
      cardBackground: 'rgba(15,92,74,.07)',  // card background
      cardBorder: 'rgba(15,92,74,.25)',      // card border
      icon: 'rgb(15, 92, 74)',            // goldBright - icon color
      label: 'rgb(15, 92, 74)',           // ivory - label text color
      overlay: 'rgba(10, 3, 5, 0)', // background overlay opacity
    },
    items: [
      //{ source: 'contacts.groomPhone', label: 'Call us', icon: 'phone' },
      // { source: 'contacts.bridePhone', label: 'Call us', icon: 'phone' },
      { source: 'contacts.parentsPhone', label: 'Contact us', icon: 'phone' },
      { source: 'contacts.whatsapp', label: 'WhatsApp', icon: 'whatsapp' },
      { source: 'contacts.email', label: 'Instagram', icon: 'instagram' },
      { source: 'venue.mapsLink', label: 'Directions', icon: 'map' },
    ],
  },
  joinUs: {
    enabled: true,
    backgroundImage: joinUsBg,
    backgroundColor: '#F6ECD9',
    backgroundSize: '100% 100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100svh',
    minHeight: '600px',
    heading: {
      text: 'Join Us',
      color: '#fff8e7',
      fontFamily: '"Cormorant Garamond", serif',
      fontSize: 'clamp(2rem, 8vw, 3rem)',
      fontWeight: 700,
      lineHeight: 1.1,
      textAlign: 'center',
      position: { top: '8%', right: '8%', bottom: 'auto', left: '8%' },
    },
    paragraph: {
      text: 'We look forward to celebrating this special occasion with you.',
      color: '#fff8e7',
      fontFamily: '"Mukta", sans-serif',
      fontSize: '1.1rem',
      fontWeight: 400,
      lineHeight: 1.6,
      textAlign: 'center',
      position: { top: '16%', right: '10%', bottom: 'auto', left: '10%' },
    },
  },
  instagram: 'https://instagram.com/sushmavinay',

  // ---------------------------------------------------------- GALLERY
  gallerySection: {
    title: 'Gallery',
    titleSmall: 'Moments',
    subtitle: 'A few frames from the story so far.',
    // Color configuration for gallery section
    colors: {
      title: '#0F5C4A',           // ivory - main title color
      titleSmall: '#F6ECD9',      // goldBright - subtitle color
      subtitle: '#F6ECD9',        // rose - subtitle text color
      overlay: 'rgba(10,3,5,0.2)', // background overlay opacity
    },
  },

  // ------------------------------------------------------------- MUSIC
  // Path to an mp3 in src/assets/audio/. Leave empty string to disable.
  backgroundMusic: bgm,
  // Default background music volume (0.0 - 1.0). Change to 0.0 to mute.
  backgroundMusicVolume: 0.5,
  musicPlayer: {
    colors: {
      containerBackground: 'rgba(1, 52, 1, 0.7)',
      containerBorder: 'rgba(201,162,75,.3)',
      containerShadow: 'rgba(0,0,0,.45)',
      buttonBackground: '#e0b862',
      buttonIcon: 'rgb(1, 52, 1)',
      equalizerBars: '#E8C874',
    },
  },
  soundEffects: {
    templeBells: '',
    doorOpen: '',
    petalsFalling: '',
    scratchSound: '',
    confetti: '',
  },

  // ----------------------------------------------------------- THEME
  theme: {
    colors: {
      maroon: '#3b0d14',
      brown: '#681723',
      maroonDeep: '#26080D',
      gold: '#C9A24B',
      goldBright: '#E8C874',
      ivory: '#F6ECD9',
      emerald: '#0F5C4A',
      rose: '#E3B7A0',
      ink: '#241008',
      realGold: '#fbbe23'
    },
    // Per-event readable text colors (override defaults for specific events)
    colorsByEvent: {
      //Haldi: { heading: '#ff9d00', sub: '#ffffff' }, // dark maroon on yellow/white
      'Gruha Pravesha': { heading: '#E8C477', sub: '#ffffff' },
      'Lunch': { heading: '#E8C477', sub: '#ffffff' },
      Wedding: { heading: '#3B0D14', sub: '#241008' }, // maroon on cream
      Reception: { heading: '#241008', sub: '#8a6b4a' }, // dark ink on white/cream
    },
    fonts: {
      display: '"Cormorant Garamond", serif',
      cinzel: '"Cinzel", serif',
      body: '"Mukta", sans-serif',
      devanagari: '"Tiro Devanagari Hindi", serif',
    },
  },

  // ------------------------------------------------------------ EVENTS
  // `sectionBackgroundImage`: optional full-section background for the whole
  // Events block. Leave empty to use the default themed background.
  // Each event can also set its own `backgroundImage` to override the card's
  // background individually — also optional, leave empty for the default look.
  eventsSection: {
    backgroundColor: '#fbe6c0',
    colors: {
      eyebrow: '#C9A24B',
      heading: '#0f5c4a',
      subtitle: '#0f5c4a',
      eventHeading: '#3B0D14',
      eventMeta: '#E3B7A0',
      eventDescription: '#F6ECD9',
      eventVenue: '#F6ECD9',
      dressCode: '#C9A24B',
    },
    sectionBackgroundImage: eventBg,
    sectionBackgroundSize: 'cover',
    sectionBackgroundPosition: 'center',
    sectionBackgroundRepeat: 'no-repeat',
    sectionBackgroundOverlayOpacity: 0,
  },
  coupleSection: {
    backgroundImage: coupleBg,
    godImage: godImg,
    //godSubtitle: '|| Sri Nanjundeshwara Swamy Prasanna ||',
    godSubtitle: '',
    godTop: '2%'
  },
  events: [
    {
      name: 'Gruha Pravesha',
      icon: '🌼',
      date: 'Nov 22, 2026',
      time: '5:00 AM',
      // venue: 'Akshaya layout, Bangalore',
      // dressCode: 'Yellow Attire',
      description: 'A sacred beginning filled with divine blessings and prosperity.',
      backgroundImage: event1, // optional per-card override
    },
    {
      name: 'Lunch',
      icon: '🌿',
      date: 'Nov 22, 2026',
      time: '11:00 AM',
      // venue: 'Akshaya layout, Bangalore',
      // dressCode: 'Green & Gold',
      description: 'A festive feast of tradition, togetherness, and love.',
      backgroundImage: event2,
    },
    // {
    //   name: 'Sangeet',
    //   icon: '🎶',
    //   date: 'November 22, 2026',
    //   time: '7:00 PM',
    //   venue: 'The Leela Palace Lawns',
    //   dressCode: 'Festive Indo-Western',
    //   description: "A night of dance battles between both families — bring your best moves.",
    //   backgroundImage: '/src/assets/images/3.jpg',
    // },
    // {
    //   name: 'Reception',
    //   icon: '🥂',
    //   date: 'November 22, 2026',
    //   time: '7:00 PM',
    //   venue: 'Prakruthi Vilasa, Bangalore',
    //   // dressCode: 'Formal / Black Tie',
    //   description: 'An elegant evening to celebrate the newlyweds with dinner and dance.',
    //   backgroundImage: receptionImg,
    // },
    // {
    //   name: 'Wedding',
    //   icon: '💍',
    //   date: 'November 22, 2026',
    //   time: '10:00 AM',
    //   venue: 'Prakruthi Vilasa, Bangalore',
    //   // dressCode: 'Traditional Indian',
    //   description: 'Sacred vows exchanged around the holy fire, as our families become one.',
    //   backgroundImage: weddingImg,
    // }
  ],

  // ---------------------------------------------------------- TIMELINE
  // timeline: [
  //   {
  //     year: '2019',
  //     title: 'A Chance Meeting',
  //     text: 'They met at a college photography club, arguing over the correct exposure for a sunset.',
  //     image: img1,
  //     video: '',
  //   },
  //   {
  //     year: '2021',
  //     title: 'First Trip Together',
  //     text: 'A rainy weekend in Munnar sealed what the photography club started.',
  //     image: img2,
  //     video: '',
  //   },
  //   {
  //     year: '2023',
  //     title: 'He Asked The Big Question',
  //     text: 'On a rooftop lit with fairy lights, with both families secretly watching from below.',
  //     image: img3,
  //     video: '',
  //   },
  //   {
  //     year: '2026',
  //     title: 'Forever Begins',
  //     text: 'Two families, one wedding, and a lifetime of filter coffee ahead.',
  //     image: img4,
  //     video: '',
  //   },
  // ],

  // ----------------------------------------------------------- GALLERY
  // gallery: [
  //   { src: img1, type: 'image' },
  //   { src: img2, type: 'image' },
  //   { src: img3, type: 'image' },
  //   { src: img4, type: 'image' },
  //   { src: img5, type: 'image' },
  //   { src: img6, type: 'image' },
  //   { src: img7, type: 'image' },
  //   { src: img8, type: 'image' },
  //   { src: img9, type: 'image' },
  //   { src: img10, type: 'image' },
  //   { src: img11, type: 'image' },
  //   { src: img12, type: 'image' },
  //   { src: img13, type: 'image' },
  //   { src: img14, type: 'image' },
  //   { src: img15, type: 'image' },
  //   { src: img16, type: 'image' },
  //   { src: img17, type: 'image' },
  //   //{ src: img18, type: 'image' },
  //   // { src: '/videos/highlight.mp4', type: 'video', poster: '/images/gallery-1.jpg' },
  // ],

  // ------------------------------------------------------- SAPTAPADI IMAGES
  // Configure step images here. Each step can define `image` (thumbnail)
  // and `modalImage` (larger backdrop shown in the modal).
  // saptapadi: [
  //   {
  //     number: '01',
  //     title: 'Pratham Padi',
  //     meaning: 'We walk together with faith, trust, and a shared purpose.',
  //     image: sapt1,
  //     modalImage: sapt1,
  //   },
  //   {
  //     number: '02',
  //     title: 'Dvitiiya Padi',
  //     meaning: 'We nurture strength, harmony, and a life of togetherness.',
  //     image: sapt2,
  //     modalImage: sapt2,
  //   },
  //   {
  //     number: '03',
  //     title: 'Tritiya Padi',
  //     meaning: 'We honour prosperity, wisdom, and the blessings of family.',
  //     image: sapt3,
  //     modalImage: sapt3,
  //   },
  //   {
  //     number: '04',
  //     title: 'Chaturthi Padi',
  //     meaning: 'We grow in love, comfort, and mutual respect every day.',
  //     image: sapt4,
  //     modalImage: sapt4,
  //   },
  //   {
  //     number: '05',
  //     title: 'Panchami Padi',
  //     meaning: 'We cherish courage, compassion, and a life rooted in grace.',
  //     image: sapt5,
  //     modalImage: sapt5,
  //   },
  //   {
  //     number: '06',
  //     title: 'Shashthi Padi',
  //     meaning: 'We walk in devotion, loyalty, and the light of union.',
  //     image: sapt6,
  //     modalImage: sapt6,
  //   },
  //   {
  //     number: '07',
  //     title: 'Saptami Padi',
  //     meaning: 'We vow to remain one in joy, sorrow, and forever.',
  //     image: sapt7,
  //     modalImage: sapt7,
  //   },
  // ],

  // ------------------------------------------------------------ FAMILY
  family: [
    { name: 'Dr. Suresh Raghunathan', relation: 'Father of the Bride', photo: '' },
    { name: 'Kavitha Raghunathan', relation: 'Mother of the Bride', photo: '' },
    { name: 'Ramesh Srinivasan', relation: 'Father of the Groom', photo: '' },
    { name: 'Lakshmi Srinivasan', relation: 'Mother of the Groom', photo: '' },
  ],

  // --------------------------------------------------- SCRATCH SURPRISE
  // The scratch card (2nd section, right after the Hero) reveals the
  // wedding date automatically from `weddingDate` above — no need to
  // duplicate the date here. `subtitle` is the line shown under the date
  // once revealed; customize freely.
  scratchSurprise: {
    //subtitle: "Our new house becomes a true home only when filled with your blessings and love.",
    subtitle: "From 5:00 AM Onwards",
    textColors: {
      eyebrow: '#e6a503',
      heading: '#0f5c4a',
      scratchInstruction: '#ffffff',
      cardIcon: '#F6ECD9',
      cardDay: '#F6ECD9',
      cardDate: '#F6ECD9',
      timeIcon: '#F6ECD9',
      cardTime: '#F6ECD9',
    },
    sectionBackground: {
      showBackgroundImage: true,
      backgroundImage: eventBg,
      backgroundColor: '#F6ECD9',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    },
    cardBackground: {
      showBackgroundImage: true,
      backgroundImage: scratchBg,
      backgroundColor: '#F6ECD9',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    },
  },
  countdownSection: {
    transparentBackground: true,
    showBackgroundImage: false,
    backgroundImage: eventBg,
    backgroundColor: '#F6ECD9',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    colors: {
      eyebrow: '#e1a203',
      heading: '#0f5c4a',
      tileBackground: 'rgb(1, 52, 1)',
      tileBorder: '#E8C874',
      digit: '#f7dea1',
      digitGlow: 'rgb(252, 193, 44)',
      label: '#E3B7A0',
      firefly: '#013401',
      fireflyGlow: 'rgba(1,52,1,0.7)',
    },
  },

  // ------------------------------------------------------------ RSVP
  // Point this at your backend endpoint (Formspree, Google Sheets via Apps
  // Script, custom API, etc). Leave empty to just log to console.
  rsvpEndpoint: '',

  // --------------------------------------------------------- MEMORY WALL
  // Point this at your backend endpoint. Leave empty to keep wall local
  // (seeded messages + anything the visitor adds in their own session).
  memoryWallEndpoint: '',
  memoryWallSeed: [
    { name: 'Priya', message: 'Wishing you a lifetime of love and laughter! 💛' },
    { name: 'Arjun', message: "Can't wait to dance at the sangeet!" },
  ],

  // ------------------------------------------------------------ EASTER EGGS
  easterEggs: [
    { id: 'moon', icon: '1', message: 'We walk together with faith, trust, and a shared purpose.🌙' },
    { id: 'diya', icon: '2', message: 'We nurture strength, harmony, and a life of togetherness.🪔' },
    { id: 'peacock', icon: '3', message: 'We honour prosperity, wisdom, and the blessings of family.🦚' },
    { id: 'lotus', icon: '4', message: 'We grow in love, comfort, and mutual respect every day. 🪷' },
    { id: 'moon', icon: '5', message: 'We cherish courage, compassion, and a life rooted in grace.🌙' },
    { id: 'diya', icon: '6', message: 'We walk in devotion, loyalty, and the light of union. 🪔' },
    { id: 'peacock', icon: '7', message: 'We vow to remain one in joy, sorrow, and forever. 🦚' },
  ],

  // ------------------------------------------------------------ AMBIENT LAYER
  // Controls the continuous background effect across the whole site.
  // mode: 'petals' (default flower-petal shapes) or 'emoji' (WhatsApp-style
  // flower/leaf emoji + butterflies drifting down, per your request).
  // Toggle freely — everything else about the effect stays the same either way.
  ambient: {
    mode: 'petals', // 'petals' | 'emoji' | 'off'
    spawnIntervalMs: 900,
    //emojiSet: ['🌸', '🌼', '🌷', '🍃', '🌿'],
    emojiSet: ['🌸', '🌼', '🍃', '🌿'], // flowers + leaves, edit freely
    butterflies: {
      enabled: false,
      count: 4,
      emoji: '🦋',
    },
  },

  // ------------------------------------------------------------ NAVIGATION
  // The top nav bar is hidden by default; a feather icon (top-right) opens
  // it as a slide-out drawer instead. Swap `peacockIcon` for your own image
  // whenever you have one ready — until then a placeholder is used.
  navigation: {
    style: 'feather-drawer', // 'feather-drawer' | 'bar' (classic always-visible bar)
    //peacockIcon: peacockPlaceholder,
    // Enable or disable the floating navigation (feather trigger + drawer)
    floatingEnabled: false,
  },

  // ---------------------------------------------------------- ENTRANCE DOOR
  entranceDoor: {
    background: 'radial-gradient(ellipse at center, #1a0509 0%, #0d0304 70%)',
    perspective: '2200px',
    doorImages: { left: doorLeft, right: doorRight },
    scenePosition: {
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
      width: 'auto',
      height: 'auto',
      transform: 'none',
    },
    doorImageFit: 'cover',
    doorImagePosition: 'center',
    doorShadows: {
      left: 'inset -20px 0 40px rgba(0,0,0,.4), 0 20px 60px rgba(0,0,0,.5)',
      right: 'inset 20px 0 40px rgba(0,0,0,.4), 0 20px 60px rgba(0,0,0,.5)',
    },
    leaves: {
      left: {
        top: '0',
        right: '50%',
        bottom: 'auto',
        left: '30px',
        width: 'auto',
        height: '100%',
        transformOrigin: 'left center',
      },
      right: {
        top: '0',
        right: '30px',
        bottom: 'auto',
        left: '50%',
        width: 'auto',
        height: '100%',
        transformOrigin: 'right center',
      },
    },
    decoration: {
      enabled: true,
      image: doorFrame, // Set an imported image or a public path such as '/entrance-decoration.png'.
      alt: '',
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
      objectFit: 'fill',
      objectPosition: 'center',
      opacity: 1,
      zIndex: 20,
    },
    glow: {
      background: 'radial-gradient(ellipse 60% 70% at 50% 45%, rgba(232,200,116,0.9), rgba(232,200,116,0) 60%)',
      zIndex: 1,
    },
    seam: {
      enabled: true,
      width: '3px',
      background: 'linear-gradient(180deg, transparent, rgba(0,0,0,.6) 10%, rgba(0,0,0,.6) 90%, transparent)',
      zIndex: 2,
    },
    prompt: {
      enabled: true,
      text: 'Tap the door to enter',
      color: '#fdfdfc',
      fontFamily: '"Mukta", sans-serif',
      fontSize: '0.75rem',
      fontWeight: 500,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      opacity: 0.8,
      textShadow: 'none',
      top: 'auto',
      right: '0',
      bottom: '7rem',
      left: '0',
      zIndex: 30,
    },
  },

  // ------------------------------------------------------------ ANIMATION
  animation: {
    doorOpenDurationS: 2,
    doorOpenDelayS: 0.15,
    doorLeftOpenAngle: -108,
    doorRightOpenAngle: 108,
    doorEase: 'power3.inOut',
    doorBloomDurationS: 0.55,
    doorBloomFadeDurationS: 0.45,
    // doorBloomFadeEase: 'power2.out',
    doorDecorationFadeDurationS: 0.3,
    doorDecorationFadeEase: 'power2.out',
    doorSceneExitDelayS: 0,
    doorSceneExitScale: 0.3,
    doorSceneExitDurationS: 0,
    doorSceneExitEase: 'power1.in',
    lenisSmoothness: 1.1, // higher = smoother/slower
    reduceMotionRespected: true,
  },
};

export default config;
