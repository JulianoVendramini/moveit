import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContexts';
import styles from '../styles/components/Profile.module.css';



export function Profile(){

    const { level } = useContext(ChallengesContext);
    
    return(
        <div className = {styles.profileContainer}>
            <img src="https://github.com/JulianoVendramini.png" alt="Juliano Vendramini"/>
            <div>
                <strong>Juliano Vendramini</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}