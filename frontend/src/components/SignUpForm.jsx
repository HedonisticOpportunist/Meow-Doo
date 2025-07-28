import styles from "../ui/LoginForm.module.css";
import { registerUser } from "../services/LoginService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpForm = ({}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(email, password)
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.formContainer}>
      <h2>Register For More Features 🐾</h2>
      <form
        className={styles.form}
        onSubmit={handleSubmit}
        id="form-validation"
        action="/action_page.php"
      >
        <div>
          <label htmlFor="emailItem">Email:</label>
          <input
            id="emailItem"
            autoComplete="off"
            name="email"
            required={true}
            type="text"
            placeholder="Enter Email 🐈‍⬛"
            value={email || ""}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="passwordItem">Password:</label>
          <input
            id="passwordItem"
            autoComplete="off"
            name="password"
            required={true}
            type="password"
            placeholder="Enter Password 🐈‍⬛"
            value={password || ""}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className={styles.formButton}
          name="registerButton"
          type="submit"
        >
          Register 🐾
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
