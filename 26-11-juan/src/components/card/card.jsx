export default function Card(props) {
    return (
        <div className="container">
            <div className="card_container">
                <div className="card_top">
                    <span>⚡</span> <button>❌</button>
                </div>
                <div className="card_body">
                    <p>{props.description}</p>
                    <button>Apply Now ➡️</button>
                </div>
            </div>
        </div>
    )
}

