import { useState } from "react";
import { InputField } from "./components/InputField";

function App() {
  const [value, setValue] = useState("");

  return (
    <div className="p-6 max-w-md mx-auto">
      <InputField
        label="Username"
        placeholder="Enter username"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        helperText="This will be your login ID"
      />

      <div className="mt-4">Typed value: {value}</div>
    </div>
  );
}

export default App;
