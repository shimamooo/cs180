export const Lines = () => (
  <div className="pointer-events-none absolute inset-0 flex justify-center">
    <div className="xs:grid-cols-2 max-w-8xl grid size-full grid-cols-1 gap-3.5 px-4 lg:grid-cols-3 xl:grid-cols-4">
      <div className="border-foreground/10 border-x border-dashed" />
      <div className="border-foreground/10 border-x border-dashed" />
      <div className="border-foreground/10 hidden border-x border-dashed lg:block" />
      <div className="border-foreground/10 hidden border-x border-dashed xl:block" />
    </div>
  </div>
);
