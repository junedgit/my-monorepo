import { hcWithType } from "server/dist/client";

const SERVER_URL = "http://localhost:3000";
const client = hcWithType(SERVER_URL);

export default async function Home() {
  const res = await client.hello.$get();
  if (!res.ok) {
    console.log("Error fetching data");
    return;
  }
  const data = await res.json();

  return (
    <div className="max-w-xl mx-auto flex flex-col gap-6 items-center justify-center min-h-screen">
      <h1 className="text-5xl font-black">Hello World!!</h1>
      <p>A typesafe fullstack monorepo</p>
      <div className="flex items-center gap-4"></div>
      {data && (
        <pre className="bg-neutral-800 p-4 rounded-md">
          <code>
            Message: {data.message} <br />
            Success: {data.success.toString()}
          </code>
        </pre>
      )}
      <h2 className="font-semibold fixed bottom-7">©junedgit</h2>
    </div>
  );
}
