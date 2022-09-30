import React , { useState } from 'react';

import { useDispatch } from 'react-redux';

import InputMask from 'react-input-mask';

import { getCEP } from '../SearchCEP/searchcepSlice'


import styles from './CepFormStyle.module.css'


let CepForm = (props) => {

    const dispatch = useDispatch();
    const [cep, setCep] = useState('')

    return (

        <form className={styles.coleta} onSubmit={() => dispatch(getCEP(cep))}>

            <InputMask
                className={styles.inpColeta}
                // placeholder={"Nome"}
                // type={"text"}
                mask="99999-999"
            />

            <span className={styles.btns}>
                <button
                    className={styles.btnClear}
                    onClick={() => document.getElementById('inpColeta').value = ''}
                >
                    Limpar
                </button>

                <button
                    className={styles.btnConfirm}
                    type="submit"
                >
                    Consultar
                </button>
            </span>
        </form>

    )
}

export default CepForm