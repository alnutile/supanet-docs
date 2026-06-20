import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col flex-1">
      <section className="flex flex-col items-center text-center px-4 py-20 gap-6">
        <span className="text-sm font-medium uppercase tracking-widest text-fd-muted-foreground">
          The AI intranet you own
        </span>
        <h1 className="text-4xl md:text-5xl font-bold max-w-3xl">SupaNet</h1>
        <p className="max-w-2xl text-lg text-fd-muted-foreground">
          A private workspace with an AI assistant that knows your stuff. Chat,
          share living documents, drop in PDFs and ask questions of them, and
          wire it into the rest of your tools. Built on Supabase, and yours to
          run and extend.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/docs/using"
            className="rounded-lg bg-fd-primary text-fd-primary-foreground px-5 py-2.5 font-medium"
          >
            Using SupaNet →
          </Link>
          <Link
            href="/docs/building"
            className="rounded-lg border border-fd-border px-5 py-2.5 font-medium"
          >
            Building on SupaNet →
          </Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 max-w-4xl mx-auto w-full px-4 pb-20">
        <Link
          href="/docs/using"
          className="rounded-xl border border-fd-border p-6 hover:bg-fd-accent transition-colors"
        >
          <h2 className="text-xl font-semibold mb-2">For everyone</h2>
          <p className="text-fd-muted-foreground">
            What SupaNet can do for you day to day: the chat assistant, shareable
            artifacts, files and PDF knowledge, skills, and the things people
            actually use it for. No code required.
          </p>
        </Link>
        <Link
          href="/docs/building"
          className="rounded-xl border border-fd-border p-6 hover:bg-fd-accent transition-colors"
        >
          <h2 className="text-xl font-semibold mb-2">For builders</h2>
          <p className="text-fd-muted-foreground">
            How it is put together and how to extend it: deploy, agents, tools,
            Forge, guardrails, the MCP server, and how to teach SupaNet about
            itself.
          </p>
        </Link>
      </section>
    </main>
  );
}
