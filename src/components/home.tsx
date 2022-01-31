import styles from "../styles/components.module.scss";
import Slideshow from "./slideshow";
import 'react-slideshow-image/dist/styles.css'
import Footer from "./footer";


export function Home() {
    return (
        <div>
            <div className={styles.body}>
                <div className={styles.welcome}>
                    <div className={styles.column}>
                        <div className={styles.slogan}>
                            Blue Screen Of Death 1.0
                        </div>
                        <div className={styles.info}>
                            We’re the Blue Screen of Death, a robotics club originating from North Cobb High School in Kennesaw, GA. 
                            Our club is currently made up of one FIRST Tech Challenge (FTC) team. Through hands-on experience, our 
                            members learn and develop skills in programming, engineering, leadership, and more.
                        </div>
                    </div>
                    <div className={styles.column}>
                        <img src="./team.jpg" alt="team members"/>
                    </div>
                </div>
                <div className={styles.spacer} />
                <div className={styles.noOverFlow}>
                    <div className={styles.sectionGray}>
                        <div className={styles.sectionGrid}>
                            <div className={styles.column_media}>
                                <div className={styles.stats}>Est.</div>
                                <div className={styles.info}>Nov. 2020</div>
                            </div>
                            <div className={styles.column_media}>
                                <div className={styles.stats}>20+</div>
                                <div className={styles.info}>Active Members</div>
                            </div>
                            <div className={styles.column_media}>
                                <div className={styles.stats}>5</div>
                                <div className={styles.info}>Active Sponsorships</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.spacer} />
                <div className={styles.slideshow}> 
                        <Slideshow /> 
                </div>
                <div className={styles.spacer} />
                <Footer />
                <div className={styles.spacer} />
            </div>
        </div>
    );
}