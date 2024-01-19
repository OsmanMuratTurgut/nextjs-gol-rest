import axios from "axios";
import { useEffect, useState } from "react";
import Input from "../form/Input";
import Title from "../ui/Title";

const Category = () => {
  const [inputText, setInputText] = useState("");
  const [portionSize, setportionSize] = useState();
  const [categories, setCategories] = useState([]);
  const handleSize = (sizeIndex) => {
    setportionSize(sizeIndex);
  };

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/categories`
        );
        setCategories(res?.data);
      } catch (err) {
        console.log(err);
      }
    };
    getCategories();
  }, []);

  

  const handleDelete = async (e, id) => {
    e.preventDefault();
    try {
      if (confirm("Are you sure you want to delete this category?")) {
        await axios.delete(
          `${process.env.NEXT_PUBLIC_API_URL}/categories/${id}`
        );
        setCategories(categories.filter((cat) => cat._id !== id));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const newCategory = {
    title:inputText,
    portionSize,
  };
  const handleCreate = async (e) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/categories`,
        newCategory
      );
      setCategories([...categories, res.data]);
      setInputText("");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="lg:p-8 flex-1 lg:mt-0 mt-5">
      <Title addClass="text-[40px]">Kategori</Title>
      <div className="mt-5">
        <div className="flex gap-4 flex-1 items-center">
          <Input
            placeholder="Yeni Kategori Ekle..."
            onChange={(e) => setInputText(e.target.value)}
            value={inputText}
          />
          <Input
            placeholder="Yeni Kategori Ekle..."
            onChange={(e) => setportionSize(e.target.value)}
            value={portionSize}
          />
          <div className="flex items-center gap-x-20 md:justify-start justify-center">
            <div
              className="relative w-8 h-8 cursor-pointer"
              onClick={() => handleSize(0)}
              value={portionSize}
            >
              <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium">
                yok
              </span>
            </div>
            <div
              className="relative w-12 h-12 cursor-pointer"
              onClick={() => handleSize(1)}
              value={portionSize}
            >
              <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium">
                Az-Tam
              </span>
            </div>
            <div
              className="relative w-16 h-16 cursor-pointer"
              onClick={() => handleSize(2)}
              value={portionSize}
            >
              <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium">
                Bir-Bir buçuk
              </span>
            </div>
          </div>

          <button className="btn-primary" onClick={handleCreate}>
            Ekle
          </button>
        </div>
        <div className="mt-10  max-h-[250px] overflow-auto pb-4">
          {categories.map((category) => (
            <div className="flex justify-between mt-4" key={category._id}>
              <b className="text-xl">{category.title}</b>
              <b className="text-xl">{category.portionSize}</b>
              <button
                className="btn-primary !bg-danger"
                onClick={(e) => handleDelete(e, category._id)}
              >
                Sil
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
