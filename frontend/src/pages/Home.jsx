import CatForm from "../components/CatForm";
import { getCats, deleteCat, updateCat } from "../services/CatServices";
import CatList from "../components/CatList";
import { useEffect, useState } from "react";
import LoginForm from "../components/LoginForm";

function Home() {
  const [cats, setCats] = useState([]);
  const fetchCats = async () => {
    const response = await getCats();
    setCats(response);
  };
  useEffect(() => {
    fetchCats();
  }, []);

  const removeCat = async (id) => {
    await deleteCat(id);
    await fetchCats();
  };
  const saveCat = async (id, cat) => {
    const response = await updateCat(id, cat);
    console.log(response);
    await fetchCats();
  };

  return (
    <>
      <CatForm fetchCats={fetchCats} />
      <CatList cats={cats} onDelete={removeCat} onSave={saveCat} />
      <LoginForm></LoginForm>
    </>
  );
}

export default Home;
