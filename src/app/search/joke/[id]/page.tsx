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
    <div className="flex flex-1 justify-center items-center px-24 py-6">
      <p>{joke.value}</p>
    </div>
  );
}
