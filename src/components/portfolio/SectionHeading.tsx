export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="groove flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-display text-xs font-semibold text-muted-foreground">
        {eyebrow}
      </span>
      <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
      <span aria-hidden className="groove ml-2 h-1.5 flex-1 rounded-full" />
    </div>
  );
}
