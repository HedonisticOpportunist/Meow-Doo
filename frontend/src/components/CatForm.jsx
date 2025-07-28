import styles from "../ui/CatForm.module.css";
import { createCat } from "../services/CatServices";
import { useState } from "react";

function CatForm({ fetchCats }) {
  const [title, setTitle] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    await createCat({ cat: title });
    setTitle("");
    fetchCats();
  };
  return (
    <div className={styles.formContainer}>
      <h2>Cats 🐾</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          name="addCat"
          type="text"
          placeholder="Add a cat here 🐱"
          autoComplete="off"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <button className={styles.formButton} type="submit">
          Add Cat 🐾
        </button>
      </form>
    </div>
  );
}

export default CatForm;
