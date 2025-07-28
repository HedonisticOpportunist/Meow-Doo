import styles from "../ui/LoginForm.module.css";
import deleteStyles from "../ui/DeleteForm.module.css";
import { deleteUser } from "../services/LoginService";
import { useState } from "react";

const DeleteForm = ({}) => {
  const [email, setEmail] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    deleteUser(email)
      .then((result) => {
        if (result.data === "Success") {
          console.log(result.data);
        } else {
          alert("The user has been deleted.");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.formContainer}>
      <h2>Delete User 🐾</h2>
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
        <button
          className={deleteStyles.formButton}
          type="submit"
          name="deleteButton"
        >
          Delete User 🐾
        </button>
      </form>
    </div>
  );
};

export default DeleteForm;
