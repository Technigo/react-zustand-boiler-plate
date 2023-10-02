import { Logos } from "./components/Logos";
import { ComponentWithStore } from "./components/ComponentWithStore";
import { ComponentWithStoreTwo } from "./components/ComponentWithStoreTwo";

export const App = () => {
  return (
    <>
      <Logos />

      <ComponentWithStore />
      <hr />
      <ComponentWithStoreTwo />
    </>
  );
};
