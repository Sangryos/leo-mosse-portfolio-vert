import {ReactNode, Fragment} from "react";


export default function Page(): ReactNode {
    return (
        <Fragment>
            <div className={"text-center flex flex-col justify-center flex-wrap"}>
                <h2 className={"text-4xl"}>Technologies pratiquées en entreprise</h2>

                <div className={"text-center mt-11 flex justify-center gap-2 flex-wrap"}>
                    <div className={"flex flex-col items-center justify-center bg-green-200 p-2 rounded-2xl"}>
                        <img src={"/php.png"} alt={"icon php"} className={"techno-img"}/>
                        <div>PHP</div>
                        <div className={"flex flex-row justify-center"}>
                            <span className={"star-icon star-icon__light"}/>
                            <span className={"star-icon star-icon__light"}/>
                            <span className={"star-icon star-icon__light"}/>
                            <span className={"star-icon star-icon__light"}/>
                            <span className={"star-icon star-icon__dark"}/>
                        </div>
                    </div>

                    <div className={"flex flex-col items-center justify-center bg-green-200 p-2 rounded-2xl"}>
                        <img src={"/git.png"} alt={"icon php"} className={"techno-img"}/>
                        <div>Git</div>
                        <div className={"flex flex-row justify-center"}>
                            <span className={"star-icon star-icon__light"}/>
                            <span className={"star-icon star-icon__light"}/>
                            <span className={"star-icon star-icon__light"}/>
                            <span className={"star-icon star-icon__light"}/>
                            <span className={"star-icon star-icon__dark"}/>
                        </div>
                    </div>

                    <div className={"flex flex-col items-center justify-center bg-green-200 p-2 rounded-2xl"}>
                        <img src={"/symfony.png"} alt={"icon php"} className={"techno-img"}/>
                        <div>Symfony</div>
                        <div className={"flex flex-row justify-center"}>
                            <span className={"star-icon star-icon__light"}/>
                            <span className={"star-icon star-icon__light"}/>
                            <span className={"star-icon star-icon__light"}/>
                            <span className={"star-icon star-icon__light"}/>
                            <span className={"star-icon star-icon__dark"}/>
                        </div>
                    </div>

                    <div className={"flex flex-col items-center justify-center bg-green-200 p-2 rounded-2xl"}>
                        <img src={"/html.png"} alt={"icon php"} className={"techno-img"}/>
                        <div>HTML</div>
                        <div className={"flex flex-row justify-center"}>
                            <span className={"star-icon star-icon__light"}/>
                            <span className={"star-icon star-icon__light"}/>
                            <span className={"star-icon star-icon__light"}/>
                            <span className={"star-icon star-icon__dark"}/>
                            <span className={"star-icon star-icon__dark"}/>
                        </div>
                    </div>

                    <div className={"flex flex-col items-center justify-center bg-green-200 p-2 rounded-2xl"}>
                        <img src={"/css.svg"} alt={"icon php"} className={"techno-img"}/>
                        <div>CSS</div>
                        <div className={"flex flex-row justify-center"}>
                            <span className={"star-icon star-icon__light"}/>
                            <span className={"star-icon star-icon__light"}/>
                            <span className={"star-icon star-icon__light"}/>
                            <span className={"star-icon star-icon__dark"}/>
                            <span className={"star-icon star-icon__dark"}/>
                        </div>
                    </div>

                    <div className={"flex flex-col items-center justify-center bg-green-200 p-2 rounded-2xl"}>
                        <img src={"/docker.png"} alt={"icon php"} className={"techno-img"}/>
                        <div>Docker</div>
                        <div className={"flex flex-row justify-center"}>
                            <span className={"star-icon star-icon__light"}/>
                            <span className={"star-icon star-icon__light"}/>
                            <span className={"star-icon star-icon__dark"}/>
                            <span className={"star-icon star-icon__dark"}/>
                            <span className={"star-icon star-icon__dark"}/>
                        </div>
                    </div>
                </div>

                <div>
                    <p>
                        Je trouve important de séparer les technologies pratiquées en entreprise et les autres technologies vues en cours car le niveau que j'ai pu acquérir est bien plus grand en entreprise
                    </p>
                </div>
                <h2 className={"text-4xl mt-11"}>Technologies vues en cours</h2>
                <div className={"text-center mt-11 flex justify-center gap-2 flex-wrap"}>

                    <div className={"flex flex-col items-center justify-center bg-green-200 p-2 rounded-2xl"}>
                        <img src={"/laravel.png"} alt={"icon php"} className={"techno-img"}/>
                        <div>Laravel</div>
                    </div>

                    <div className={"flex flex-col items-center justify-center bg-green-200 p-2 rounded-2xl"}>
                        <img src={"/postgresql.png"} alt={"icon php"} className={"techno-img"}/>
                        <div>Postgresql</div>
                    </div>

                    <div className={"flex flex-col items-center justify-center bg-green-200 p-2 rounded-2xl"}>
                        <img src={"/javascript.png"} alt={"icon php"} className={"techno-img"}/>
                        <div>Javascript</div>
                    </div>

                    <div className={"flex flex-col items-center justify-center bg-green-200 p-2 rounded-2xl"}>
                        <img src={"/react.png"} alt={"icon php"} className={"techno-img"}/>
                        <div>React</div>
                    </div>

                    <div className={"flex flex-col items-center justify-center bg-green-200 p-2 rounded-2xl"}>
                        <img src={"/angular.png"} alt={"icon php"} className={"techno-img"}/>
                        <div>Angular</div>
                    </div>

                    <div className={"flex flex-col items-center justify-center bg-green-200 p-2 rounded-2xl"}>
                        <img src={"/python.png"} alt={"icon php"} className={"techno-img"}/>
                        <div>Python</div>
                    </div>

                    <div className={"flex flex-col items-center justify-center bg-green-200 p-2 rounded-2xl"}>
                        <img src={"/flask.png"} alt={"icon php"} className={"techno-img"}/>
                        <div>Flask</div>
                    </div>

                    <div className={"flex flex-col items-center justify-center bg-green-200 p-2 rounded-2xl"}>
                        <img src={"/java.png"} alt={"icon php"} className={"techno-img"}/>
                        <div>Java</div>
                    </div>
                </div>
                <h2 className={"text-4xl mt-11 mb-11"}>Description des derniers projets que j'ai pu réaliser</h2>
                <div>
                    <p className={"bg-green-200 mb-5 p-2 rounded-2xl"}>
                        En entreprise, j'ai pu travailler sur la mise en place d'un projet de A à Z :
                        Ping-pong Manager (PPM) est le premier projet sur lequel j’ai travaillé chez Wid'op, accompagné
                        d’un autre alternant. Ce projet se base sur une problématique: Après un match de
                        ping-pong réalisé dans l’équipe, le score, les joueurs et la date du match sont entrés dans une
                        feuille Excel et des statistiques sont réalisées grâce à ces données. Cependant, rentrer des match
                        dans Excel n’est pas très facile sur téléphone: le projet a pour but de rendre la saisie d’un
                        match simple et amusante! La partie back-end sera gérée avec le framework Symfony, les controllers
                        Stimulus du bundle Symfony UX, et contiens une base de donnée PostgreSQL. La partie front-end sera
                        gérée par le moteur de templating Twig, en utilisant le framework CSS Bootstrap. Ce projet m’a
                        permis d’appliquer mes connaissances en réalisation de projet en groupe, me faire découvrir et
                        apprendre les bases du framework Symfony, et m’apprendre à faire et à apprécier le front-end.
                        J’ai aussi pu utiliser les principes agiles (Daily, weekly) pour conduire à bien ce projet.
                        J’ai également beaucoup progressé en git.
                    </p>
                </div>
                <div>
                    <p className={"bg-green-200 p-2 rounded-2xl"}>
                        Sur mon temps libre, j'ai pu travailler sur la mise en place d'un autre projet de A à Z, pour la famille d'un ami.
                        L'application sera utilisée par une seule personne. Cette personne réalise des interventions électriques ou gaz sur chantiers.
                        Après une intervention, il doit rendre un bon d'intervention au client.
                        Ce bon d'intervention est toujours composé des même sections remplies différemment.
                        J'ai donc réalisé une application web en php Symfony, et j'ai créé deux formulaires qui,
                        une fois soumis génèrent un fichier PDF disponible au téléchargement. Une des difficultés rencontrées était la signature :
                        en effet, le client doit signer le bon d'intervention, et cette signature doit apparaître sur le PDF final.
                    </p>
                </div>
            </div>
    </Fragment>
    )
}