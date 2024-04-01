import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom'; 

const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <div>
                    <Navbar />

                    <div id="home" className={styles.containerImage}>
                        <img src="/img-caleidoscópio.png" alt="Caleidoscópio de Sailor Moon" />
                        <img className={styles.imgLogotipoSailorMoon} src="/logotipo-sailormoon.png" alt="Logotipo Sailor Moon" />

                        <main className={styles.sectionHome}>
                            <p>Bem-vindo (a) à nossa landing page dedicada ao icônico anime Sailor Moon!

                                Prepare-se para mergulhar em um universo repleto de magia, aventura e amizade. Nossa página inicial é o portal para tudo relacionado a Sailor Moon, onde fãs como você podem encontrar uma variedade de conteúdos cativantes e emocionantes.

                                Explore nossas seções dedicadas aos personagens, onde você pode descobrir mais sobre Sailor Moon, Sailor Mercury, Sailor Mars e todos os outros guerreiros que protegem o mundo da Lua. Navegue pelos episódios e reviva momentos inesquecíveis da série, ou mergulhe em nossa galeria de imagens para admirar belas artes oficiais e fan art inspiradora.

                                Além disso, junte-se à nossa comunidade vibrante de fãs em nosso fórum, onde você pode compartilhar sua paixão pelo anime, discutir teorias, fazer novos amigos e se conectar com outros que compartilham seu amor por Sailor Moon.

                                Então, prepare-se para uma jornada emocionante através do Reino da Lua enquanto celebramos juntos a magia eterna de Sailor Moon!</p>
                        </main>

                        <main className={styles.sectionSobre}>
                            <h1 id="sobre" className={styles.tituloSobre}>Sobre o anime</h1>
                        
                            <p>"Sailor Moon" é um anime icônico que marcou gerações e conquistou milhões de fãs ao redor do mundo desde sua estreia em 1992. Criado por Naoko Takeuchi, o anime conta a história de Usagi Tsukino, uma garota comum que descobre que é a reencarnação de uma poderosa guerreira lunar destinada a proteger a Terra.

                            Ao longo da série, Usagi, também conhecida como Sailor Moon, se une a outras Sailor Scouts - Sailor Mercury, Sailor Mars, Sailor Jupiter e Sailor Venus - para lutar contra forças do mal que ameaçam o planeta. Juntas, elas enfrentam vilões poderosos, desvendam mistérios e defendem a justiça, o amor e a amizade.

                            Além das emocionantes batalhas contra o mal, "Sailor Moon" também aborda temas como amizade, romance, autoconfiança e a jornada para descobrir o verdadeiro poder interior. Com personagens cativantes, uma trilha sonora memorável e uma narrativa envolvente, o anime se tornou um fenômeno cultural que transcendeu gerações.

                            Com sua mensagem inspiradora de esperança e determinação, "Sailor Moon" continua a encantar e inspirar fãs de todas as idades, mantendo seu lugar como um dos animes mais amados e influentes de todos os tempos.</p>
                        </main>

                        <main>
                            <h1 id="personagens" className={styles.tituloPersonagens}>Personagens</h1>
                            <div className={styles.containerPersonagens}>
                                <section>
                                    <img src="/usagi.png" alt="Usagi Tsukino (Sailor Moon)" />
                                    <p>Usagi Tsukino (Sailor Moon)</p>
                                </section>

                                <section>
                                    <img src="/ami.png" alt="Ami Mizuno (Sailor Mercury)" />
                                    <p>Ami Mizuno (Sailor Mercury)</p>
                                </section>

                                <section>
                                    <img src="/rei hino.png" alt="Rei Hino (Sailor Mars)" />
                                    <p>Rei Hino (Sailor Mars)</p>
                                </section>

                                <section>
                                    <img src="/sailor jupiter.png" alt="Makoto Kino (Sailor Jupiter)" />
                                    <p>Makoto Kino (Sailor Jupiter)</p>
                                </section>

                                <section>
                                    <img src="minako.png" alt="Minako Aino (Sailor Venus)" />
                                    <p>Minako Aino (Sailor Venus)</p>
                                </section>

                                <section>
                                <img src="/tuxedo mask.png" alt="Mamoru Chiba (Tuxedo Mask / Príncipe Endymion)" />
                                    <p>Mamoru Chiba (Tuxedo Mask / Príncipe Endymion)</p>
                                </section>

                                <section>
                                    <img src="/chibiusa.png" alt="Chibiusa Tsukino (Sailor Chibi Moon)" />
                                    <p>Chibiusa Tsukino (Sailor Chibi Moon)</p>
                                </section>

                                <section>
                                    <img src="/setsuna.png" alt="Setsuna Meiou (Sailor Pluto)" />
                                    <p>Setsuna Meiou (Sailor Pluto)</p>
                                </section>

                                <section>
                                    <img src="/sailor netuno.png" alt="Michiru Kaioh (Sailor Neptune)" />
                                    <p>Michiru Kaioh (Sailor Neptune)</p>
                                </section>

                                <section>
                                    <img src="sailor urano.png" alt="Haruka Tenoh (Sailor Uranus)" />
                                    <p>Haruka Tenoh (Sailor Uranus)</p>
                                </section>

                                <section>
                                    <img src="/hotaru.png" alt="" />
                                    <p>Hotaru Tomoe (Sailor Saturn)</p>
                                </section>

                                <section>
                                    <img src="/luna e artemis.png" alt="Luna e Artemis (Gatos conselheiros e mentores)" />
                                    <p>Luna e Artemis (Gatos conselheiros e mentores)</p>
                                </section>

                                <section>
                                    <img src="/queen serenity.png" alt="Queen Serenity (Rainha da Lua)" />
                                    <p>Queen Serenity (Rainha da Lua)</p>
                                </section>

                                <section>
                                    <img src="/queen berly.png" alt="Queen Beryl (Rainha do Reino Negro)" />
                                    <p>Queen Beryl (Rainha do Reino Negro)</p>
                                </section>
                            </div>
                        </main>
                        <Footer />
                    </div>
                </div>
            )}
        </>
    );  
}

export default Home;