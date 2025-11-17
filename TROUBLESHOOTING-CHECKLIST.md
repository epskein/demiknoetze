# GitHub Pages Deployment Troubleshooting Checklist

## Quick Diagnostic Steps

### 1. Check GitHub Actions Workflow Status
Go to: `https://github.com/epskein/my-v0-project/actions`

**Look for:**
- ✅ Green checkmark = Build succeeded
- ❌ Red X = Build failed (click to see logs)
- 🟡 Yellow dot = Still running (wait for it to finish)

### 2. Verify GitHub Pages Settings
Go to: `https://github.com/epskein/my-v0-project/settings/pages`

**Ensure:**
- Source: **GitHub Actions** (NOT "Deploy from a branch")
- If you see a URL like `https://epskein.github.io/my-v0-project/`, note it down

### 3. Check Workflow Permissions
Go to: `https://github.com/epskein/my-v0-project/settings/actions`

**Scroll to "Workflow permissions":**
- Should be: **"Read and write permissions"**
- Should have: **"Allow GitHub Actions to create and approve pull requests"** checked

### 4. Verify the Correct URL
Your site should be at:
- **`https://epskein.github.io/my-v0-project/`**
- Note: Make sure to include the trailing slash `/`

### 5. Check Browser Console
Open the site and press F12 (Developer Tools):
- Go to the Console tab
- Look for 404 errors or failed requests
- Share any error messages you see

## Common Issues & Solutions

### Issue: "404 File not found"
**Cause:** Repository name doesn't match basePath, or GitHub Pages not configured

**Solution:**
1. Verify repository name in URL matches `/my-v0-project` in config
2. Check GitHub Pages source is set to "GitHub Actions"
3. Wait 1-2 minutes after workflow completes

### Issue: "Site loads but assets (CSS/images) missing"
**Cause:** basePath or assetPrefix misconfigured

**Solution:**
1. Verify `next.config.mjs` has correct repository name
2. Should be: `basePath: '/my-v0-project'`
3. Clear browser cache and reload

### Issue: "Workflow fails with permission error"
**Cause:** GitHub Actions doesn't have write permissions

**Solution:**
1. Go to Settings → Actions → General
2. Set "Workflow permissions" to "Read and write permissions"
3. Re-run the workflow

### Issue: "Internal links don't work (404 on navigation)"
**Cause:** Missing basePath in Next.js links

**Solution:**
- This should be handled automatically by Next.js
- Verify all links use Next.js `<Link>` component or relative paths

### Issue: "Workflow succeeds but site still shows old version"
**Cause:** Browser cache or CDN cache

**Solution:**
1. Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
2. Try in incognito/private browsing mode
3. Wait 5-10 minutes for GitHub's CDN to update

## Need More Help?

Please provide:
1. The exact URL you're trying to access
2. Screenshot or description of what you see
3. Any error messages from browser console (F12)
4. Status of the latest GitHub Actions workflow (green/red/yellow)

