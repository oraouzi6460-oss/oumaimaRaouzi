import { useEffect,useState } from "react";
import $ from "jquery";
import ProjetCard from "./projetcard.jsx";
import "./projetcard.css";
import profile from '/assets/prof.png';
function App() {
  
  const skills = [
    { name: "HTML", level: 80 },
    { name: "CSS", level: 70 },
    { name: "JavaScript", level: 60 }
  ];
  
  useEffect(() => {
    const handler = function () {
      $(this).next(".content").slideToggle(500);
      $("#form .content").not($(this).next()).slideUp(500);
    };
    setTimeout(() => {
      $("#form ul li h3").on("click", handler);
    }, 0);
    return () => {
      $("#form ul li h3").off("click", handler);
    };
  }, []);
  
  const [errors, setErrors] = useState([]);
  const validateForm = () => {
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const message=document.getElementById("message").value;
    let isvalide=true;
    if(name.trim()===''){
      setErrors(prevState=>[...prevState,"Le champ nom est requis"]);
      isvalide=false;
    }
    if(email.trim()===''){
      setErrors(prevState=>[...prevState,"Le champ email est requis"]);
      isvalide=false;
    } else if(!email.match(/^\S+@\S+\.\S+$/)) {
      setErrors(prevState=>[...prevState,"email format invalide"]);
      isvalide=false;
    }
    if(message.trim()===''){
      setErrors(prevState=>[...prevState,"Le champ message est requis"]);
      isvalide=false;
    }
    return isvalide;
  };
  const submitForm=(e)=>{
    setErrors([]);
    if(!validateForm()){
      e.preventDefault();
    }
  }

  const projects = [
  {
    title: "Site CV interactif",
    description: "Création d’un CV web avec animations jQuery et React.",
    tech: ["HTML", "CSS", "React", "jQuery"],
    link: "https://github.com/ton-github/cv-project"
  },
  {
    title: "Site web de tourisme",
    description: "Création d’un site web de tourisme avec design responsive et fonctionnalités interactives.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://onaim3341-cpu.github.io/Decouvert_Maroc/?fbclid=PARlRTSARjZEZleHRuA2FlbQIxMABzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAafRAqcCBZYyWAfxv8_Rm62f6bRmqQsMfojWordkbphnHApm-dKIS62JN2OVDw_aem_De3Qr-tnPajZYbnB67L0eQ"
  }
  ];

  return (
    <>
    <header>
      <nav>
        <a href="#acc">acceuil</a>
        <a href="#propo">à propos</a>
        <a href="#comp">Compétences</a>
        <a href="#form">Formation</a>
        <a href="#exp">Expériences & Projets</a>
        <a href="#contact">contact</a>
      </nav>  
    </header>
    <div id="acc">
        <img src={profile} alt="photoprofil" />
        <h1>Oumaima Raouzi</h1>
        <p>Étudiante à la faculté des sciences Semlalia, filière informatique</p>
      
        <a href="mailto:oumaima.raouzi2006@gmail.com" >oumaima.raouzi2006@gmail.com</a>
        <a href="https://github.com/oraouzi6460-oss">GitHub</a>
        <a href="https://www.linkedin.com/in/oumaima-raouzi-8650a53bb/">LinkedIn</a>
      </div>
    <main>
      <div id="propo">
        <h2 className="titre">À propos</h2>
        <div className="ligne"></div>
        <p>Étudiante en informatique à la Faculté des Sciences Semlalia, je m’intéresse au développement web et aux nouvelles technologies. 
          Curieuse et motivée, j’ai réalisé plusieurs projets académiques qui ont renforcé mes compétences et mon autonomie. 
          Mon objectif est de devenir une développeuse compétente et de contribuer à des projets innovants.
        </p>
      </div>

      <div id="comp">
        <h2 className="titre">Compétences</h2>
        <div className="ligne"></div>
           
          {skills.map((skill, index) => (
            <div className="skill" key={index}>
              <p>{skill.name}</p>

              <div className="bar">
                <div
                  className="fill"
                  style={{ width: skill.level + "%" }}
                ></div>
              </div>
            </div>
          ))}
            
      </div>
      
      <div id="form">
        <h2 className="titre">Formation</h2>
        <div className="ligne"></div>
        
        <ul className="formation">
          
          <li>
            <h3>Baccalauréat (2023-2024)</h3>
            <div className="content">
              Lycée Hassan II - Sciences Mathématiques
            </div>
          </li>
          
          <li>
            <h3>License Informatique-L1 (2024-2025)</h3>
            <div className="content">
              Faculté des Sciences Semlalia - L1
            </div>
          </li>
          
          <li>
            <h3>License Informatique-L2 (2025-2026)</h3>
            <div className="content">
              Faculté des Sciences Semlalia - L2
            </div>
          </li>
        </ul>
      </div>

      <div id="exp">
        <h2 className="titre">Expériences & Projets</h2>
        <div className="ligne"></div>
        
        <div className="monprojet">
          {projects.map((project, index) => (
            <ProjetCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.tech}
              link={project.link}
            />
          ))}
        </div>
      </div>

      <div id="contact">
        <h2 className="titre">Contact</h2>
        <div className="ligne"></div>
          
         <form className="formulaire" onSubmit={submitForm}>
          <label>Nom:</label>
          <input type="text" id="name" placeholder="Votre nom" />
          <br />
          <label>Email:</label>
          <input type="email" id="email" placeholder="Votre email" />
          <br />
          <label>Message:</label>
          <textarea id="message" placeholder="Votre message"></textarea>
          <br />
          <button type="submit" className="btnEnvoyer">Envoyer</button>
        </form>
         <div className="succer">
            {errors.length > 0 && (
              <div className="alert">
                {errors.map((error, index) => (
                  <p key={index}>⚠ {error}</p>
                ))}
              </div>
            )}
          </div>
      </div>

    </main> 
  </>
  );
}

export default App;

