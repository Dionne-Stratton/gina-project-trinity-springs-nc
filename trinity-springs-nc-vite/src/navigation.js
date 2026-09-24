export const routes = [
  {
    path: '/',
    title: 'Home',
    summary:
      'A Christ-centered classical homeschool hybrid program in Sanford, North Carolina.',
  },
  {
    path: '/about',
    title: 'About',
    summary: 'Mission, faith, and leadership.',
    children: [
      {
        path: '/about/mission-vision',
        title: 'Mission & Vision',
        summary: 'Why Trinity Springs exists and what it hopes to make possible.',
      },
      {
        path: '/about/statement-of-faith',
        title: 'Statement of Faith',
        summary: 'The shared Christian beliefs of this community.',
      },
      {
        path: '/about/leadership',
        title: 'Leadership',
        summary: 'How the academy is organized and led.',
      },
    ],
  },
  {
    path: '/program',
    title: 'Our Program',
    summary: 'How campus days, home days, and classical instruction fit together.',
    children: [
      {
        path: '/program/hybrid-model',
        title: 'Homeschool Hybrid Model',
        summary: 'Classroom instruction on community days and learning at home.',
      },
      {
        path: '/program/classical-education',
        title: 'Classical Christian Education',
        summary: 'Christ-centered classical instruction.',
      },
      {
        path: '/program/grammar-logic-rhetoric',
        title: 'Grammar, Logic & Rhetoric',
        summary: 'The three stages of classical instruction.',
      },
    ],
  },
  {
    path: '/admissions',
    title: 'Admissions',
    summary: 'How families visit, enroll, and ask questions.',
    children: [
      {
        path: '/admissions/process',
        title: 'Admissions Process',
        summary: 'The steps for families who want to enroll.',
      },
      {
        path: '/admissions/tuition',
        title: 'Tuition & Fees',
        summary: 'The cost of the program.',
      },
      {
        path: '/admissions/faq',
        title: 'FAQ',
        summary: 'Answers for prospective families.',
      },
    ],
  },
  {
    path: '/community',
    title: 'Community',
    summary: 'Student life and the Trinity Springs community.',
  },
  {
    path: '/families',
    title: 'Current Families',
    summary: 'Resources for families already in the program.',
  },
  {
    path: '/contact',
    title: 'Contact',
    summary: 'Schedule a tour or ask a question.',
    contact: true,
  },
]

export function flattenRoutes(items = routes) {
  return items.flatMap((route) => [
    route,
    ...(route.children ? flattenRoutes(route.children) : []),
  ])
}

export function findRoute(path) {
  return flattenRoutes().find((route) => route.path === path) ?? null
}

export const primaryNav = routes.filter((route) => route.path !== '/')
