import React from 'react';



// import {
//     selectValue , saveStateCEP
// } from './searchcepSlice';

import CepForm from '../Form/CepForm'

import styles from './SearchCEP.module.css';


// import { fetchCEP } from './searchcepAPI'






let SearchCEP = () => {
    // const count = useSelector(selectCount);
    
    // const [incrementAmount, setIncrementAmount] = useState('2');

    // const incrementValue = Number(incrementAmount) || 0;



    // onChange={(event) => setCep( event.target.value)}

    return (
        <div className= {styles.SearchCEP}>

            <CepForm />

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