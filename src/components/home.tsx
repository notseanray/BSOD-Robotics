import React from "react";
import styles from "../styles/components.module.scss";

export function Home() {
    return (
        <div>
            <div className={styles.body}>
                <div className={styles.welcome}>
                    <div className={styles.column}>
                        <div className={styles.slogan}>
                            Blue Screen Of Death 1.0
                        </div>
                        <p>
                            We’re the Blue Screen of Death, a robotics club originating from North Cobb High School in Kennesaw, GA. 
                            Our club is currently made up of one FIRST Tech Challenge (FTC) team. Through hands-on experience, our 
                            members learn and develop skills in programming, engineering, leadership, and more.
                        </p>
                    </div>
                    <div className={styles.column}>
                            <img src="/team.jpg" alt="team photo"/>
                    </div>
                </div>
                <div className={styles.sectionGray}>
                    <div className={styles.graylineTop} />
					<div className={styles.sectionGrid}>
						<div className={styles.column}>
							<div className="bsodcyan bold textmedium">Est.</div>
							<div className="bsodblue light textsmall">Nov. 2020</div>
						</div>
						<div className={styles.column}>
							<div className="bsodcyan bold textmedium">20+</div>
							<div className="bsodblue light textsmall">Active Members</div>
						</div>
						<div className={styles.column}>
							<div className="bsodcyan bold textmedium">5</div>
							<div className="bsodblue light textsmall">Active Sponsorships</div>
						</div>
					</div>
					<div className={styles.graylineBottom}></div>
				</div>
            </div>
        </div>
    );
}