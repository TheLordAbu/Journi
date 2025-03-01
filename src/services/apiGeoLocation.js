// prettier-ignore
import { API_KEY, URL } from "../utils/constants";

export async function getGeolocation(city, country) {
  try {
    const res = await fetch(`${URL}?city=${city}&country=${country}`, {
      method: "GET",
      headers: {
        "X-Api-Key": API_KEY,
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch geolocation for ${city}, ${country}`);
    }
    const data = await res.json();
    return { data };
  } catch (err) {
    throw new err();
  }
}
