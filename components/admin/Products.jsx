import Title from "../ui/Title";
import Image from "next/image";

const Products = () => {
    return (
        <div className="lg:p-8 flex-1 lg:mt-0 mt-5">
          <Title addClass="text-[40px]">ürünler</Title>
          <div className="overflow-x-auto w-full mt-5">
            <table className="w-full text-sm text-center text-gray-500 min-w-[1000px]">
              <thead className="text-xs text-gray-400 uppercase bg-gray-700">
                <tr>
                  <th scope="col" className="py-3 px-6">
                    Resim
                  </th>
                  <th scope="col" className="py-3 px-6">
                    ID
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Başlık
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Fİyat
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Aksiyon
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="transition-all bg-secondary border-gray-700 hover:bg-primary ">
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center">
                    <Image src="/images/kavurma-1.png" alt="" width={50} height={50} />
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    63049e92...
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    Kavurma
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    200 Tl
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    <button className="btn-primary !bg-danger">Sil</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    };
    
    export default Products;