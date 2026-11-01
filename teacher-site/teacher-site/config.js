// ===== EDIT THIS FILE ONLY =====
window.SITE = {
  name: "Όνομα Δασκάλου",            // teacher / brand name
  nameEn: "Teacher Name",
  email: "info@example.com",
  // Zoom
  zoomJoinUrl: "https://zoom.us/j/0000000000?pwd=PASTE_PASSWORD",
  zoomMeetingId: "000 0000 0000",
  zoomPasscode: "123456",
  // Weekly lesson: 0=Sun ... 3=Wed ; time in Athens/Cyprus time
  lesson: { weekday: 3, hour: 20, minute: 0, durationMin: 90, tz: "Europe/Athens" },
  lessonTitle: { el: "Ζωντανό μάθημα στο Zoom", en: "Live lesson on Zoom" },
  // Banner video: put a file next to index.html (e.g. banner.mp4) or leave "" for animated background
  bannerVideo: "",
  bannerPoster: "",
  currency: "€",
  freeShippingFrom: 3
};
window.BOOKS = [
  { id:1, cat:"book", el:"Οδύσσεια – Ερμηνευτική προσέγγιση", en:"Odyssey – An Interpretive Approach", price:25.97, old:37.10, hue:38 },
  { id:2, cat:"book", el:"Κρατύλος", en:"Cratylus", price:25.97, old:37.10, hue:200 },
  { id:3, cat:"book", el:"Ελευσίνια Μυστήρια", en:"Eleusinian Mysteries", price:25.97, old:37.10, hue:340 },
  { id:4, cat:"book", el:"Διόνυσος", en:"Dionysus", price:25.97, old:37.10, hue:280 },
  { id:5, cat:"book", el:"Κώδικες μύησης", en:"Codes of Initiation", price:25.97, old:37.10, hue:150 },
  { id:6, cat:"book", el:"Πυθαγόρας", en:"Pythagoras", price:25.97, old:37.10, hue:20 },
  { id:7, cat:"set",  el:"Σετ Ομήρου (3 βιβλία)", en:"Homer Set (3 books)", price:40.00, old:74.20, hue:45 },
  { id:8, cat:"set",  el:"Σετ Μυστηρίων (3 βιβλία)", en:"Mysteries Set (3 books)", price:35.00, old:65.72, hue:310 },
  { id:9, cat:"seminar", el:"Σεμινάριο: Ορφικοί Ύμνοι", en:"Seminar: Orphic Hymns", price:37.20, old:62.00, hue:180 },
  { id:10,cat:"seminar", el:"Webinar: Ελευσίνια", en:"Webinar: Eleusis", price:62.00, old:0, hue:260 }
];
