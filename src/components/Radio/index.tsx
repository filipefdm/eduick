import { ButtonHTMLAttributes, useState } from 'react';
import styles from './styles.module.scss';

type CheckboxProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    text: string;
    checked?: boolean;
}

const Radio: React.FC<CheckboxProps> = ({
    text,
    checked = false,
    ...rest
}) => {
    return (
            <button className={styles.container} {...rest} type="button">
                <div className={styles.check}>
                    {checked ? (
                        <img src="https://www.freeiconspng.com/uploads/orange-check-tick-icon-14.png" alt="Checked" />
                        // <img src="/check.svg" alt="Checked" /> 
                    ) : null}
                </div>
                    
                <span>{text}</span>
            </button>
    );
};

export default Radio;