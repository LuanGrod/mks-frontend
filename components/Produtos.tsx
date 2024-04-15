"use client";

import { Product } from "@/lib/types";

import { useQuery } from "@tanstack/react-query";
import Produto from "@/components/Produto";
import Skeleton from "@/components/Skeleton";


interface ProdutosProps { }

export default function Produtos({ }: ProdutosProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["produtos"],
    queryFn: () =>
      fetch(
        "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=DESC"
      ).then((res) => res.json())
  });

  if (isLoading) {
    return (
        <Skeleton/>
    );
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  /*
  const { items, addItem, removeItem } = useCartStore(
    (state) => state,
  )
  */

  // Render the data
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
    }}>
      {/* {
        items.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
            <button onClick={() => removeItem(item)}>Remove</button>
          </div>
        ))
      } */}
      {data.products.map((product: Product) => (
        <Produto key={product.id} data={product} />
      ))}
    </div>
  );
}
