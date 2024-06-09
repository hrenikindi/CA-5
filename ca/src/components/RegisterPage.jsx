import { useState } from "react";
import { TextField, Button } from "@mui/material";

function RegisterPage() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pword, setPword] = useState("");
  const [repeatPword, setRepeatPword] = useState("");
  const [errors, setErrors] = useState({
    user: "",
    email: "",
    pword: "",
    repeatPword: ""
  });

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern = /^(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[a-zA-Z]).{10,}$/;

  function handleSubmit() {
    let newErrors = {
      user: "",
      email: "",
      pword: "",
      repeatPword: ""
    };

    if (user.trim() === "" || user.length < 3 || user.length > 30) {
      newErrors.user = "Name should be between 3 and 30 characters";
    }

    if (email.trim() === "" || !emailPattern.test(email)) {
      newErrors.email = "Please enter a valid Email";
    }

    if (pword.trim() === "" || !passwordPattern.test(pword)) {
      newErrors.pword =
        "Password should be at least 10 characters long with at least one special character";
    }

    if (repeatPword !== pword) {
      newErrors.repeatPword = "Passwords do not match";
    }

    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => error === "") && user.trim() !== "" && email.trim() !== "" && pword.trim() !== "" && repeatPword.trim() !== "") {
      alert("Registration successful");
    }
  }

  return (
    <div
    className="h-screen bg-cover bg-center flex items-center justify-center"
    style={{ backgroundImage: "url('https://img.freepik.com/free-photo/office-supplies_23-2148103974.jpg')" }}
  >
      <div className="w-full max-w-md mx-auto p-4 bg-white bg-opacity-50 rounded-lg">
        <h2 className="text-red-500 text-center mb-4">Registration Form</h2>

        <div className="mb-4">
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            value={user}
            onChange={(e) => setUser(e.target.value)}
            error={errors.user !== ""}
            helperText={errors.user}
          />
        </div>

        <div className="mb-4">
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email !== ""}
            helperText={errors.email}
          />
        </div>

        <div className="mb-4">
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            type="password"
            value={pword}
            onChange={(e) => setPword(e.target.value)}
            error={errors.pword !== ""}
            helperText={errors.pword}
          />
        </div>

        <div className="mb-4">
          <TextField
            label="Repeat Password"
            variant="outlined"
            fullWidth
            type="password"
            value={repeatPword}
            onChange={(e) => setRepeatPword(e.target.value)}
            error={errors.repeatPword !== ""}
            helperText={errors.repeatPword}
          />
        </div>

        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            disabled={
              user.trim() === "" ||
              email.trim() === "" ||
              pword.trim() === "" ||
              repeatPword.trim() === ""
            }
          >
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
