import styles from "../styles/components.module.scss";
import 'react-slideshow-image/dist/styles.css'
import Footer from "./footer";


export function First() {
    return (<>
        <div className={styles.body}>
            <div className={styles.section}>
                <div className={styles.leadership}>
                    <div className={styles.medium}>What is FIRST?</div> 
                    <div className={styles.miniSpacer} />
                    <div className={styles.firstInfo}>
                        FIRST is one of the world's leading nonprofit STEM organizations. FIRST inspires youth and youth education by engaging them in mentor based programs such as FLL, FTC, and FRC, and build science, engineering, technology, and mathematics skills. 
                    </div>
                    <div className={styles.miniSpacer} />
                    <div className={styles.firstInfo}>
                        Around the world, 679 thousand students participated in the 2019-2020 season across 110 countries, being one of the biggest STEM education competitions in the world. 
                    </div> 
                    <div className={styles.miniSpacer} />
                    <div className={styles.firstInfo}>
                        Our goal for the 2021-2022 season is to be able to compete alongside fellow STEM competitors in the FTC competition. FTC stands for FIRST Tech Challenge, and includes students from grade 7 to 12.
                    </div>
                </div>
                <div className={styles.divider} />
                <div className={styles.leadership}>
                    <div className={styles.medium}>Why?</div> 
                    <div className={styles.miniSpacer} />
                    <div className={styles.firstInfo}>
                        The FTC competition is one of the places that we believe we can grow our skills and become better students and workers. There are many skills necessary to be able to build, program, and design robots in such a challenge, alongside providing adequate records of accomplishments and teamwork.
                    </div>
                    <div className={styles.miniSpacer} />
                    <div className={styles.firstInfo}>
                        Another reason why we have sought out this challenge is because North Cobb High School, the original home of BSOD Robotics, didn't have a robotics club yet. We want to show the world, and our community, that just because we started with nothing doesn't mean we ARE nothing. 
                    </div>
                    <div className={styles.miniSpacer} />
                    <div className={styles.firstInfo}>
                        Plus, accomplishing something in such a large competition like FTC is memorable, and will stick with us for a lifetime. Starting a robotics club from scratch, without school funding, is very difficult. However, we are here to give it a shot and go for it.
                    </div>
                </div>
                <div className={styles.divider} />
            </div>
            <div className={styles.spacer} />
            <Footer />
        </div>
    </>);
}