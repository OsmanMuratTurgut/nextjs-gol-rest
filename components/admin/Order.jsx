import Title from "../ui/Title";

const Order = () => {
  return (
    <div className="lg:p-8 flex-1 lg:mt-0 mt-5">
      <Title addClass="text-[40px]">Siparişler</Title>
      <div className="overflow-x-auto w-full mt-5">
        <table className="w-full text-sm text-center text-gray-500 min-w-[1000px]">
          <thead className="text-xs text-gray-400 uppercase bg-gray-700">
            <tr>
              <th scope="col" className="py-3 px-6">
                Ürün ID
              </th>
              <th scope="col" className="py-3 px-6">
                Müşteri
              </th>
              <th scope="col" className="py-3 px-6">
                Tutar
              </th>
              <th scope="col" className="py-3 px-6">
                Ödeme
              </th>
              <th scope="col" className="py-3 px-6">
                Durum
              </th>
              <th scope="col" className="py-3 px-6">
                Aksiyon
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="transition-all bg-secondary border-gray-700 hover:bg-primary ">
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white gap-x-1 ">
                63107...
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                Ali Yavuz
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                230 TL
              </td>

              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                Nakit
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                Teslim Edildi
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                <button className="btn-primary !bg-success">Sonraki</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;