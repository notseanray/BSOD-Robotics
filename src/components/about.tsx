import styles from "../styles/components.module.scss";
import 'react-slideshow-image/dist/styles.css'
import Footer from "./footer";


export function About() {
    return (<>
        <div className={styles.body}>
            <div className={styles.section}>
                <div className={styles.leadership}>
                    <div className={styles.medium}>About BSOD Leadership</div> 
                    <div className={styles.small}>
                        BSOD Leadership functions in a simple yet effective way:
                        </div>
                    <div className={styles.small}>
                        1. Overall work will be organized and pieced together by President and Co-Presidents. Items or individual functions will be given to Team Leads to identify and work at, and therefore complete. 
                    </div>
                    <div className={styles.small}>    
                    2. Team Leads then individually work together with their team members to complete a task, whether it be designing and creating a part or working on outreach and development. 
                    </div>
                    <div className={styles.small}>   
                        Overview: The basis of how this club works is that Leadership will take care of the overall pieces, and the Team Leads work with the individual fibers to braid together. Team Leads are given the freedom to decide how and where there want to divide work into their teams.
                    </div>
                </div>
                <div className={styles.divider} />
                <div className={styles.leadership}>
                    <div className={styles.medium}>Club Members</div> 
                    <div className={styles.small}>Leona, Kate, Tristin, Daniel, Kyla, Dev, Jack, Claire, Amsha, Umar, Divyen, Simran, Jakson, Nathaniel, Kahlo, Sean, Ian</div>
                </div>
                <div className={styles.divider} />
            </div>
            <div className={styles.spacer} />
            <Footer />
        </div>
    </>);
}