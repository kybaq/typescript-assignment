import CountriesList from "./components/CountriesList";

export default function App(): JSX.Element {
  return (
    <section className="m-4">
      <h1 className="text-center mb-4 text-3xl font-bold">
        250 Countries All around the World!
      </h1>
      <CountriesList />
    </section>
  );
  // return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}
