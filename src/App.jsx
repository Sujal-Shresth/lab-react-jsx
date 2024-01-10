import "./App.css";
import elephant from "./images/elephant.jpeg";

const imageData = () => {
  let data = [
    {
      id: 1,
      img: elephant,
    },
    {
      id: 2,
      img: elephant,
    },
    {
      id: 3,
      img: elephant,
    },
    {
      id: 4,
      img: elephant,
    },
  ];
  return data;
};

function App() {
  // code here
  const data = imageData();
  function createComp() {
    return data.map((image) => {
      return (
        <img
          key={image.id}
          id={image.id}
          src={image.img}
          alt={`Image ${image.id}`}
        />
      );
    });
  }
  return (
    <div id="functionalComponent">
      <h3>Kalvium Gallery using functionalComponent</h3>

      <div className="grid">{createComp()}</div>
    </div>
  );
}

export default App;
