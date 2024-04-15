import { render, screen, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import fetchMock from 'jest-fetch-mock';
import '@testing-library/jest-dom'

fetchMock.enableMocks();

const TestComponent = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["produtos"],
    queryFn: () =>
      fetch(
        "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=DESC"
      ).then((res) => res.json())
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;
  return <div>{data.message}</div>;
};

test('Retorna tela de loading quando estiver em suspense', async () => {
  fetchMock.mockRejectOnce(() => Promise.resolve(''));
  const queryClient = new QueryClient();
  render(
    <QueryClientProvider client={queryClient}>
      <TestComponent />
    </QueryClientProvider>
  );
  await waitFor(() => expect(screen.getByText('Loading...')).toBeInTheDocument());
});

test('Retorna mensagem de sucesso quando receber a response da API', async () => {
  const mockSuccessResponse = { message: 'Test successful' };
  fetchMock.mockResponseOnce(JSON.stringify(mockSuccessResponse));
  const queryClient = new QueryClient();
  render(
    <QueryClientProvider client={queryClient}>
      <TestComponent />
    </QueryClientProvider>
  );
  await waitFor(() => expect(screen.getByText('Test successful')).toBeInTheDocument());
});