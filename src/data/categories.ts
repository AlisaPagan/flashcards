import type { Category, SessionCategory } from '../types';

export const categories: Category[] = [
  { id: 'html-css', label: 'HTML + CSS', shortLabel: 'HTML/CSS' },
  { id: 'javascript', label: 'JavaScript', shortLabel: 'JS' },
  { id: 'typescript', label: 'TypeScript', shortLabel: 'TS' },
  { id: 'react', label: 'React', shortLabel: 'React' },
  { id: 'next', label: 'Next.js', shortLabel: 'Next' },
  { id: 'node', label: 'Node.js', shortLabel: 'Node' },
  { id: 'web-api', label: 'Web / API', shortLabel: 'Web/API' },
  { id: 'database', label: 'Database', shortLabel: 'DB' },
  { id: 'general-dev', label: 'General Dev', shortLabel: 'General' },
];

export const sessionCategories: { id: SessionCategory; label: string }[] = [
  { id: 'mixed', label: 'Random Mix' },
  ...categories,
];

export function getCategoryLabel(categoryId: SessionCategory): string {
  return sessionCategories.find((category) => category.id === categoryId)?.label ?? categoryId;
}
