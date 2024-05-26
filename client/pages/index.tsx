import {Link, Snippet, Code, button as buttonStyles} from "@nextui-org/react";

import {siteConfig} from "@/config/site";
import {title, subtitle} from "@/components/primitives";
import {GithubIcon} from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import NextLink from "next/link";
import {useUserStore} from "@/providers/user-store-provider";



export default function IndexPage() {

  const {username} = useUserStore(state => state)
  const setupHref = username ? '/plans' : '/auth'

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title({size: 'lg'})}>Make&nbsp;</h1>
          <h1 className={title({color: "violet", size: 'lg'})}>a healthy&nbsp;</h1>
          <br/>
          <h1 className={title({size: 'lg'})}>
            meal plan in no time with the help of an AI assistant.
          </h1>
          <h4 className={subtitle({class: "mt-4"})}>
            Create, customize your meal plans
          </h4>
        </div>

        <div className="flex gap-3">
          <NextLink
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
              size: 'lg'
            })}
            href='/plans'
          >
            Setup plan
          </NextLink>
          <Link
            isExternal
            className={buttonStyles({variant: "bordered", radius: "full", size: 'lg'})}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20}/>
            GitHub
          </Link>
        </div>

        {/*<div className="mt-8">*/}
        {/*  <Snippet hideCopyButton hideSymbol variant="bordered">*/}
        {/*    <span>*/}
        {/*      Get started by editing{" "}*/}
        {/*      <Code color="primary">pages/index.tsx</Code>*/}
        {/*    </span>*/}
        {/*  </Snippet>*/}
        {/*</div>*/}
      </section>
    </DefaultLayout>
  );
}
