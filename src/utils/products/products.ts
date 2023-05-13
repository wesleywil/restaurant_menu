export async function getProducts(category?:string) {
    const res = await fetch(
        `http://localhost:3000/api/getProducts?category=${category}`
    );
    if (!res.ok) {
      console.log("Error:", res);
    }
    return res.json();
  }