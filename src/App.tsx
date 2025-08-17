import InputField from "./components/InputField";
import Button from "./components/Button";

function App() {
  return (
    <div className="p-8 flex flex-col gap-6 max-w-md mx-auto">
      <InputField
        label="Username"
        placeholder="Enter username"
        helperText="Your unique login ID"
        clearable
      />

      <InputField
        label="Password"
        type="password"
        placeholder="Enter password"
        passwordToggle
      />

      <Button variant="primary" size="md">
        Login
      </Button>

      <Button variant="danger" loading>
        Delete
      </Button>
    </div>
  );
}

export default App;
