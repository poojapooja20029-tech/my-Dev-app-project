{
  "version": 2,
  "rewrites": [
    {
      "source": "/api/projects",
      "destination": "/api/projects.js"
    }
  ]
}
```

Click **"Commit changes"** ✅

---

## Why this fixes it:
```
❌ Old way used "routes" + "builds" → causes 404
✅ New way uses "rewrites" → Vercel handles it automatically
```

---

## After 2-3 mins test:
```
https://my-dev-app-project.vercel.app/api/projects
→ Should show JSON ✅
