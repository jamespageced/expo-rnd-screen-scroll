type Product = {
  id: string;
  image: string;
  name: string;
  price: number;
  qtyAvailable: number;
};

type ApiErrorResponse = {
  data: null;
  status: number;
  statusText: string;
};

type ApiSearchProductListResponse = {
  data: Array<Product> | null;
  status: number;
  statusText: string;
};

const products: Array<Product> = [
  {
    id: '0efe53cc-8ff6-40e7-b778-df523e176386',
    image: 'https://fakeimg.pl/500x500/cccccc',
    name: 'Pencil #1',
    price: 1.99,
    qtyAvailable: 45
  },
  {
    id: '04ea3909-7c5d-45ce-a068-6cf15e048595',
    image: 'https://fakeimg.pl/500x500/ff0000',
    name: 'Pencil #2',
    price: 2.99,
    qtyAvailable: 59
  },
  {
    id: '09f38d3c-30d4-418c-bfc2-97371b1d7206',
    image: 'https://fakeimg.pl/500x500/0000ff',
    name: 'Pencil #3',
    price: 3.99,
    qtyAvailable: 38
  },
  {
    id: '1791cc90-b43b-4a63-ac51-047304fb8ed3',
    image: 'https://fakeimg.pl/500x500/000000',
    name: 'Pencil #4',
    price: 3.99,
    qtyAvailable: 12
  },
  {
    id: '31ed3916-3bfa-4f58-81ca-e00e2e70b914',
    image: 'https://fakeimg.pl/500x500/808080',
    name: 'Pencil #5',
    price: 3.99,
    qtyAvailable: 83
  },
  {
    id: '42942cdc-e447-4406-8864-a304d3a1cf72',
    image: 'https://fakeimg.pl/500x500/008000',
    name: 'Pack of Pencils #1-5',
    price: 10.99,
    qtyAvailable: 1000
  },
  {
    id: '3d356e83-40e3-4764-801c-c105afe9f0eb',
    image: 'https://fakeimg.pl/500x500/008080',
    name: 'Paper (x100 stack)',
    price: 2.99,
    qtyAvailable: 1000
  },
  {
    id: '1db776ab-e7cd-4dc5-be25-c53c86f885d7',
    image: 'https://fakeimg.pl/500x500/000055',
    name: 'Paper (x200 stack)',
    price: 4.99,
    qtyAvailable: 1000
  },
  {
    id: 'f6e857d2-1af6-4501-a5a7-6339141f46cb',
    image: 'https://fakeimg.pl/500x500/770000',
    name: 'Paper (x500 stack)',
    price: 8.99,
    qtyAvailable: 1000
  }
];

function apiErrorHandler(msg: string): ApiErrorResponse {
  return {
    data: null,
    status: 500,
    statusText: msg
  };
}

export async function apiSearchProductList(searchText: string): Promise<ApiSearchProductListResponse> {
  try {
    await sleep(1000);
    const formattedSearchText = searchText.trim().toLowerCase();
    if (formattedSearchText.length < 2) {
      throw new Error('search requires at least two characters');
    }
    return {
      data: products.filter(prod => prod.name.toLowerCase().includes(formattedSearchText)),
      status: 200,
      statusText: 'success'
    };
  } catch (error: any) {
    return apiErrorHandler(error.message);
  }
}

export function sleep(delay: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}
