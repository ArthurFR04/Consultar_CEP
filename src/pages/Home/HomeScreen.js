import React from 'react';
import SearchCEP from '../../features/SearchCEP/SearchCEP';

import styles from './HomeStyle.module.css';

const HomeScreen = () => {
    return (
        <div className={styles.Home}>
            <header>
                <h1>Consultar CEP</h1>
            </header>

            <div className={styles.container}>
                <SearchCEP />
            </div>
        </div>

    )
}

export default HomeScreen;