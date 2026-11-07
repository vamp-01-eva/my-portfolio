import fs from 'node:fs';
import path from 'node:path';
import { homePage, workPage, aboutPage, contactPage } from './pages.mjs';
import { projects } from './render.mjs';
import { casePage } from './case.mjs';

const root = process.cwd();

function typographic(html) {
  return html
    .split(/(<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>)/i)
    .map((part, index) => index % 2
      ? part
      : part.replace(/>([^<]*)</g, (match, text) => `>${text.replace(/'/g, '’')}<`))
    .join('');
}

function write(name, html) {
  fs.writeFileSync(path.join(root, name), typographic(html), 'utf8');
  console.log(`wrote ${name}`);
}

write('index.html', homePage());
write('work.html', workPage());
write('about.html', aboutPage());
write('contact.html', contactPage());

for (const project of projects) {
  write(`case-${project.slug}.html`, casePage(project));
}
