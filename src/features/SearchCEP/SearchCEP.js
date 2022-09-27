import React from 'react';
// { useState }

import { 
    // useSelector, 
    useDispatch } from 'react-redux';

import {
    selectValue , saveStateCEP
} from './searchcepSlice';


import styles from './SearchCEP.module.css';

// import { fetchCEP } from './searchcepAPI'
import { getCEP } from './searchcepSlice'

let SearchCEP = () => {
    // const count = useSelector(selectCount);
    const dispatch = useDispatch();
    // const [incrementAmount, setIncrementAmount] = useState('2');

    // const incrementValue = Number(incrementAmount) || 0;

    return (
        <div className= {styles.SearchCEP}>
            <div className={styles.coleta}>

                <input id='inpColeta' placeholder='Insira o CEP'/>

                <span className={styles.btns}>
                    <button 
                        className={styles.btnClear}
                        onClick={() => document.getElementById('inpColeta').value = '' } 
                    >
                        Limpar
                    </button>

                    <button 
                        className={styles.btnConfirm}
                        onClick={ () => dispatch( getCEP( document.getElementById('inpColeta').value ) ) }
                    > 
                        Consultar 
                    </button>
                </span>
            </div>

            <div className={styles.consulta}>
                <input type="text" placeholder='CEP'        readOnly />
                <input type="text"   placeholder='Estado'     readOnly />
                <input type="text"   placeholder='Cidade'     readOnly />
                <input type="text"   placeholder='Logradouro' readOnly className={styles.logradouro} />
            </div>
        </div>

        // <div>
        //   <div className={styles.row}>
        //     <button
        //       className={styles.button}
        //       aria-label="Decrement value"
        //       onClick={() => dispatch(decrement())}
        //     >
        //       -
        //     </button>
        //     <span className={styles.value}>{count}</span>
        //     <button
        //       className={styles.button}
        //       aria-label="Increment value"
        //       onClick={() => dispatch(increment())}
        //     >
        //       +
        //     </button>
        //   </div>
        //   <div className={styles.row}>
        //     <input
        //       className={styles.textbox}
        //       aria-label="Set increment amount"
        //       value={incrementAmount}
        //       onChange={(e) => setIncrementAmount(e.target.value)}
        //     />
        //     <button
        //       className={styles.button}
        //       onClick={() => dispatch(incrementByAmount(incrementValue))}
        //     >
        //       Add Amount
        //     </button>
        //     <button
        //       className={styles.asyncButton}
        //       onClick={() => dispatch(incrementAsync(incrementValue))}
        //     >
        //       Add Async
        //     </button>
        //     <button
        //       className={styles.button}
        //       onClick={() => dispatch(incrementIfOdd(incrementValue))}
        //     >
        //       Add If Odd
        //     </button>
        //   </div>
        // </div>
    );
}

export default SearchCEP;