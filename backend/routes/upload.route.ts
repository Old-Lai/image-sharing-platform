import { Router } from 'express';
const router = Router();

// placeholder route
router.post('/', (req, res) => {
  res.send('Upload placeholder');
});

export default router;
