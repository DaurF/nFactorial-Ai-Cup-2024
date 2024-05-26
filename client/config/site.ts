import {useUserStore} from "@/providers/user-store-provider";

export type SiteConfig = typeof siteConfig;


export const siteConfig = {
  name: "DauRecipes",
  description: "Create the perfect meal plan in seconds with the assistance of an AI companion",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Plans",
      href: "/plans",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
    {
      label: 'Auth',
      href: '/auth'
    }
  ],
  links: {
    github: "https://github.com/DaurF/nFactorial-Ai-Cup-2024",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui-docs-v2.vercel.app",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};

