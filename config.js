const CONFIG = {
  // --- BASIC TIER BRANDING ---
  clubName: "Strawberry Creek",
  tagline: "A Golf Group Unlike Any Other",
  logoUrl: "./assets/logo.png", // Path to the client's logo
  customGalleryName: "Kraig's Korner", // Personalized name for the "Bunker" wall
  
  // --- SECURITY ---
  groupPassword: "golf", // Single password to enter the site
  
  // --- LOCATION (For Weather) ---
  defaultLat: 42.58,
  defaultLon: -87.82,

  // --- PREMIUM FEATURE TOGGLES ---
  enableClientAdmin: false,  // Set to true to show the Roster Management panel
  enablePlayaClub: false,    // Set to true to show the Leaderboard
  enableExtendedDays: false, // Set to true for Fri1/Mon1/Fri2/Mon2 support
  
  // --- DATABASE ---
  supabaseUrl: "https://your-project.supabase.co",
  supabaseKey: "your-anon-key"
};
