import {
  Kbd,
  Link,
  Input,
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
  link as linkStyles, avatar,
} from "@nextui-org/react";
import NextLink from "next/link";
import clsx from "clsx";

import {siteConfig} from "@/config/site";
import {ThemeSwitch} from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  SearchIcon,
} from "@/components/icons";
import {Logo} from "@/components/icons";
import {button as buttonStyles} from "@nextui-org/react";
import {useUserStore} from "@/providers/user-store-provider";

export const Navbar = () => {
  const {username} = useUserStore(state => state)

  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0"/>
      }
      type="search"
    />
  );

  const navbars = siteConfig.navItems.map((item) => {
    if (!(item.label === 'Plan' && username === null)) {
      return (
        <NavbarItem key={item.href}>
          <NextLink
            className={clsx(
              linkStyles({color: "foreground"})
            )}
            color="foreground"
            href={item.href}
          >
            {item.label}
          </NextLink>
        </NavbarItem>
      )
    }
  })

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo/>
            <p className="font-bold text-inherit">DauRecipes</p>
          </NextLink>
        </NavbarBrand>
        <div className="hidden lg:flex gap-4 justify-start ml-2">
          {navbars}
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal href={siteConfig.links.twitter}>
            <TwitterIcon className="text-default-500"/>
          </Link>
          <Link isExternal href={siteConfig.links.discord}>
            <DiscordIcon className="text-default-500"/>
          </Link>
          <Link isExternal href={siteConfig.links.github}>
            <GithubIcon className="text-default-500"/>
          </Link>
          <ThemeSwitch/>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
        <NavbarItem className="hidden md:flex">
          <NextLink
            className={buttonStyles({
              radius: "full",
              variant: "shadow",
              size: 'md'
            })}
            href='/auth'
          >
            Login
          </NextLink>
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <NextLink
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
              size: 'md'
            })}
            href='/auth'
          >
            Register
          </NextLink>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.github}>
          <GithubIcon className="text-default-500"/>
        </Link>
        <ThemeSwitch/>
        <NavbarMenuToggle/>
      </NavbarContent>

      <NavbarMenu>
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
