import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContexts';

import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox(){

    const { activeChallenge, resetChallenge } = useContext(ChallengesContext);

    return (
        <div className = {styles.challengeBoxContainer}>
            { activeChallenge ? (
                <div className = {styles.challengeActive}>
                    <header>Win {activeChallenge.amount}</header>

                    <main>
                       <img src={`icons/${activeChallenge.type}.svg`}/> 
                       <strong>New Challenge</strong>
                       <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button 
                        type = "button"
                        className = {styles.challengeFailedButton}
                        onClick={resetChallenge}
                        >
                            Failed
                        </button>
                        <button 
                        type = "button"
                        className = {styles.challengeSucceededButton}
                        >
                            Completed
                        </button>
                    </footer>
                </div>
            ) : (
                <div className = {styles.challengeNotActive}>
                <strong>Finish a cycle to receive a new challenge</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level Up"/>
                    Complete the challenges to level up
                </p>
            </div>
            )}
        </div>
    );
}