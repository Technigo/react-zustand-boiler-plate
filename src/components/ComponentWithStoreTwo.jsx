import { useStore } from "../stores/useStore";

export const ComponentWithStoreTwo = () => {
  const { username, age } = useStore();
  return (
    <div>
      <h2>User Profile</h2>
      <p>Username: {username}</p>
      <p>Age: {age}</p>
    </div>
  );
};
