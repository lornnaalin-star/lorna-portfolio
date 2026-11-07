import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-start justify-center px-6">
      <p className="text-[11px] uppercase tracking-[0.3em] text-muted">404</p>
      <h1 className="mt-6 font-serif text-6xl font-light text-foreground">
        This room is <em className="text-accent">still empty.</em>
      </h1>
      <p className="mt-6 text-muted">You wandered somewhere I haven’t furnished yet.</p>
      <div className="mt-10">
        <Button href="/" showArrow={false}>
          Back to the daydream
        </Button>
      </div>
    </div>
  );
}
