import {Link, Snippet, Code, button as buttonStyles} from "@nextui-org/react";

import {siteConfig} from "@/config/site";
import {title, subtitle} from "@/components/primitives";
import {GithubIcon} from "@/components/icons";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title({})}>Make&nbsp;</h1>
          <h1 className={title({color: "violet"})}>a healthy&nbsp;</h1>
          <br/>
          <h1 className={title({})}>
            meal plan instantly with the help an AI-assistant.
          </h1>
          <h4 className={subtitle({class: "mt-4"})}>
            Create, customize your plan meals
          </h4>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.docs}
          >
            Get started
          </Link>
          <Link
            isExternal
            className={buttonStyles({variant: "bordered", radius: "full"})}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20}/>
            GitHub
          </Link>
        </div>

        <div className="mt-8">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
              Get started by editing{" "}
              <Code color="primary">pages/index.tsx</Code>
            </span>
          </Snippet>
        </div>
      </section>
    </DefaultLayout>
  );
}
