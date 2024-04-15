"use client";

import { useQuery } from "@tanstack/react-query";

type Product = {
  id:          number;
  name:        string;
  brand:       string;
  description: string;
  photo:       string;
  price:       string;
  createdAt:   Date;
  updatedAt:   Date;
}

interface ProdutosProps {}

export default function Produtos({}: ProdutosProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["produtos"],
    queryFn: () =>
      fetch(
        "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=DESC"
      ).then((res) => res.json())
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  // Render the data
      return (
        <>
          {data.products.map((product: Product) => (
            <div key={product.id}>
              <h2>{product.name}</h2>
              <p>{product.brand}</p>
              <p>{product.description}</p>
              <img src={product.photo} alt={product.name} />
              <p>{product.price}</p>
            </div>
          ))}
        </>
      );
}
