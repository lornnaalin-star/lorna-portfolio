import { footer, profile } from "@/content/site";

export default function Footer() {
  return (
    <footer className="relative border-t border-border/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 text-[13px] text-muted md:flex-row md:items-center md:justify-between md:px-10">
        <p>
          <span className="font-serif text-base italic text-accent">{profile.monogram}</span>
          <span className="mx-2 text-border">/</span>
          {profile.name} · {profile.school}
        </p>
        <p className="font-serif text-[15px] italic">{footer.line}</p>
        <p>© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
