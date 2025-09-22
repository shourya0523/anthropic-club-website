# LinkedIn Link Preview Fix

## 🚀 Quick Fix Steps

### 1. Clear LinkedIn's Cache

Visit [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) and:

1. Enter your website URL: `https://claudebuildersneu.com/`
2. Click "Inspect"
3. LinkedIn will fetch fresh metadata

### 2. Alternative: Force Refresh

If the inspector doesn't work immediately, try sharing your link with a query parameter:

- Instead of: `https://claudebuildersneu.com/`
- Use: `https://claudebuildersneu.com/?v=2`

This tricks LinkedIn into treating it as a new URL.

## ✅ What We've Fixed

### Meta Tags Added:

- **Open Graph tags** for Facebook/LinkedIn sharing
- **Twitter Card tags** for Twitter previews
- **Proper favicon** setup
- **Theme colors** matching your brand

### Key Improvements:

- ✅ Title: "Claude Builder Club | Northeastern University"
- ✅ Description: Comprehensive club description
- ✅ Image: Logo with proper dimensions
- ✅ Favicon: Accessible from root path
- ✅ Theme color: Your coral brand color (#E17B5A)

## 🖼️ Preview Specifications

**Image Requirements Met:**

- ✅ Size: 512x512px
- ✅ Format: PNG
- ✅ Accessible URL: `/favicon.png`
- ✅ Alt text: "Claude Builder Club Logo"

## 🔍 Testing Your Preview

### Test Tools:

1. **Open Graph Checker**: https://opengraph.xyz/
2. **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/
3. **Facebook Debugger**: https://developers.facebook.com/tools/debug/

### Browser Testing:

```bash
# Test local preview
curl -s https://claudebuildersneu.com/ | grep -i "og:"
```

## 📝 Deploy Checklist

- [x] Meta tags added to `index.html`
- [x] Favicon copied to `public/favicon.png`
- [x] Build tested successfully
- [x] All paths use absolute URLs for production

## ⚡ Expected Results

After clearing LinkedIn's cache, your link previews should show:

- **Title**: Claude Builder Club | Northeastern University
- **Description**: Join the Claude Builder Club at Northeastern University...
- **Image**: Your Claude logo
- **Site**: Claude Builder Club

## 🆘 Still Not Working?

If previews still show incorrectly:

1. **Wait 24-48 hours** for global cache updates
2. **Check your domain** is properly configured in DNS
3. **Verify SSL certificate** is valid
4. **Test with different browsers** (incognito mode)
5. **Use the query parameter trick**: `?v=3`, `?v=4`, etc.

## 🎯 Pro Tips

- LinkedIn caches previews for **up to 7 days**
- Always test with **fresh browser sessions**
- Use **absolute URLs** in meta tags, not relative paths
- **Validate your HTML** with W3C validator before deploying

Your LinkedIn previews should now display beautifully! 🎉
