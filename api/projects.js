export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'GET') {
    res.status(200).json({
      success: true,
      projects: [
        {
          id: 1,
          name: "My Dev App",
          description: "Full Stack HTML + Node.js + Express + Vercel",
          status: "active"
        },
        {
          id: 2,
          name: "Project Two",
          description: "Another awesome project",
          status: "active"
        }
      ]
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
```

### Step 4: Commit the file
```
Scroll down → Click "Commit new file" (green button)
