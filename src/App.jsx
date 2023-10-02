import { Logos } from "./components/Logos";
import { ComponentWithStore } from "./components/ComponentWithStore";
import { ComponentWithStoreTwo } from "./components/ComponentWithStoreTwo";
import { ComponentWithStoreThree } from "./components/ComponentWithstoreThree";

export const App = () => {
  return (
    <>
      <Logos />

      <ComponentWithStore />
      <hr />
      <ComponentWithStoreTwo />
      <hr />
      <ComponentWithStoreThree />
    </>
  );
};
