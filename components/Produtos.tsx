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
      <Skeleton />
    );
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <div style={{
      flexGrow: 10,
    }}>
      <div
        style={{
          width: "938px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "31px 22px",
        }}
      >
        {data.products.map((product: Product) => (
          <Produto key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
}
