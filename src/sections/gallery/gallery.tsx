"use client";
import { galleryPhotos } from "@/data";
import { useCallback, useState } from "react";
import Gallery from "react-photo-gallery";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Image,
} from "@nextui-org/react";

const PhotoGallery = ({ t }: { t: any }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback(
    (event: any, { index }: { index: number }) => {
      setCurrentImage(index);
      setViewerIsOpen(true);
    },
    []
  );

  const closeLightbox = () => setViewerIsOpen(false);

  const nextImage = () =>
    setCurrentImage((prev) => (prev + 1) % galleryPhotos.length);
  const prevImage = () =>
    setCurrentImage(
      (prev) => (prev - 1 + galleryPhotos.length) % galleryPhotos.length
    );

  return (
    <section className="h-screen bg-jaris-blue flex flex-col items-center justify-center padding lg:px-36 xl:px-48 2xl:px-62">
      <h2 className="heading-secondary font-bold mb-2 text-jaris-yellow self-start">
        {t("gallery.title")}
      </h2>
      <p className="subtitle mb-6 lg:mb-12 text-center text-jaris-gold self-start">
        {t("gallery.subtitle")}
      </p>
      <div className="w-full max-w-6xl overflow-y-scroll h-[calc(100vh-220px)] px-4 scrollbar-custom">
        <Gallery photos={galleryPhotos} onClick={openLightbox} />
      </div>

      <Modal
        isOpen={viewerIsOpen}
        onClose={closeLightbox}
        size="5xl"
        classNames={{
          base: "bg-bg-primary",
        }}
      >
        <ModalContent>
          <ModalHeader>{t("gallery.gallery")}</ModalHeader>
          <ModalBody>
            <Image
              src={galleryPhotos[currentImage].src}
              alt="Gallery Image"
              width="100%"
              className="object-cover h-[70vh]"
            />
          </ModalBody>
          <ModalFooter>
            <Button
              className="bg-jaris-blue text-jaris-white"
              onClick={prevImage}
            >
              {t("gallery.prev")}
            </Button>
            <Button
              className="bg-jaris-blue text-jaris-white"
              onClick={nextImage}
            >
              {t("gallery.next")}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </section>
  );
};

export default PhotoGallery;
