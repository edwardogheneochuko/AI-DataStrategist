// navItems.js
import { ChartArea, HelpCircle, Home,  PersonStandingIcon, Settings } from 'lucide-react';

export const sidebarItems = [
  {
    label: 'Dashboard',
    icon: Home,
    path: '/dashboard',
  },
  {
    label: 'Profile',
    icon: PersonStandingIcon,
    path: '/dashboard/profile',
  },
  {
    label: 'Trading Strategy',
    icon: ChartArea,
    path: '/dashboard/trading',
  },
  {
    label: 'Todo List',
    icon: Settings,
    path: '/dashboard/todolist',
    className: 'mb-5',
  },
];

export const bottomSidebarItems = [
  {
    label: 'Settings',
    icon: Settings,
    path: '/dashboard/settings',
    className: 'mt-5',
  },
  {
    label: 'Help',
    icon: HelpCircle,
    path: '/dashboard/help',
  },
];

export const socialMedia = [
    {
        label: 'Twitter',
        icon: 'https://cdn-icons-png.flaticon.com/512/733/733579.png',
        link: 'https://twitter.com/owlpreacher', 
    },
    {
        label: 'Discord',
        icon: 'https://cdn-icons-png.flaticon.com/512/2111/2111370.png',
        link: 'https://discord.gg/your-discord-link', 
    },
    {
        label: 'GitHub',
        icon: 'https://cdn-icons-png.flaticon.com/512/733/733553.png',
        link: 'https://github.com/edwardogheneochuko'
    },
]

export const charts = [
  { day: 'Mon', earnings: 50 },
  { day: 'Tue', earnings: 250 },
  { day: 'Wed', earnings: 200 },
  { day: 'Thu', earnings: 300 },
  { day: 'Fri', earnings: 400 },
  { day: 'Sat', earnings: 150 },
  { day: 'Sun', earnings: 500 },
]

export const mobileOnlyItems = [
  ...sidebarItems,
  ...bottomSidebarItems,
  ...socialMedia,
];


