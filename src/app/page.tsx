import RevealButton from "./_components/reveal-button";

export default async function Home() {
  const joke = await fetch("https://api.chucknorris.io/jokes/random", {
    cache: "no-cache",
  }).then((res) => res.json());

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-12 p-24">
      <h1>Hello Chuck!</h1>

      <RevealButton>{joke.value}</RevealButton>
    </div>
  );
}
