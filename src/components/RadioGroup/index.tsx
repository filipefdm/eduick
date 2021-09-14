import React, { useCallback, useState, useMemo } from "react";
import styles from './styles.module.scss';
import Radio from '../Radio';

const RadioGroup: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectOption = useCallback(( option: string ) => {
        setSelectedOption(option);
    }, []);

    const options = useMemo(() => {
        return [
            { value: 'teacher', text: 'I’m a teacher' },
            { value: 'student', text: 'I’m a student' },
        ];
    }, []);

    return (
        <div className={styles.container}>
            {options.map(option => (
                <Radio
                onClick={() => handleSelectOption(option.value)}
                key={option.value}
                text={option.text}
                checked={option.value === selectedOption}
                />
            ))}
        </div>
    );
};

export default RadioGroup;