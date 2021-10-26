import "./about.css"

export const About = () => {
    return (
        <div id="about">
            <div className="faint-heading">&lt; About /&gt;</div>
            <div className="about">
                <div className="about-info">
                    <p style={{ padding: "0.5rem" }}>
                        Hello! I'm <span className="hey" >Kunal TIjare</span><br />
                        A Full Stack JavaScript Developer with an eye for UI-UX, I’ve experience in building end-to-end web-apps across MERN stack.
                        <br />
                        I love travelling & especially the road trips in monsoon with some good music to listen, i also love playing racing games and finding answers to weird questions.
                    </p>
                </div>
                <div className="hero-img-container">
                    <img className="about-img" width="100%" height="auto" src="Images/workingCharacter.png" alt="hero" />
                </div>
            </div>
        </div>
    )
}