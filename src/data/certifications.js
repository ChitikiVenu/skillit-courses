import cyberSecurity from './cyberSecurity.js';
import aiMl from './aiMl.js';
import dataScience from './dataScience.js';
import socAnalyst from './socAnalyst.js';
import dataAnalyst from './dataAnalyst.js';

// Every certification name here is copied verbatim from a programme's own CERTIFICATIONS array (never
// invented), so "prepares you for" stays accurate. `icon` picks one of the generic badge shapes in
// CertBadge.jsx — never a certification body's own logo (see the design-rules memory for why).
// `issuer` is the plain-text organisation name shown on the badge; it is not that organisation's mark.
const RAW = [
  { name: 'CEH — Certified Ethical Hacker', issuer: 'EC-Council', icon: 'shield', course: cyberSecurity },
  { name: 'CompTIA Security+', issuer: 'CompTIA', icon: 'shield', course: cyberSecurity },
  { name: 'CompTIA PenTest+', issuer: 'CompTIA', icon: 'target', course: cyberSecurity },
  { name: 'OSCP', issuer: 'Offensive Security', icon: 'target', course: cyberSecurity },
  { name: 'ISC2 Certified in Cybersecurity (CC)', issuer: 'ISC2', icon: 'shield', course: cyberSecurity },
  { name: 'AWS Certified Security – Specialty', issuer: 'AWS', icon: 'cloud', course: cyberSecurity },
  { name: 'Microsoft Security Operations Analyst', issuer: 'Microsoft', icon: 'radar', course: cyberSecurity },
  { name: 'Microsoft Azure AI Engineer', issuer: 'Microsoft', icon: 'spark', course: aiMl },
  { name: 'AWS ML Engineer / Cloud Practitioner', issuer: 'AWS', icon: 'cloud', course: aiMl },
  { name: 'Google Cloud Professional ML Engineer', issuer: 'Google Cloud', icon: 'spark', course: aiMl },
  { name: 'NVIDIA Generative AI & LLMs', issuer: 'NVIDIA', icon: 'spark', course: aiMl },
  { name: 'Databricks ML / GenAI Engineer', issuer: 'Databricks', icon: 'spark', course: aiMl },
  { name: 'Oracle Cloud Infrastructure AI', issuer: 'Oracle', icon: 'cloud', course: aiMl },
  { name: 'IBM AI / Generative AI Engineering', issuer: 'IBM', icon: 'spark', course: aiMl },
  { name: 'TensorFlow & Hugging Face Credentials', issuer: 'TensorFlow / Hugging Face', icon: 'spark', course: aiMl },
  { name: 'Google Data Analytics Professional Certificate', issuer: 'Google', icon: 'chart', course: dataScience },
  { name: 'IBM Data Science Professional Certificate', issuer: 'IBM', icon: 'chart', course: dataScience },
  { name: 'Microsoft Certified: Power BI Data Analyst Associate', issuer: 'Microsoft', icon: 'chart', course: dataScience },
  { name: 'Tableau Desktop Specialist', issuer: 'Tableau', icon: 'chart', course: dataScience },
  { name: 'AWS Certified Data Analytics – Specialty', issuer: 'AWS', icon: 'cloud', course: dataScience },
  { name: 'Microsoft Certified: Azure Data Scientist Associate', issuer: 'Microsoft', icon: 'chart', course: dataScience },
  { name: 'EC-Council Certified SOC Analyst (CSA)', issuer: 'EC-Council', icon: 'radar', course: socAnalyst },
  { name: 'CompTIA CySA+', issuer: 'CompTIA', icon: 'radar', course: socAnalyst },
  { name: 'IBM QRadar SIEM Certification', issuer: 'IBM', icon: 'radar', course: socAnalyst },
  { name: 'GIAC Certified Incident Handler (GCIH)', issuer: 'GIAC', icon: 'shield', course: socAnalyst },
  { name: 'Microsoft Excel Expert Certification', issuer: 'Microsoft', icon: 'chart', course: dataAnalyst },
  { name: 'IBM Data Analyst Professional Certificate', issuer: 'IBM', icon: 'chart', course: dataAnalyst },
];

// A few names repeat across programmes (Security+, ISC2 CC, Power BI, Tableau); keep one badge per
// name and remember every programme it links to.
const byName = new Map();
RAW.forEach(({ name, issuer, icon, course }) => {
  const existing = byName.get(name);
  if (existing) existing.courses.push(course);
  else byName.set(name, { name, issuer, icon, courses: [course] });
});

export const CERTIFICATION_BADGES = [...byName.values()];
