import { useEffect, useState } from "react";
import type { Image } from "../definitions/api";
import { API_URL } from "../api/url";

export default function Home() {
  const [items, setItems] = useState<Image[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch(`${API_URL}api/image/seed`);
        if (!res.ok) throw new Error("Failed to fetch");

        const data: Image[] = await res.json();
        setItems(data.slice(0,20));
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);
  return (
    <div className="h-full w-full">
      <h1>This is home</h1>
      {items.length > 0 && items.map((image)=>{
        return(
          <img src={`${API_URL}images/${image.filename}`} alt={`${image.title}`} key={image.id}/>
        )
      })}
    </div>
  );
}
