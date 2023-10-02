import { storeExample } from "../stores/storeExample";

export const ComponentWithStoreTwo = () => {
  const { username, age } = storeExample();
  return (
    <div>
      <h2>User Profile</h2>
      <p>Username: {username}</p>
      <p>Age: {age}</p>
    </div>
  );
};
