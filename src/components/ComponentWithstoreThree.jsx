import { storeExample } from "../stores/storeExample";

export const ComponentWithStoreThree = () => {
  const { toggleLogin, incrementAge, isLogged, age } = storeExample();
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
