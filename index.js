const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // ✅ ADD THIS

// Test route
app.get('/', (req, res) => {
  res.send('Nerur Academy Webhook is LIVE 🚀');
});

// Gumroad webhook
app.post('/webhook', (req, res) => {
  console.log('Webhook received:', req.body);

  const data = req.body;

  const name = data.full_name || "Unknown";
  const email = data.email || "No Email";
  const license = data.license_key || "No License";

  console.log("Buyer:", name, email, license);

  res.status(200).send('Webhook received successfully');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
