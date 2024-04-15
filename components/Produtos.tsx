"use client";

import { Product } from "@/lib/types";

import { useQuery } from "@tanstack/react-query";
import Produto from "./Produto";
import Skeleton from "./Skeleton";


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
        <Skeleton props={"alo"} key={"1"}></Skeleton>
    );
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  // Render the data
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
    }}>
      {data.products.map((product: Product) => (
        <Produto key={product.id} data={product} />
      ))}
    </div>
  );
}
