import getJokeById from "@/server/data/get-joke-by-id";

type Props = {
  params: {
    id: string;
  };
};

export default async function JokePage({ params }: Props) {
  const joke = await getJokeById(params.id);

  return (
    <div className="flex flex-1 items-center justify-center px-8 py-6">
      <div className="w-full max-w-lg">
        <p>{joke.value}</p>
      </div>
    </div>
  );
}
