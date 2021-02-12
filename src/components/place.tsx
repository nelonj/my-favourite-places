import '../App.css';


interface PlaceElements {
   title: string;
   place: string;
   country: string;
   image: string;
//    image_description: string;
   location: string;
   bio: string;
}

function Place({title, place, country, image, /*image_description, */ location, bio}: PlaceElements) {
    return (
        <div className="App-body-place">
            <div className="App-body-place-image">
                <img src={image} /> </div>   
            <div className="App-body-place-text">
            <h2> {title} </h2>
            <h3> {place}, {country} ( <a href = {location}> map link </a>) </h3>
            <p> {bio} </p>
            </div>
            <hr/>
        </div>
    )
}

/* alt={image_description} */ 

export default Place;