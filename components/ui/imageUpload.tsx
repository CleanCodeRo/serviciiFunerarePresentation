"use client";

import { useEffect, useState } from "react";
import { Button } from "./button";
import { ImagePlusIcon, TrashIcon } from "lucide-react";
import Image from "next/image";
import { CldUploadWidget } from "next-cloudinary";

interface ImageUploadProps {
  disabled?: boolean;
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
  value: string[];
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  disabled,
  onChange,
  onRemove,
  value,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onUpload = (result: any) => {
    onChange(result.info.secure_url);
  };

  if (!isMounted) return null;

  return (
    <div>
      <div className="mb-4 flex items-center gap-4">
        {value.map((url, index) => (
          <div
            key={index}
            className="relative w-[250px] h-[200px] rounded-md overflow-hidden"
          >
            <div className="z-10 top-2 absolute right-2">
              <Button
                type="button"
                onClick={() => onRemove(url)}
                variant="destructive"
                size="icon"
              >
                <TrashIcon className="h-4 w-4" />
              </Button>
            </div>
            <Image
                fill
                className="object-cover"
                src={url}
                alt="Uploaded Image"
            />
          </div>
        ))}
      </div>
      <CldUploadWidget onUpload={onUpload} uploadPreset="mjem6lyz">
        {({ open }) => {
          const onClick = () => {
            open();
          };

          return (
            <Button type="button" disabled={disabled} variant="secondary" onClick={onClick} className="bg-gray-300">
              <ImagePlusIcon className="h-4 w-4 mr-2" />
              Upload An Image
            </Button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default ImageUpload;
