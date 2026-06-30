import { useState } from "react";

function Welcome() {
  const [name, setName] = useState("");

  return (
    <div>
      <h1>Welcome {name || "guest"}</h1>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter your name"
      />
    </div>
  );
}

export default Welcome;