import GalleryImage from './GalleryImage'
import GalleryPager from './GalleryPager'

function Gallery(props){
    return(
        <div>
            <ul>
                {
                   props.images.map(function(i) { return <GalleryImage></GalleryImage>})
                }
            </ul>
            <GalleryPager></GalleryPager>
        </div>
    )
}

export default Gallery