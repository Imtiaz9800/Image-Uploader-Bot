export const BOT_TOKEN = Deno.env.get("BOT_TOKEN");
export const IMGBB_UPLOAD_URL = "https://api-integretion-unblocked.vercel.app/imgbb";
export const SUBSCRIPTION_CHECK_BOT_TOKEN = BOT_TOKEN;
export const MONGO_URI = Deno.env.get("MONGO_URI");
export const CHANNEL_USERNAME = Deno.env.get("CHANNEL_USERNAME") // example -> @Private_Bots
export const USE_DB = Boolean(MONGO_URI);
export const DEVELOPER_ID = 5190902724;
export const WELCOME_IMAGE_URL = "https://i.imghippo.com/files/GdN9496KmY.jpg";

// Validate required variables
const requiredVars = ["BOT_TOKEN", "CHANNEL_USERNAME"];
requiredVars.forEach((varName) => {
  if (!Deno.env.get(varName)) {
    throw new Error(`Missing required environment variable: ${varName}`);
  }
});

if (!CHANNEL_USERNAME.startsWith("@")) {
  throw new Error('Invalid CHANNEL_USERNAME: it must start with "@"');
}

export const CLEAN_USERNAME = CHANNEL_USERNAME.replace(/@/g, '');