import "./card.css";

function card({title, img, desc}) {
    return (
        <div className="card">
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>
    )
}

export default card;