function LegalSection({
  title,
  children,
}: React.PropsWithChildren<{
  title: string;
}>) {
  return (
    <section>
      <h3 className="text-h6 mb-2 text-balance">{title}</h3>
      <p className="text-balance">{children}</p>
    </section>
  );
}

export default LegalSection;
