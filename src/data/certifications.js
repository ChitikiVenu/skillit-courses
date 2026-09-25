import cyberSecurity from './cyberSecurity.js';
import aiMl from './aiMl.js';
import dataScience from './dataScience.js';
import socAnalyst from './socAnalyst.js';
import dataAnalyst from './dataAnalyst.js';

// Every certification name here is copied verbatim from a programme's own CERTIFICATIONS array (never
// invented), so "prepares you for" stays accurate. `icon` picks a generic badge shape, used only for
// certifications that have no official badge image in LOGOS below. Official badges were supplied by the
// owner (2026-09-24), who confirmed with the compliance/legal team that they may be shown because the
// institute provides exam vouchers for these certifications. `issuer` is the plain-text organisation name.
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

const LOGOS = {
  'CompTIA Security+': 'comptia-security-plus',
  'ISC2 Certified in Cybersecurity (CC)': 'isc2-cc',
  'Microsoft Security Operations Analyst': 'microsoft-sc-200',
  'Microsoft Azure AI Engineer': 'azure-ai-engineer',
  'AWS ML Engineer / Cloud Practitioner': 'aws-ml-engineer',
  'Google Cloud Professional ML Engineer': 'google-cloud-ml-engineer',
  'NVIDIA Generative AI & LLMs': 'nvidia-genai',
  'Databricks ML / GenAI Engineer': 'databricks-ml',
  'Oracle Cloud Infrastructure AI': 'oracle-oci-ai',
  'IBM AI / Generative AI Engineering': 'ibm-ai',
  'TensorFlow & Hugging Face Credentials': 'tensorflow-huggingface',
  'Google Data Analytics Professional Certificate': 'google-data-analytics',
  'IBM Data Science Professional Certificate': 'ibm-data-science',
  'Microsoft Certified: Power BI Data Analyst Associate': 'power-bi-data-analyst',
  'Tableau Desktop Specialist': 'tableau-desktop-specialist',
  'AWS Certified Data Analytics – Specialty': 'aws-data-analytics',
  'Microsoft Certified: Azure Data Scientist Associate': 'azure-data-scientist',
  'EC-Council Certified SOC Analyst (CSA)': 'ec-council-csa',
  'CompTIA CySA+': 'comptia-cysa-plus',
  'IBM QRadar SIEM Certification': 'ibm-qradar',
  'GIAC Certified Incident Handler (GCIH)': 'giac-gcih',
  'Microsoft Excel Expert Certification': 'excel-expert',
  'IBM Data Analyst Professional Certificate': 'ibm-data-analyst',
};

// A few names repeat across programmes (Security+, ISC2 CC, Power BI, Tableau); keep one badge per
// name and remember every programme it links to.
const byName = new Map();
RAW.forEach(({ name, issuer, icon, course }) => {
  const existing = byName.get(name);
  if (existing) existing.courses.push(course);
  else byName.set(name, { name, issuer, icon, logo: LOGOS[name] && `/img/certs/${LOGOS[name]}.webp`, courses: [course] });
});

export const CERTIFICATION_BADGES = [...byName.values()];
