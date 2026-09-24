// Holds the home page component once main.jsx has fetched its chunk, so the first render on "/"
// can use it directly instead of suspending (a suspended first render paints the header and footer
// alone, then the hero a moment later).
let Home = null;
export const setHome = (component) => {
  Home = component;
};
export const getHome = () => Home;
