# Deploying to Vercel

You have two easy paths. Option 1 is the simplest if you're not comfortable with Git.

## Option 1 — Vercel CLI (fastest, no GitHub needed)

1. Install the Vercel CLI globally:
   ```bash
   npm i -g vercel
   ```
2. From the project folder, log in:
   ```bash
   vercel login
   ```
3. Deploy:
   ```bash
   vercel
   ```
   Answer the prompts (accept the defaults — Vercel auto-detects Next.js).
4. For your **production** URL:
   ```bash
   vercel --prod
   ```

Your site goes live at `https://<project-name>.vercel.app` in about a minute.

## Option 2 — GitHub + Vercel Dashboard (recommended long-term)

1. Push this project to a new GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **Add New → Project**.
4. Select your repository. Vercel detects the Next.js framework automatically — leave the build settings as-is:
   - Build command: `next build`
   - Output directory: `.next`
   - Install command: `npm install`
5. Click **Deploy**.
6. Every future `git push` to `main` auto-deploys. Pushes to other branches get their own preview URL — handy for trying edits before they go live.

## Custom domain (optional)

1. In your Vercel project, open **Settings → Domains**.
2. Add your domain (e.g. `harithama.com`).
3. Vercel shows the DNS records to add at your registrar (usually an `A` record or `CNAME`). Add them and wait for propagation (minutes to a few hours).

## Before you deploy — checklist

- [ ] Filled in real `email`, `phone`, and `linkedin` in `app/lib/data.ts`
- [ ] Added your resume PDF to `/public` (matching `resumeFile` in `data.ts`)
- [ ] Ran `npm run build` locally once to confirm there are no errors
- [ ] Double-checked all project/internship descriptions for typos

## Environment variables

This project doesn't require any environment variables — it's fully static content, so there's nothing to configure in Vercel's **Settings → Environment Variables**.
