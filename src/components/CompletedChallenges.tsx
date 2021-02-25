import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContexts';
import styles from '../styles/components/CompletedChallenges.module.css'

export function CompletedChallenges(){

    const { challengesCompleted } = useContext(ChallengesContext);

    return(
        <div className = {styles.completedChallengesContainer}>
            <span>Completede challenges </span>
            <span>{challengesCompleted}</span>
        </div>
    );
}