import { Router } from 'express';
import fs from 'fs';
import path from 'path';

const router = Router();


router.get('/seed', (req, res) => {
  const filePath = path.resolve('temp/seed-index.json');
  console.log('📂 Attempting to read seed data from:', filePath);

  if (!fs.existsSync(filePath)) {
    console.error('❌ File does NOT exist at path!');
    return res.status(404).json({ error: 'No seed data found' });
  }

  try {
    const raw = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(raw);
    console.log(`✅ Successfully read seed metadata: ${data.length} entries`);
    res.json(data);
  } catch (err) {
    console.error('🔥 Error reading or parsing seed metadata:', err);
    res.status(500).json({ error: 'Failed to read metadata' });
  }
});






export default router;
