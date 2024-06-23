type Props = {
  params: {
    id: string;
  };
};

export default async function JokePage({ params }: Props) {
  const joke = await fetch(`https://api.chucknorris.io/jokes/${params.id}`, {
    cache: "no-cache",
  }).then((res) => res.json());

  return (
    <div className="flex flex-1 items-center justify-center px-8 py-6">
      <div className="w-full max-w-lg">
        <p>{joke.value}</p>
      </div>
    </div>
  );
}
