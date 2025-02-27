
import PhotoGallery from "../../components/PhotoGallery";
const PhotosPage = () => {
  return (
    <div className="container mx-auto p-4 mt-24">
      <PhotoGallery query="film shooting" />
    </div>
  );
};

export default PhotosPage;
