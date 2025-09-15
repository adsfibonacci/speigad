import express from "express";
import path from "path";
const app = express();
const port = process.env.PORT || 3000;
// Serve static assets from public
app.use("/public", express.static(path.join(process.cwd(), "public")));
// Minimal HTML shell
app.get("/", (_req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Alexander Speigle</title>
      </head>
      <body>
        <script type="module" src="/static/client.js"></script>
      </body>
    </html>
  `);
});
app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
