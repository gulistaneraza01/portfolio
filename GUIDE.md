# Portfolio Website Guide

This is a comprehensive guide explaining the structure, content, and usage of this Next.js portfolio website.

## 📁 Project Structure Overview

```
portfolio/
├── public/                     # Static assets
├── src/
│   ├── app/                    # Next.js App Router pages
│   ├── components/             # React components
│   ├── data/                   # Data files (your content!)
│   └── lib/                    # Utility functions
├── content/                    # Blog/MDX content
├── package.json                # Dependencies
├── tailwind.config.ts          # Tailwind CSS configuration
└── tsconfig.json               # TypeScript configuration
```

---

## 📄 File-by-File Breakdown

### `/public/` - Static Assets

| File               | Purpose                                            |
| ------------------ | -------------------------------------------------- |
| `me.png`           | Profile photo/avatar displayed in the hero section |
| `company-logo.png` | Logo for work experience                           |
| `school-logo.png`  | Logo for education                                 |

> **Note:** Add company/institution logos here. Use PNG, JPG, or SVG format. Reference them as `/filename.ext` in the data file.

---

### `/src/data/` - Content Data

#### `resume.tsx` - **Main Content File** ⭐

This is the most important file. It contains all portfolio content:

```typescript
export const DATA = {
  // Personal Information
  name: "Your Name",
  initials: "YN",
  description: "...",          // Short bio shown in hero
  summary: "...",              // Detailed about section
  avatarUrl: "/me.png",        // Profile photo
  location: "Your Location",

  // Skills Array
  skills: ["Skill1", "Skill2"],

  // Work Experience Array
  work: [
    {
      company: "Company Name",
      title: "Your Role",
      logoUrl: "/logo.png",
      start: "Month Year",
      end: "Month Year",
      description: "What you did...",
      href: "https://company.com",
      location: "Remote",
      badges: []
    }
  ],

  // Education Array
  education: [{...}],

  // Projects Array
  projects: [{...}],

  // Hackathons Array
  hackathons: [{...}],

  // Social Links
  contact: {
    social: {
      GitHub: { url: "...", navbar: true },
      LinkedIn: { url: "...", navbar: true },
      X: { url: "...", navbar: true }
    }
  }
}
```

#### `blog.ts` - Blog Configuration

Contains blog-related data and MDX file mappings.

---

### `/src/app/` - Pages

| File          | Purpose                                              |
| ------------- | ---------------------------------------------------- |
| `page.tsx`    | Homepage that renders all sections                   |
| `layout.tsx`  | Root layout with theme provider, fonts, and metadata |
| `globals.css` | Global styles and CSS variables                      |
| `favicon.ico` | Browser tab icon                                     |
| `blog/`       | Blog page and individual post pages                  |

---

### `/src/components/` - UI Components

| File                 | Purpose                                                         |
| -------------------- | --------------------------------------------------------------- |
| `navbar.tsx`         | Top navigation bar with links and theme toggle                  |
| `resume-card.tsx`    | Card component for work/education entries                       |
| `project-card.tsx`   | Card component for project entries                              |
| `hackathon-card.tsx` | Card component for hackathon entries                            |
| `mode-toggle.tsx`    | Dark/Light theme toggle button                                  |
| `theme-provider.tsx` | Theme context provider                                          |
| `icons.tsx`          | SVG icon components                                             |
| `mdx.tsx`            | MDX renderer for blog posts                                     |
| `ui/`                | Base UI components (avatar, badge, button, card, dock, tooltip) |
| `magicui/`           | Animation components (blur-fade, blur-fade-text, dock)          |

---

### `/content/` - Blog Content

Store your blog posts as `.mdx` files here. Each file becomes a blog post.

Example:

```
hello-world.mdx
```

---

### Configuration Files

| File                 | Purpose                          |
| -------------------- | -------------------------------- |
| `tailwind.config.ts` | Tailwind CSS theme customization |
| `tsconfig.json`      | TypeScript settings              |
| `next.config.mjs`    | Next.js configuration            |
| `components.json`    | Shadcn/UI configuration          |
| `package.json`       | Project dependencies             |
| `.eslintrc.json`     | ESLint rules                     |

---

## 🚀 How to Run

### Prerequisites

- Node.js 18+ installed
- pnpm, npm, or yarn

### Installation

```bash
# Navigate to portfolio folder
cd portfolio

# Install dependencies
pnpm install
```

Or:

```bash
npm install
```

Or:

```bash
yarn install
```

---

### Development

```bash
pnpm dev
```

The site will run at:

```
http://localhost:3000
```

---

### Production Build

```bash
pnpm build
pnpm start
```

---

## ✏️ How to Customize

### 1. Update Your Content

Edit `/src/data/resume.tsx`:

- Personal Info
- Skills
- Work Experience
- Education
- Projects
- Hackathons
- Social Links

---

### 2. Update Images

1. Add images to `/public/`
2. Reference them in `resume.tsx` using:

```
/imagename.ext
```

Common images:

- Profile photo
- Company logos
- School logos

---

### 3. Customize Theme

Edit:

```
tailwind.config.ts
```

to modify colors, fonts, and design settings.

---

### 4. Add Blog Posts

1. Create a new `.mdx` file in `/content/`
2. Add frontmatter and content
3. The post will automatically appear on the blog page.

---

## 📱 Key Sections

| Section         | Description                      | Data Source                        |
| --------------- | -------------------------------- | ---------------------------------- |
| Hero            | Name, short bio, profile photo   | `name`, `description`, `avatarUrl` |
| About           | Detailed summary                 | `summary`                          |
| Work Experience | Professional timeline            | `work[]`                           |
| Education       | Academic background              | `education[]`                      |
| Skills          | Technical skill badges           | `skills[]`                         |
| Projects        | Featured project grid            | `projects[]`                       |
| Hackathons      | Hackathon timeline               | `hackathons[]`                     |
| Contact         | Social links and contact options | `contact.social`                   |

---

## 🎨 Features

- Dark / Light mode
- Responsive design
- Scroll animations
- SEO optimized
- Fast performance using Next.js
- MDX blog support
- Single data file for easy updates

---

## 🔧 Troubleshooting

### Images not showing

- Ensure images are inside `/public`
- Verify correct file names
- Use correct path format:

```
/imagename.ext
```

---

### Content not updating

Restart the development server:

```
pnpm dev
```

---

### Build errors

Reinstall dependencies:

```
pnpm install
```
