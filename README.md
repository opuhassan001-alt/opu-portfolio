# Estakball Hossain — Executive BBA Portfolio Website

A modern corporate & executive portfolio website built with **Next.js**, **TypeScript**, and **Tailwind CSS** for **Estakball Hossain (Opu)**, a fresh BBA Graduate in Marketing.

## Key Features
- **Executive Hero Section**: Features your studio portrait (`/public/profile.jpg`), career objective, availability badge, and quick-action buttons.
- **Four Core Career Focus Areas**: Highlights readiness across **Marketing**, **Supply Chain**, **Finance & Analytics**, and **Human Resources**.
- **Interactive Case Studies & Projects**: Filterable BBA Marketing, SQL/Excel Analytics, Supply Chain, and HR case studies with an interactive detail modal.
- **Skills & Languages Matrix**: Visual proficiency bars for MS Excel, MS Word, foundational SQL, digital research, soft skills, and Bangla/English fluency.
- **Education Timeline**: Complete academic timeline (BBA in Marketing, HSC in Commerce, SSC in Commerce).
- **Privacy-First Public Layout**: Sensitive personal details (parents' names, marital status, exact house number) are omitted from the public web view while keeping your downloadable CV PDF (`/public/Estakball_Hossain_CV.pdf`) available.
- **Direct Contact & WhatsApp Integration**: Built-in contact form that connects directly to your email (`opuhassan001@gmail.com`) and WhatsApp (`+880 1633-375854`).

## How to Customize Content
All portfolio text, case studies, skills, education, and social links are stored in one single file:
- [`src/data/portfolio.ts`](./src/data/portfolio.ts)

## Running Locally
```bash
npm run dev
```
Then open [http://localhost:3000](http://localhost:3000) in your browser.

