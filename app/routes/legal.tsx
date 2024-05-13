import PageLayout from "~/components/layout/page-layout";
import LegalSection from "~/components/legal/legal-section";

function LegalPage() {
  return (
    <PageLayout>
      <article className="space-y-8 pb-10">
        <h1 className="text-4xl md:text-6xl font-extrabold orange_bar">
          Legal
        </h1>
        <div className="space-y-6">
          <p className="text-balance">
            It is with pleasure that we welcome you to our community dear
            Feeturer, based on the principles of transparency, respect and
            integrity. We ask you to take the time to read our Terms of Use,
            which are not a mere formality, but the reflection of our commitment
            to create a caring community. These terms are not constraints, but
            guidelines to ensure peaceful coexistence, where everyone
            contributes to the building of our online space. Are you ready to
            join an adventure where the rules are not only frameworks, but also
            criteria of quality of our community? Let’s go together to discover
            a world where ethics and respect are the basis of every interaction.
          </p>
          <LegalSection title="1. Use of the Service">
            You commit to using our social network in a legal and ethical
            manner, adhering to applicable laws. Any abusive, fraudulent, or
            illegal use of the platform is strictly prohibited.
          </LegalSection>
          <LegalSection title="2. Data Confidentiality">
            We prioritize the confidentiality of your personal information. Our
            privacy policy outlines how we collect, use, and protect your data.
          </LegalSection>
          <LegalSection title="3. User Responsibility">
            You are responsible for the content you share on the platform. We
            reserve the right to remove any content that violates our
            guidelines, ensuring a respectful environment.
          </LegalSection>
          <LegalSection title="4. Intellectual Property">
            All content shared on the platform is our intellectual property,
            unless otherwise indicated. Any unauthorized use, including
            reproduction or distribution, is strictly prohibited.
          </LegalSection>
          <LegalSection title="5. E-commerce">
            Transactions on our platform are governed by specific e-commerce
            conditions.We aim to ensure secure transactions and optimal customer
            satisfaction.
          </LegalSection>
          <LegalSection title="6. Privacy Policy">
            Information Collection We collect necessary information to enhance
            your experience on the platform. This may include registration data,
            profile information, and transaction-related data.
          </LegalSection>
          <LegalSection title="5. E-commerce">
            Transactions on our platform are governed by specific e-commerce
            conditions.We aim to ensure secure transactions and optimal customer
            satisfaction.
          </LegalSection>
        </div>
      </article>
    </PageLayout>
  );
}

export default LegalPage;
