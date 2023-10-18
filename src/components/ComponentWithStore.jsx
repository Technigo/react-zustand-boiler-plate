import { useStore } from "../stores/useStore";

export const ComponentWithStore = () => {
  const {
    appContent,
    isLogged,
    age,
    username,
    hobbies,
    address,
    favSportTeam,
    toggleLogin,
    incrementAge,
    setUsername,
    addHobby,
    setAddress,
    setFavSportTeam,
  } = useStore();
  return (
    <>
      <h1>{appContent.heading}</h1>
      <div>
        <h2>{appContent.reactivedataExampleOne}</h2>
        <hr />
      </div>
      <div>
        <p>Logged in: {isLogged ? "Yes" : "No"}</p>
        <button onClick={toggleLogin}>Toggle Login</button>

        <p>Age: {age}</p>
        <button onClick={incrementAge}>Increment Age</button>

        <p>Username: {username}</p>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />

        <p>Hobbies:</p>
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
        <input
          placeholder="Add a hobby"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addHobby(e.target.value);
              e.target.value = "";
            }
          }}
        />

        <p>
          Address: {address.street}, {address.city}, {address.zip}
        </p>
        <button
          onClick={() =>
            setAddress({
              street: "456 Elm St",
              city: "Othertown",
              zip: "67890",
            })
          }
        >
          Change Address
        </button>

        <p>Favorite Sports Team: {favSportTeam}</p>
        <input
          placeholder="Set favorite sports team"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setFavSportTeam(e.target.value);
              e.target.value = "";
            }
          }}
        />
      </div>
    </>
  );
};
