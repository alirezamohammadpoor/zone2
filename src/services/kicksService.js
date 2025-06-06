const KICKSDB_API_KEY = import.meta.env.VITE_KICKSDB_API_KEY;

export const fetchProducts = async (query = "1011B974-400", limit = 20) => {
  const url = `https://api.kicks.dev/v3/stockx/products?query=${query}&limit=${limit}&sort=release_date`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${KICKSDB_API_KEY}`,
    },
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

export async function fetchMultipleProducts(asicsSKUs, nikeSKUs, adidasSKUs) {
  const asicsProducts = await Promise.all(
    asicsSKUs.map((sku) => fetchProducts(sku))
  );
  const nikeProducts = await Promise.all(
    nikeSKUs.map((sku) => fetchProducts(sku))
  );
  const adidasProducts = await Promise.all(
    adidasSKUs.map((sku) => fetchProducts(sku))
  );
  return { asicsProducts, nikeProducts, adidasProducts };
}
