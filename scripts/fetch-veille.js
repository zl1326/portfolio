const Parser = require("rss-parser");
const { createClient } = require("@supabase/supabase-js");

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);
const parser = new Parser();

const FEEDS = [
  { url: "https://www.cert.ssi.gouv.fr/feed/", source: "CERT-FR" },
  { url: "https://thehackernews.com/feeds/posts/default", source: "The Hacker News" },
  { url: "https://krebsonsecurity.com/feed/", source: "Krebs on Security" },
];

async function run() {
  let totalInserted = 0;

  for (const feed of FEEDS) {
    console.log("Recuperation de " + feed.source + "...");

    try {
      const parsed = await parser.parseURL(feed.url);
      const items = parsed.items.slice(0, 10);

      for (const item of items) {
        const { error } = await supabase
          .from("veille_articles")
          .upsert(
            {
              title: item.title,
              url: item.link,
              source: feed.source,
              published_at: item.pubDate ? new Date(item.pubDate).toISOString() : null,
            },
            { onConflict: "url", ignoreDuplicates: true }
          );

        if (error) {
          console.error("Erreur insertion pour " + feed.source + ":", error.message);
        } else {
          totalInserted++;
        }
      }

      console.log(feed.source + " : " + items.length + " articles traites.");
    } catch (err) {
      console.error("Erreur recuperation flux " + feed.source + ":", err.message);
    }
  }

  console.log("Termine. " + totalInserted + " articles traites au total.");
}

run();
