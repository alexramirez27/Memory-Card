import "../styles/Main.css";

export default function Main() { 
    return (
        <main>
            <div className="info-and-scores">
                <h3>Get points by clicking on an image but don't click any more than once!</h3>
                <div className="scores">
                    <h3>Score: 0</h3>
                    <h3>Best Score: 0</h3>
                </div>
            </div>
            <div className="main-content">
                <div className="card-container">
                    <div className="card" data-card-index="0"></div>
                    <div className="card" data-card-index="1"></div>
                    <div className="card" data-card-index="2"></div>
                    <div className="card" data-card-index="3"></div>
                    <div className="card" data-card-index="4"></div>
                    <div className="card" data-card-index="5"></div>
                    <div className="card" data-card-index="6"></div>
                    <div className="card" data-card-index="7"></div>
                    <div className="card" data-card-index="8"></div>
                    <div className="card" data-card-index="9"></div>
                    <div className="card" data-card-index="10"></div>
                    <div className="card" data-card-index="11"></div>
                    <div className="card" data-card-index="12"></div>
                    <div className="card" data-card-index="13"></div>
                    <div className="card" data-card-index="14"></div>
                    <div className="card" data-card-index="15"></div>
                    <div className="card" data-card-index="16"></div>
                    <div className="card" data-card-index="17"></div>
                    <div className="card" data-card-index="18"></div>
                    <div className="card" data-card-index="19"></div>
                </div>
            </div>
        </main>
    );
}