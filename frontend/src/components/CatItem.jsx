import styles from "../ui/CatItem.module.css";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaRegSave } from "react-icons/fa";
import { useState } from "react";

function CatItem({ item, onDelete, onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedCat, setUpdatedCat] = useState(item.cat);

  const handleEdit = () => {
    setIsEditing((prev) => {
      return !prev;
    });
  };

  const handleSave = async () => {
    await onSave(item._id, { cat: updatedCat });
    setUpdatedCat("");
    setIsEditing(false);
  };

  return (
    <div className={styles.card}>
      <div className={styles.container}>
        {isEditing ? (
          <input
            name="editField"
            placeholder={item.cat}
            autoFocus
            value={updatedCat}
            onChange={(e) => setUpdatedCat(e.target.value)}
          />
        ) : (
          <h3>{item.cat} 🐅</h3>
        )}

        <div className={styles.buttons}>
          {isEditing ? (
            <button onClick={handleEdit}>X</button>
          ) : (
            <button name="editButton" onClick={handleEdit}>
              <MdEdit />
            </button>
          )}
          {isEditing && (
            <button name="saveButton" onClick={handleSave}>
              <FaRegSave />
            </button>
          )}
          <button name="deleteButton" onClick={() => onDelete(item._id)}>
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
export default CatItem;
