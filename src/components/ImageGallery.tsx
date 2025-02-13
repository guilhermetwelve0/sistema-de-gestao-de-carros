import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImageGalleryProps {
  images: string[];
  name: string;
}

export default function ImageGallery({ images, name }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative overflow-hidden rounded-lg">
      <img
        src={images[currentIndex]}
        alt={`${name} - Image ${currentIndex + 1}`}
        className="h-full w-full object-cover"
      />
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-blue-600" : "bg-white/50"}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white"
        onClick={previousImage}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white"
        onClick={nextImage}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  );
}
