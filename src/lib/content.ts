import { readFileSync } from 'fs';
import { join } from 'path';

export function getContentData(filename: string): string {
  const fullPath = join(process.cwd(), 'content', filename);
  const fileContents = readFileSync(fullPath, 'utf8');
  return fileContents;
}

export function parseMarkdownContent(content: string) {
  // Simple markdown parser for now - can be enhanced later
  const lines = content.split('\n');
  let title = '';
  const sections: Record<string, string[]> = {};
  let currentSection = '';
  
  for (const line of lines) {
    if (line.startsWith('# ')) {
      title = line.replace('# ', '');
    } else if (line.startsWith('## ')) {
      currentSection = line.replace('## ', '');
      sections[currentSection] = [];
    } else if (line.startsWith('### ')) {
      const subsection = line.replace('### ', '');
      if (currentSection && sections[currentSection]) {
        sections[currentSection]!.push(`**${subsection}**`);
      }
    } else if (line.trim() && currentSection && sections[currentSection]) {
      sections[currentSection]!.push(line);
    }
  }
  
  return { title, sections };
}