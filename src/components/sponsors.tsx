import styles from "../styles/components.module.scss";
import 'react-slideshow-image/dist/styles.css'
import { Link } from "react-router-dom";


export function Sponsors() {
    return (<>
        <div className={styles.body}>
            <div className={styles.section}>
                <div className={styles.leadership}>
                    <div className={styles.medium}>Active Sponsors</div> 
                    <div className={styles.miniSpacer} />
                </div>
                <div className={styles.divider} />
            </div>
			<div className={styles.miniSpacer} />
			<div className={styles.sponsorList}>
				<img src="/sponsors/first.png" alt="first" />
				<img src="/sponsors/lockheed.png" alt="lockheed" />
				<img src="/sponsors/nchs.png" alt="nchs" />
				<img src="/sponsors/ULS.png" alt="ULS" />
				<img src="/sponsors/bofa.png" alt="bofa" />
			</div>
			<div className={styles.spacer} />
            <div className={styles.supportLink}>
                Please visit the<Link to="/support" style={Object.assign({}, {marginRight: '5px'}, {marginLeft: '5px'})}>support page</Link>for more information on sponserships.
            </div>
            <div className={styles.spacer} />
        </div>
    </>);
}
