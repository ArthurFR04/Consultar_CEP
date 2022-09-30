import React from 'react';


import { useDispatch } from 'react-redux';

import { getCEP } from './searchcepSlice'

import MaskInput from 'react-input-mask';

import styles from './SearchCEP.module.css';


let SearchCEP = () => {

    const dispatch = useDispatch();


    return (
        <div className= {styles.SearchCEP}>
            <div className={styles.coleta}>

                <MaskInput 
                    id='inpColeta'
                    placeholder='Insira o CEP'
                    mask="99999-999"
                />

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
    );
}

export default SearchCEP;