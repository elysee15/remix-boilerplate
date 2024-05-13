import { Mail } from "lucide-react";
import PageLayout from "~/components/layout/page-layout";

function ContactUsPage() {
  return (
    <PageLayout>
      <div>
        <h1 className="mb-20">Contact</h1>
        <address className="">
          <div>
            <div className="flex items-start gap-3">
              <Mail className="stroke-black fill-white w-10 h-10 block shrink-0" />
              <div>
                <a
                  href="mailto:available@bicents.com"
                  className="font-semibold text-2xl md:text-3xl not-italic inline-block mb-2"
                >
                  available@bicents.com
                </a>
                <p className="not-italic text-balance">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Exercitationem, asperiores.
                </p>
              </div>
            </div>
          </div>
        </address>
      </div>
    </PageLayout>
  );
}

export default ContactUsPage;
