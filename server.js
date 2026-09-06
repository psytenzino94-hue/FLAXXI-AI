const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Public files (index.html, admin.html) serve karne ke liye:
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
    const newKey = "FLAXXI-" + Math.random().toString(36).substring(2, 8).toUpperCase();
    validKeys.add(newKey);
    res.json({ success: true, key: newKey });
});

// Admin: Update Plan Price
app.post('/api/admin/update-plan', (req, res) => {
    const { price } = req.body;
    if (price) planSettings.proPriceRs = price;
    res.json({ success: true, price: planSettings.proPriceRs });
});

// User: Redeem Key
app.post('/api/user/redeem-key', (req, res) => {
    const { key } = req.body;
    if (validKeys.has(key)) {
        validKeys.delete(key); // One-time use key
        return res.json({ success: true, message: "Pro Status Activated!" });
    }
    return res.status(400).json({ success: false, message: "Invalid or Expired Key" });
});

// AI Chat Route
app.post('/api/chat', (req, res) => {
    const { message } = req.body;
    let replyText = `FLAXXI AI: Response for "${message}"`;
    const lower = message.toLowerCase();

    if (lower.includes('kaise') || lower.includes('kya') || lower.includes('namaste')) {
        replyText = `Main FLAXXI AI hoon. Main aapke sawal "${message}" ka jawab dene ke liye taiyar hoon.`;
    }

    res.json({ reply: replyText });
});

app.listen(PORT, () => {
    console.log(`Server active on port ${PORT}`);
});
