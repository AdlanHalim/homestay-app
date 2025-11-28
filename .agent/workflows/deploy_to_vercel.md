---
description: How to deploy the Homestay App to Vercel
---

# Deploying to Vercel

Follow these steps to publish your Homestay App on the internet for free using Vercel.

## Prerequisites
1.  **GitHub Account**: Ensure your code is pushed to a GitHub repository.
2.  **Vercel Account**: Sign up at [vercel.com](https://vercel.com) using your GitHub account.

## Step 1: Push to GitHub
If you haven't already, push your latest changes to GitHub.
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

## Step 2: Import Project in Vercel
1.  Go to your [Vercel Dashboard](https://vercel.com/dashboard).
2.  Click **"Add New..."** > **"Project"**.
3.  Find your `homestay-app` repository in the list and click **"Import"**.

## Step 3: Configure Project
1.  **Framework Preset**: Vercel should automatically detect **Vite**. If not, select it.
2.  **Root Directory**: Leave as `./` (default).
3.  **Environment Variables**:
    *   Expand the **"Environment Variables"** section.
    *   Add the following variables (copy them from your `.env` file or Supabase):
        *   `VITE_SUPABASE_URL`: Your Supabase Project URL.
        *   `VITE_SUPABASE_ANON_KEY`: Your Supabase Anon Key.

## Step 4: Deploy
1.  Click **"Deploy"**.
2.  Wait for the build to complete (usually 1-2 minutes).
3.  Once finished, you will see a "Congratulations!" screen with a screenshot of your app.

## Step 5: Verify
1.  Click on the **Preview** image or the **Visit** button.
2.  Test the app:
    *   Navigate through the pages.
    *   Try the Admin Login (ensure Supabase connection works).
    *   Check the Calendar.

## Troubleshooting
- **Build Fails**: Check the "Logs" tab in Vercel for error messages. Common issues include missing dependencies (run `npm install` locally to check) or syntax errors.
- **Supabase Not Working**: Double-check your Environment Variables in Vercel Settings. They must match exactly what is in your code/Supabase.
