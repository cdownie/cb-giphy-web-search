import GalleryImage from './GalleryImage'

function Gallery(){
    const images = ["one", "two", "three"];

    return(
        <div>
            <ul>
                {
                    images.map(function(i) { return <GalleryImage></GalleryImage>})
                }
            </ul>
        </div>
    )
}

export default Gallery