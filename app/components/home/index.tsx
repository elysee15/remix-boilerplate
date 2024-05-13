import HomeHeader from "./header";
import Footer from "./footer";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";
import { cn } from "~/lib/utils";

const ACCORDION_ITEMS = [
  {
    label: "Our capabilities",
  },
  {
    label: "Our definition",
  },
  {
    label: "Our partners",
  },
  {
    label: "What's next ?",
  },
  {
    label: "Bicent accelerators",
  },
];

function Home() {
  return (
    <div className="min-h-dvh bg-background flex flex-col">
      <HomeHeader />
      <div className="container flex grow w-full border pt-8">
        <div className="flex w-full justify-end">
          {/* <section className="lg:w-3/5">
            <HeroText />
          </section> */}
          <section className="lg:w-full lg:max-w-[400px] font-sans text-lg">
            <Accordion
              type="single"
              collapsible
              className="w-full bg-[#1A1A1A]"
            >
              {ACCORDION_ITEMS.map((item, idx) => (
                <AccordionItem
                  value={`${item.label}-${idx}`}
                  key={item.label}
                  className={cn("px-6 py-3", {
                    "border-none": idx === ACCORDION_ITEMS.length - 1,
                  })}
                >
                  <AccordionTrigger>{item.label}</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
