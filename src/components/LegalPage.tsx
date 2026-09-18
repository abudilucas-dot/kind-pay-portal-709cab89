import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { PRODUCT_SHORT_NAME, SUPPORT_EMAIL } from "@/config/site";

type Section = {
  title: string;
  paragraphs: string[];
};

type LegalPageProps = {
  title: string;
  updatedAt: string;
  introduction: string;
  sections: Section[];
};

export function LegalPage({ title, updatedAt, introduction, sections }: LegalPageProps) {
  return (
    <main className="min-h-screen bg-background px-5 py-10 sm:py-16">
      <article className="mx-auto max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-foreground"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          Voltar para {PRODUCT_SHORT_NAME}
        </Link>

        <header className="mt-10 border-b border-border pb-8">
          <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-accent">
            Informações legais
          </p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight sm:text-5xl">{title}</h1>
          <p className="mt-4 text-sm text-muted-foreground">Última atualização: {updatedAt}</p>
        </header>

        <div className="mt-8 space-y-8">
          <p className="text-base leading-8 text-muted-foreground">{introduction}</p>
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-bold">{section.title}</h2>
              <div className="mt-3 space-y-3">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="leading-7 text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <footer className="mt-12 border-t border-border pt-6 text-sm text-muted-foreground">
          Dúvidas podem ser enviadas para{" "}
          <a className="font-semibold text-accent hover:text-foreground" href={`mailto:${SUPPORT_EMAIL}`}>
            {SUPPORT_EMAIL}
          </a>
          .
        </footer>
      </article>
    </main>
  );
}