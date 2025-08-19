// src/hooks/useAssetLoader.js
import { useState, useEffect } from "react";

export function useAssetLoader(assets: string[]) {
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let loadedCount = 0;
    const total = assets.length;

    const handleLoad = () => {
      loadedCount++;
      setProgress(Math.round((loadedCount / total) * 100));
      if (loadedCount === total) setTimeout(() => setLoaded(true), 300);
    };

    assets.forEach((asset) => {
      if (
        asset.endsWith(".png") ||
        asset.endsWith(".jpg") ||
        asset.endsWith(".svg")
      ) {
        const img = new Image();
        img.src = asset;
        img.onload = handleLoad;
        img.onerror = handleLoad;
      } else {
        handleLoad(); // autres types
      }
    });
  }, [assets]);

  return { progress, loaded };
}
