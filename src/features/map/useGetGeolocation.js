// prettier-ignore
const URL = 'https://api.api-ninjas.com/v1/geocoding';
const API_KEY = "ZwTpuFTSf02y+oL8FnQ84A==Zjt9Vh4ySHlrZHgq";

export async function useGetGeolocation(city, country) {
  try {
    const res = await fetch(`${URL}?city=${city}&country=${country}`, {
      method: "GET",
      headers: {
        "X-Api-Key": API_KEY,
      },
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}
