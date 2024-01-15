import { globby } from "globby";
import path from "path";
import prettier from "prettier";
import fs from "fs";

async function generateSitemap() {
    const pages = await globby(
        [
            "app/**/page{.js,.mdx,.tsx}",
            "!pages/_*.tsx",
            "!pages/api",
            "!pages/404.tsx",
        ],
        { cwd: path.join(process.cwd(), "src") }
    );
    const urlSet = pages
        .map(
            (x) =>
                `<url><loc>https://cs.ieeemuj.com${x
                    .replace("pages/", "/")
                    .replace(".tsx", "")
                    .replace(".mdx", "")
                    .replace("index", "")
                    .replace("page" , "")
                    .replace("app" , "")}</loc></url>`
        )
        .join("");
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlSet}</urlset>`;


    fs.writeFileSync(path.join(process.cwd(), "public", "sitemap.xml"), sitemap);
}

generateSitemap();