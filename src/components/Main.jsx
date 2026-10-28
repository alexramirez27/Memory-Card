import "../styles/Main.css";

export default function Main() { 
    return (
        <main>
            <div className="info-and-scores">
                <h3>Get points by clicking on an image but don't click any more than once!</h3>
                <div>
                    <h3>Score: 0</h3>
                    <h3>Best Score: 0</h3>
                </div>
            </div>
            <div className="card-container">
                <h3>Temporary text</h3>
            </div>
        </main>
    );
}