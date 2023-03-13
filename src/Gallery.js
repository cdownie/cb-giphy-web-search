import GalleryImage from './GalleryImage'
import GalleryPager from './GalleryPager'

function Gallery(){
    const images = ["one", "two", "three"];

    return(
        <div>
            <ul>
                {
                    images.map(function(i) { return <GalleryImage></GalleryImage>})
                }
            </ul>
            <GalleryPager></GalleryPager>
        </div>
    )
}

export default Gallery