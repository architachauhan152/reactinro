import "./styles.css";

function App() {
  const data = [
    {
      head: "Mobile Operationg System",
      ops: ["Android", "Blackberry", "Iphone", "Windows Phone"]
    },
    {
      head: "Mobile Manufacturers",
      ops: ["Samsung", "HTC", "Micromax", "Apple"]
    }
  ];
  return (
    <div>
      {data.map((dat) => (
        <User head={dat.head} rem={dat.ops} />
      ))}{" "}
    </div>
  );
}

function User({ head, rem }) {
  return (
    <div>
      <h1>{head}</h1>
      <ul>
        <li>{rem[0]}</li>
        <li>{rem[1]}</li>
        <li>{rem[2]}</li>
        <li>{rem[3]}</li>
      </ul>
    </div>
  );
}

export default App;
