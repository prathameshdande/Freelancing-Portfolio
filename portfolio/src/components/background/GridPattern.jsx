export default function GridPattern() {
  return (
    <>
      {/* Light Theme Grid */}
      <div className="grid-pattern dark:hidden" />

      {/* Dark Theme Grid */}
      <div className="grid-pattern-dark hidden dark:block" />
    </>
  );
}
