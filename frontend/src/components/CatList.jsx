import CatItem from "./CatItem";

function CatList({ cats, onDelete, onSave }) {
  return (
    <>
      {cats &&
        cats.map((item) => {
          return (
            <CatItem
              item={item}
              key={item._id}
              onDelete={onDelete}
              onSave={onSave}
            />
          );
        })}
    </>
  );
}
export default CatList;
