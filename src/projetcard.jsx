import github from '/assets/github.png';
function ProjetCard({ title, description,technologies, link }) {
    return (
        <div className="projet-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <p className="technologies">
                <strong>Technologies:</strong> {technologies.join(", ")}
            </p>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={github}alt="GitHub" />Voir le projet
            </a>
        </div>
    );
}
export default ProjetCard;