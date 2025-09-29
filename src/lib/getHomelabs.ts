import { getCollection } from "astro:content";

export const getHomelabs = async () =>
    (await getCollection("homelabs"))
        .filter((homelab) => homelab.data.pubStatus || import.meta.env.DEV)
        .sort(
            (a, b) =>
                b.data.pubDate.getTime() - a.data.pubDate.getTime(),
        );

        