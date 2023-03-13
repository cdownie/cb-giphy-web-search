import GalleryImage from './GalleryImage'
import GalleryPager from './GalleryPager'

function Gallery(props){
    return(
        <div>
            <ul>
                {
                   props.images.map(function(i) { return <GalleryImage image={i}></GalleryImage>})
                }
            </ul>
            <GalleryPager images={props.images}></GalleryPager>
        </div>
    )
}

export default Gallery