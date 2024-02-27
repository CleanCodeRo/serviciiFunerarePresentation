"use client";

import usePreviewModal from "@/hooks/usePreviewModal";
import PreviewModal from "../ui/modals/PreviewModal";
import Gallery from "../gallery/Gallery";
import Info from "../info/Info";

const Preview = () => {
  const preview = usePreviewModal();
  const product = usePreviewModal((state) => state.data);

  if (!product) return null;

  return (
    <PreviewModal open={preview.isOpen} onClose={preview.onClose}>
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-4 lg:col-span-5">
          <Gallery images={product.images} />
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
            <Info data={product} />
        </div>
      </div>
    </PreviewModal>
  );
};

export default Preview;
