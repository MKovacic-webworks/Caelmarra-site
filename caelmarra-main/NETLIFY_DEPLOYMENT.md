# Netlify Deployment Guide

This guide will help you deploy the Caelmarra website to Netlify.

## Prerequisites

- A Netlify account (free tier is sufficient)
- Git repository (GitHub, GitLab, or Bitbucket)
- EmailJS account with configured service

## Step 1: Prepare Your Repository

1. Ensure all your changes are committed to Git:
   ```bash
   git add .
   git commit -m "Prepare for Netlify deployment"
   git push origin main
   ```

## Step 2: Deploy to Netlify

### Option A: Using Netlify Web Interface (Recommended)

1. Go to [Netlify](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Choose your Git provider and authorize Netlify
4. Select your repository (caelmarra)
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - These should be auto-detected from `netlify.toml`
6. Click "Deploy site"

### Option B: Using Netlify CLI

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Login to Netlify:
   ```bash
   netlify login
   ```

3. Deploy the site:
   ```bash
   netlify deploy --prod
   ```

## Step 3: Configure Environment Variables

**IMPORTANT**: Your EmailJS configuration requires environment variables to work properly.

1. In Netlify dashboard, go to your site
2. Navigate to "Site settings" → "Environment variables"
3. Add the following variables:
   - `VITE_EMAILJS_SERVICE_ID`: Your EmailJS service ID
   - `VITE_EMAILJS_TEMPLATE_ID`: Your EmailJS template ID
   - `VITE_EMAILJS_PUBLIC_KEY`: Your EmailJS public key

4. After adding environment variables, trigger a new deploy:
   - Go to "Deploys" tab
   - Click "Trigger deploy" → "Deploy site"

## Step 4: Custom Domain (Optional)

1. In Netlify dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Follow the instructions to configure your domain

## Build Configuration

The `netlify.toml` file in your project root contains:
- Build command and publish directory
- Redirect rules for single-page application
- Security headers
- Cache control for assets

## Troubleshooting

### Build Fails
- Check the deploy logs in Netlify dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

### EmailJS Not Working
- Double-check environment variables are set correctly
- Ensure variables start with `VITE_` prefix
- Verify EmailJS service is active and configured

### 404 Errors on Routes
- The `netlify.toml` includes SPA redirect rules
- If issues persist, check the `[[redirects]]` section

## Local Testing

To test the production build locally:
```bash
npm run build
npm run preview
```

## Sharing Your Site

Once deployed, Netlify will provide you with:
- A unique URL like `https://amazing-site-123.netlify.app`
- You can share this URL immediately
- Custom domain can be configured later

## Continuous Deployment

With Git integration, every push to your main branch will:
1. Trigger a new build
2. Deploy automatically if build succeeds
3. Keep previous deployments for rollback if needed

## Support

- [Netlify Documentation](https://docs.netlify.com)
- [Netlify Community](https://answers.netlify.com)
- [EmailJS Documentation](https://www.emailjs.com/docs/)