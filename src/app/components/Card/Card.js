import './Card.css';


const Card = ({ data }) => {

    const imgSrc = process.env.NEXT_PUBLIC_IMG_BASE_URL + '/' + data.image;

    return (
        <div className="school-card">
            <div className='school-image'>
                <img src={imgSrc} alt={data.name} />
            </div>
            <div className='school-detail'>
                <h3>{data.name}</h3>
                <div>
                    <p>{data.address}</p>
                    <p>{data.city}</p>
                </div>
                <a href={`tel:${data.contact}`}>Contact School</a>
            </div>
        </div>
    );
}
export default Card;