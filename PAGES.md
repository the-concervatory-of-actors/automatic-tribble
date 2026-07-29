Cloudflare Pages deployment instructions

To publish this repository's static site with Cloudflare Pages, set the Pages build command to:

  npx wrangler pages publish ./static

Notes:
- This command publishes the contents of the `static/` directory directly.
- Make sure your `static/` folder contains an `index.html` (this repo already has `static/index.html`).
- If you prefer deploying a Workers Site instead, you can add a `[site]` section to `wrangler.toml` and provide a workers-site entry-point, but that requires an additional build step that generates `workers-site/` and the assets manifest.

If you'd like, I can also add a GitHub Actions workflow to automatically run `npx wrangler pages publish ./static` on push. Would you like that?