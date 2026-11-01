import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, 'dist');
const baseHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(baseHtmlPath)) {
  console.error('Base index.html not found in dist. Run vite build first.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(baseHtmlPath, 'utf-8');

const routes = [
  {
    path: 'services',
    title: 'Services & Capabilities | Ignivance Technology',
    description: 'Bespoke web development, technical SEO, UI/UX design, cloud maintenance, and AI automation. Fixed pricing with zero template bloat.',
    keywords: 'custom web development services hyderabad, digital growth agency india, ui ux design studio hyderabad'
  },
  {
    path: 'services/web-development',
    title: 'Custom Web Development Company in Hyderabad | Ignivance',
    description: 'Premier custom Next.js and full-stack web development services in Hyderabad. Sub-second mobile speeds, high-converting architectures, and 100% intellectual property ownership.',
    keywords: 'custom web development company in hyderabad, nextjs development agency india, bespoke website development hyderabad, web design agency hitech city'
  },
  {
    path: 'services/digital-marketing-growth',
    title: 'Digital Marketing & Growth Agency in Hyderabad | Ignivance',
    description: 'Data-driven digital marketing agency in Hyderabad. Technical SEO, Google Local 3-Pack dominance, high-intent performance advertising, and qualified inbound pipeline engineering.',
    keywords: 'digital marketing agency hyderabad, technical seo services india, best digital marketing company hyderabad, performance marketing hyderabad, b2b seo agency'
  },
  {
    path: 'work',
    title: 'Selected Work & Case Studies | Ignivance Technology',
    description: 'Explore our hand-built digital products, custom platforms, and measurable growth case studies for Grand Diva, Sri Sai Deekshitha, Pooja Sounds, and Best Ambulance.',
    keywords: 'nextjs portfolio india, custom web application examples, web design case studies hyderabad'
  },
  {
    path: 'insights',
    title: 'Field Notes & Engineering Insights | Ignivance',
    description: 'Practical articles on Next.js web development, technical SEO, editorial UI/UX design, and digital growth for founders and engineering teams.',
    keywords: 'nextjs blog india, technical seo articles, web development guides hyderabad'
  },
  {
    path: 'education',
    title: 'Engineering Apprenticeships & AI Bootcamps | Ignivance',
    description: 'Intensive Full-Stack Developer apprenticeships, AI Agent bootcamps, and corporate tech workshops by Ignivance in Hyderabad.',
    keywords: 'full stack developer apprenticeship hyderabad, ai agent bootcamp india, react training hyderabad'
  },
  {
    path: 'about',
    title: 'About Ignivance | Story, Philosophy & Leadership',
    description: 'Learn the origin story, engineering philosophy, and leadership behind Ignivance Technology. Founded in Hyderabad by Uday Kiran and Mahathi Godala.',
    keywords: 'about ignivance technology, uday kiran founder ignivance, mahathi godala cofounder'
  },
  {
    path: 'team',
    title: 'Our Team & Leadership | Ignivance Technology',
    description: 'Meet the engineering and design leaders behind Ignivance Technology in Hitech City, Hyderabad.',
    keywords: 'ignivance leadership team, uday kiran, mahathi godala'
  },
  {
    path: 'pricing',
    title: 'Transparent Pricing & Engagement Models | Ignivance',
    description: 'Transparent fixed-price milestone contracts starting at ₹85,000 / $1,200. Zero hidden fees, zero vendor lock-in, 100% code ownership.',
    keywords: 'website development pricing india, nextjs development cost, web agency retainer pricing'
  },
  {
    path: 'contact',
    title: 'Start a Project | Contact Ignivance Technology',
    description: 'Submit your project brief or chat directly with our founders on WhatsApp. Guaranteed 24-hour response on all qualified inquiries.',
    keywords: 'hire web development agency hyderabad, contact ignivance technology, request website quote india'
  },
  {
    path: 'privacy-policy',
    title: 'Privacy Policy | Ignivance Technology',
    description: 'Privacy policy and data governance practices for Ignivance Technology Private Limited.',
    keywords: 'ignivance privacy policy'
  },
  {
    path: 'terms-and-conditions',
    title: 'Terms & Conditions | Ignivance Technology',
    description: 'Terms of service and contract conditions for Ignivance Technology Private Limited.',
    keywords: 'ignivance terms and conditions'
  }
];

routes.forEach((route) => {
  const targetDir = path.join(distDir, route.path);
  fs.mkdirSync(targetDir, { recursive: true });

  let pageHtml = baseHtml;

  // Replace title
  pageHtml = pageHtml.replace(
    /<title>.*?<\/title>/i,
    `<title>${route.title}</title>`
  );

  // Replace meta description
  pageHtml = pageHtml.replace(
    /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
    `<meta name="description" content="${route.description}" />`
  );

  // Replace meta keywords
  pageHtml = pageHtml.replace(
    /<meta\s+name="keywords"\s+content=".*?"\s*\/?>/i,
    `<meta name="keywords" content="${route.keywords}" />`
  );

  // Replace canonical
  pageHtml = pageHtml.replace(
    /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i,
    `<link rel="canonical" href="https://ignivance.in/${route.path}" />`
  );

  // Replace og:title
  pageHtml = pageHtml.replace(
    /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i,
    `<meta property="og:title" content="${route.title}" />`
  );

  // Replace og:description
  pageHtml = pageHtml.replace(
    /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i,
    `<meta property="og:description" content="${route.description}" />`
  );

  // Replace og:url
  pageHtml = pageHtml.replace(
    /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i,
    `<meta property="og:url" content="https://ignivance.in/${route.path}" />`
  );

  const targetFile = path.join(targetDir, 'index.html');
  fs.writeFileSync(targetFile, pageHtml, 'utf-8');
  console.log(`Generated: dist/${route.path}/index.html`);
});

console.log('All static route HTML files successfully prerendered!');
