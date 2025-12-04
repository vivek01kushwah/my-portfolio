export const SITE = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'Vivek Kushwah',
  role: 'Software Developer',
  title: 'Vivek Kushwah — Software Developer',
  description:
    'Modern, performant web engineering with a focus on DX, accessibility, and measurable impact.',
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  primaryColor: '#2563EB',
  email: 'vivek0709kushwah@gmail.com',
  avatar: '/profile.jpg',
  resume: '/my-portfolio/Vivek_Kushwah_Resume.pdf',
  social: {
    github: 'https://github.com/vivek01kushwah',
    linkedin: 'https://www.linkedin.com/in/vivek-kushwah-00029a282',
    twitter: 'https://x.com/vivek01kushwah?t=WUY_TVHc9jUivtNs4hYTxw&s=09',
    instagram: 'https://www.instagram.com/vivek_kushwah____?igsh=c2w1dnI2bTVrNDNt',
    leetcode: 'https://leetcode.com/u/vivek01kushwah/',
    gfg: 'https://www.geeksforgeeks.org/user/vivek01kushwah/'
  }
} as const;

