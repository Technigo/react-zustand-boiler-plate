import { create } from "zustand";

export const useStore = create((set) => ({
  appContent: {
    heading: "Vite + React + Zustand Technigo Boilerplate",
    reactivedataExampleOne:
      "Here is a component with all data types using Zustand as its central store:",
  }, // object
  isLogged: false, // boolean
  age: 25, // number
  username: "JohnDoe", // string
  hobbies: ["reading", "hiking", "coding"], // array
  address: {
    // object
    street: "123 Main St",
    city: "Anytown",
    zip: "12345",
  },
  favSportTeam: null, // null

  toggleLogin: () => set((state) => ({ isLogged: !state.isLogged })),
  incrementAge: () => set((state) => ({ age: state.age + 1 })),
  setUsername: (newUsername) => set({ username: newUsername }),
  addHobby: (hobby) => set((state) => ({ hobbies: [...state.hobbies, hobby] })),
  setAddress: (newAddress) => set({ address: newAddress }),
  setFavSportTeam: (team) => set({ favSportTeam: team }),
}));
