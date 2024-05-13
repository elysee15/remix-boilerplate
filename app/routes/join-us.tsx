import JoinUsForm from "~/components/join-us/form";
import PageLayout from "~/components/layout/page-layout";

function JoinUsPage() {
  return (
    <PageLayout>
      <div className="flex flex-col gap-10 md:flex-row">
        <section className="md:w-1/2">
          <h1>Join Us</h1>
          <div className="space-y-4">
            <p className="text-balance">
              When you join Bicents, you become part of an unparalleled
              adventure of daily transformation.
            </p>
            <p className="text-balance">
              It means applying technology to metamorphose the most ambitious
              ideas and companies, while significantly reshaping their influence
              to actively participate in improving the world.
            </p>
            <p className="text-balance">
              It&apos;s also a unique opportunity to learn, to design, to
              innovate, to suggest and to shake up our perception and
              interpretation of the world.
            </p>
          </div>
        </section>
        <section className="md:w-1/2 flex justify-end">
          <JoinUsForm />
        </section>
      </div>
    </PageLayout>
  );
}

export default JoinUsPage;
