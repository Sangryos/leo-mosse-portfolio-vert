import {Fragment} from "react";

export default function Home() {
  return (
      <Fragment>
          <div className="text-center mt-11 flex flex-col items-center md:flex-row gap-1 bg-green-200 p-2 rounded-2xl">
            <img src={'/moi.jpg'} alt={'Photo de moi'} className={"rounded-2xl img-moi"}/>
            <div className={"text-2xl flex flex-col justify-center"}>
                <p className={"border-b-2 border-green-600"}>Bienvenue sur mon e-CV !</p>
                <p>Je suis Mosse Léo, un développeur Web spécialisé en PHP Symfony.</p>
                <p>Fort de mes compétences en SQL, Python, JavaScript et Docker je m'efforce de créer des solutions web innovantes et performantes.</p>
                <p>Passionné par le développement et constamment en quête de perfectionnement, je suis prêt à relever de nouveaux défis pour contribuer au succès de projets passionnants.</p>
            </div>
          </div>

          <div className="text-center mt-11 gap-1 bg-green-200 p-2 rounded-2xl">
              <div className={"text-2xl flex flex-col justify-center"}>
                  <p>Email : leo.thierry.mosse@gmail.com</p>
                  <p>Linkedin: <a href={"https://www.linkedin.com/in/leo-mosse/"} target={"_blank"}>https://www.linkedin.com/in/leo-mosse/</a></p>
                  <p>Téléphone: [Imaginez que j'ai mit mon téléphone]</p>
              </div>
          </div>
      </Fragment>
  )
}
