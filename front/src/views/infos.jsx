import "../style/infos.scss"        // Importation du fichier infos.scss

export default function Infos() {       // Fonction qui permet d'afficher les informations du projet
    return (
        <div className="content-infos">
            <div className="title">
                <h2>Projet carteX</h2>
            </div>
            <div className="describe">
                <span>Dans le cadre de notre 2ème année de Prépa Bachelor, nous devons réaliser un marketplace de carte Yu-Gi-Oh!.
                    Dans celui ci, nous devions faire en sorte d'avoir un marketplace avec toutes les cartes disponibles dans notre
                    base de données. L'utilisateur doit également pouvoir créer, modifier ainsi que supprimer ses cartes. Il doit
                    également y avoir un système de filtre afin de simplifier les recherches et l'ergonomie du site web.
                </span>
            </div>
            <div className="team">
                <h2>Team</h2>
                <div className="item-team">
                    <div id="container-colab">
                        <div className="img">
                            <img src="https://avatars.githubusercontent.com/u/102389757?v=4" alt="" />
                        </div>
                        <div className="name">
                            <p>ROMERO Raphaël</p>
                            <p>Ecole IPSSI - Paris</p>
                            <p>BTC2 25.1</p>
                            <div>
                                <a href="https://github.com/RaphTPLR"><img src="https://img.icons8.com/?size=256&id=12599&format=png" alt="" /></a>
                                <a href="https://www.linkedin.com/in/romero-rapha%C3%ABl/"><img src="https://blog.waalaxy.com/wp-content/uploads/2021/01/linkedin-2.png" alt="" /></a>
                            </div>
                        </div>
                    </div>
                    <div id="container-colab">
                        <div className="img">
                            <img src="https://media.licdn.com/dms/image/D4E03AQGGU5FpFKOP9g/profile-displayphoto-shrink_400_400/0/1674459513000?e=1708560000&v=beta&t=jdBLjh9fINg0hfM18p7IyFan0LVkImaS25say1fxPeI" alt="" />
                        </div>
                        <div className="name">
                            <p>KORZENIOWSKI Rémi</p>
                            <p>Ecole IPSSI - Paris</p>
                            <p>BTC2 25.1</p>
                            <div>
                                <a href="https://github.com/Korzeremi"><img src="https://img.icons8.com/?size=256&id=12599&format=png" alt="" /></a>
                                <a href="https://www.linkedin.com/in/r%C3%A9mi-korzeniowski/"><img src="https://blog.waalaxy.com/wp-content/uploads/2021/01/linkedin-2.png" alt="" /></a>
                            </div>
                        </div>
                    </div>
                    <div id="container-colab">
                        <div className="img">
                            <img src="https://media.licdn.com/dms/image/D4E03AQGPPbwB2ayUMQ/profile-displayphoto-shrink_400_400/0/1676373860572?e=1708560000&v=beta&t=qsIfBY-RsE2bhI_jIvD6zVKeLXzXQYZnjeXITFWwDcY" alt="" />
                        </div>
                        <div className="name">
                            <p>DO Alexandre</p>
                            <p>Ecole IPSSI - Paris</p>
                            <p>BTC2 25.1</p>
                            <div>
                                <a href="https://github.com/Purplezer"><img src="https://img.icons8.com/?size=256&id=12599&format=png" alt="" /></a>
                                <a href="https://www.linkedin.com/in/alexandre-do-63b257253/"><img src="https://blog.waalaxy.com/wp-content/uploads/2021/01/linkedin-2.png" alt="" /></a>
                            </div>
                        </div>
                    </div>
                    <div id="container-colab">
                        <div className="img">
                            <img src="https://cdn.discordapp.com/attachments/1186238206912499782/1187382330403340358/pp.jpg?ex=6596aef8&is=658439f8&hm=d11858c2965138ce6469f2b689c274cf21d1e100af3115368add6835843b88fc&" alt="" />
                        </div>
                        <div className="name">
                            <p>MENANT--FERRY Théo</p>
                            <p>Ecole IPSSI - Paris</p>
                            <p>BTC2 25.1</p>
                            <div>
                                <a href="https://github.com/ttnmeoeayhrnefr"><img src="https://img.icons8.com/?size=256&id=12599&format=png" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}