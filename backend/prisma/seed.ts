import * as dotenv from 'dotenv';
import axios from 'axios';
import * as fs from 'fs';
import * as path from 'path';
import { v4 as uuid } from 'uuid';


dotenv.config({ path: path.join(__dirname, '../.env') });

const TEMP_DIR = path.join(__dirname, '../temp');
const META_PATH = path.join(TEMP_DIR, 'seed-index.json');

if (!fs.existsSync(TEMP_DIR)) fs.mkdirSync(TEMP_DIR);

const usernames = ['catlover', 'whiskers', 'meowster', 'felinefan', 'kittyking'];
const tags = ['cat', 'dev-seed'];

interface SeedImageMeta {
  id: string;
  filename: string;
  title: string;
  user: string;
  likes: number;
  comments: number;
  tags: string[];
}

const seedMeta: SeedImageMeta[] = [];

async function main() {
  for (let i = 0; i < 100; i++) {
    const res = await axios.get('https://api.thecatapi.com/v1/images/search', {
      headers: {
        'x-api-key': process.env.CAT_API_KEY || '',
      },
    });

    const imageUrl = res.data[0]?.url;
    if (!imageUrl) continue;

    const imageRes = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const ext = path.extname(imageUrl).split('?')[0] || '.jpg';
    const filename = `${uuid()}${ext}`;
    const filePath = path.join(TEMP_DIR, filename);
    fs.writeFileSync(filePath, imageRes.data);

    seedMeta.push({
      id: uuid(),
      filename,
      title: `Seed Cat #${i + 1}`,
      user: usernames[Math.floor(Math.random() * usernames.length)],
      likes: Math.floor(Math.random() * 100),
      comments: 0,
      tags,
    });

    console.log(`Saved: ${filename}`);
  }

  fs.writeFileSync(META_PATH, JSON.stringify(seedMeta, null, 2));
  console.log(`Seed metadata written to ${META_PATH}`);
}

main();
