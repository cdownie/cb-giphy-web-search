import './GalleryImage.css';

function GalleryImage(props){
    return (
        <li>
            <span className='img_desc'>DESCRIPTION</span>
            <img alt='cat_probally' src={props.image}></img>
        </li>
    )

}

export default GalleryImage