import styles from "../ui/LoginForm.module.css";
import { loginUser } from "../services/LoginService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = ({}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(email, password)
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/bonus");
        } else {
          navigate("/register");
          alert("You are not registered to this service");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.formContainer}>
      <h2>Login For More Features 🐾</h2>
      <form
        className={styles.form}
        onSubmit={handleSubmit}
        id="form-validation"
        action="/action_page.php"
      >
        <div>
          <label htmlFor="emailItem">Email:</label>
          <input
            className="login"
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
            className="login"
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
        <button className={styles.formButton} type="submit" name="loginButton">
          Login 🐾
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
