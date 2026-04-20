import fs from 'node:fs';
import { createFst } from 'webcontainer-fst';

const fst = await createFst('./src');
const files = JSON.stringify(fst, null, 2);

try {
  fs.writeFileSync('files.js', `export const files = ${files};`);
} catch (err) {
  console.error(err);
}
