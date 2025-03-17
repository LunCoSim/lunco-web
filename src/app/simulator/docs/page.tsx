export default function SimulatorDocsPage() {
  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <div className="mx-auto w-full min-w-0">
        <h1 className="text-4xl font-bold mb-4">Documentation (Simulator)</h1>
        <p className="text-lg mb-8">
          This is the documentation for the simulator version of our site.
          Full documentation content will be available here in the final release.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Temporary Content</h2>
        <p>
          This is a placeholder for the simulator documentation that will mirror the main site's
          documentation while allowing for independent evolution of each version.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Return to Main Site</h2>
        <p>
          <a href="/" className="text-blue-500 hover:underline">Go back to the main site</a>
        </p>
      </div>
    </article>
  );
} 