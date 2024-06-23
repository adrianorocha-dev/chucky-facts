export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="text-xl">No results found for your search</p>
      </div>

      <a href="/search" className="text-blue-500 hover:underline">
        Go back to search
      </a>
    </div>
  );
}
