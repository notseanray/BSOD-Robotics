import styles from "../styles/components.module.scss";
import 'react-slideshow-image/dist/styles.css'
import { ExternalLink } from 'react-external-link';
import Footer from "./footer";


export function Support() {
    return (<>
        <div className={styles.body}>
            <div className={styles.section}>
                <div className={styles.leadership}>
                    <div className={styles.medium}>Sponsorship Levels</div> 
                    <div className={styles.miniSpacer} />
                </div>
                <div className={styles.divider} />
            </div>
			<div className={styles.miniSpacer} />
			<table>
				<tr>
					<th> Level </th>
				</tr>
				<tr>
					<td>1</td>
					<td>$1-$249</td>
				</tr>
				<tr>
					<td>2</td>
					<td>$250-$499</td>
				</tr>
				<tr>
					<td>3</td>
					<td>$500-$999</td>
				</tr>
				<tr>
					<td>4</td>
					<td>$1000-$1999</td>
				</tr>
				<tr>
					<td>5</td>
					<td>$2000+</td>
				</tr>
			</table>
			<div className={styles.miniSpacer} />
		    <div className={styles.supportLink}>
            	If you would like to support us, you can reach us at <ExternalLink href="malito: bsodrobotics@gmail.com" style={{marginLeft: '10px'}}>bsodrobotics@gmail.com</ExternalLink>.
            </div>	
            <div className={styles.spacer} />
			<Footer />
        </div>
    </>);
}
