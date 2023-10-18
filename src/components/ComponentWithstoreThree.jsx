import { useStore } from "../stores/useStore";

export const ComponentWithStoreThree = () => {
  const { toggleLogin, incrementAge, isLogged, age } = useStore();
  return (
    <div>
      <h2>User Settings</h2>
      <p>Logged in: {isLogged ? "Yes" : "No"}</p>
      <button onClick={toggleLogin}>Toggle Login</button>

      <p>Age: {age}</p>
      <button onClick={incrementAge}>Increment Age</button>
    </div>
  );
};
