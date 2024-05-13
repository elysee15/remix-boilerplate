import { PropsWithChildren } from "react";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";
import Footer from "../home/footer";

function PageLayout({ children }: PropsWithChildren) {
  return (
    <div className="container min-h-dvh flex flex-col">
      <header className="py-8">
        <Button className="bg-[#3F3F3F] rounded-none h-10 w-10 md:h-14 md:w-14 p-2.5">
          <ArrowLeft className="w-6 h-6 md:w-6 md:h-6" />
        </Button>
      </header>
      <div className="md:px-8 pt-8 md:pt-10 pb-10">{children}</div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default PageLayout;
