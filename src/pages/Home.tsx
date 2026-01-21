import { useEffect, useState } from "react";
import type { API_Image } from "../definitions/api";
import { API_URL } from "../api/url";
import { ImageCard } from "../components";

export default function Home() {
  const [items, setItems] = useState<API_Image[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch(`${API_URL}api/image/seed`);
        if (!res.ok) throw new Error("Failed to fetch");

        const data: API_Image[] = await res.json();
        setItems(data.slice(0,20));
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setTimeout(()=>setLoading(false),500) //testing delay remove after
      }
    };

    fetchItems();
  }, []);
  return (
    <div className="h-full w-full">
      {items.length > 0 && items.map((image)=>{
        return(
          <ImageCard className={`${loading && "blur-md"} ${error && "hidden"}`} imgSrc={`${API_URL}images/${image.filename}`} imgAlt={`${image.title}`}/>
        )
      })}
    </div>
  );
}
