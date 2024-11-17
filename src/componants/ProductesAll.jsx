import Productes from "../assets/img/Productes";
import AddButton from "../componants/AddButton"


const ProductesAll = () => {

  return (
<div className="mt-96">

   <div className="mb-8 flex justify-center items-center">
    <p className="text-xl font-serif font-bold relative after:content-[''] after:block after:w-full after:h-1 after:bg-slate-950 after:mt-2">
      Our Products
    </p>
  </div>

  <div id="menu" className="flex justify-center items-center ">
      <div className="no-animation grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 
      gap-2 sm:gap-12 
      ">
      {Productes.map((product) => (
        <div key={product.id} className="max-w-xs p-2 m-0 border rounded-lg hover:shadow-gray-950 shadow-2xl">
          <img src={product.image} alt={product.name} className="w-56 h-52 sm:w-96 sm:h-64 object-cover 
          rounded-t-lg" />
          <div className="p-4 flex flex-col justify-center items-center text-sm sm:text-xl">
            <h3 className=" font-semibold">{product.name}</h3>
            <p className="text-gray-500 line-through">${product.old_price}</p>
            <p className="text-lg font-bold text-green-500">${product.new_price}</p>
            <AddButton/>
          </div>
        </div>
      ))}
    </div>
    
  </div>

</div>
  );
};

export default ProductesAll;
