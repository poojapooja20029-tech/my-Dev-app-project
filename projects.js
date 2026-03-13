export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json({
    success: true,
    data: [
      { id: 1, title: "My Dev App", description: "Full Stack + Vercel", techStack: ["HTML", "Node.js", "Vercel"] },
      { id: 2, title: "Docker K8s Project", description: "CI/CD Pipeline", techStack: ["Docker", "Kubernetes"] }
    ]
  });
}
