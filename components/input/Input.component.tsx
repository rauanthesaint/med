/**
 * Testing
 *
 * Tested - ✅ Not Tested - ⭕
 *
 * Sizing           ✅
 * Hint             ✅
 * Leading Icon     ✅
 * Rules            ✅
 * isValid          ✅
 * Disabled         ✅
 * AcessKey         ✅
 */
'use client'
/** === Importin dependencies === */
import {
    FC,
    InputHTMLAttributes,
    useState,
    ChangeEvent,
    ReactNode,
} from 'react'
import clsx from 'clsx'
// styling
import styles from './input.module.scss'
// icons
import { WarningCircle } from 'iconoir-react'
import { validate, Rules } from './validation'

/** === Component attributes === */
interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
    hint?: string
    sizing?: 'sm' | 'md' | 'lg'
    leading?: ReactNode
    rules?: Rules
    isValid?: (val: boolean) => void
}

/** === Input component definition === */
const TextField: FC<IProps> = ({
    accessKey,
    autoComplete,
    autoFocus,
    children,
    className,
    disabled,
    list,
    name,
    pattern,
    placeholder,
    readOnly,
    tabIndex,
    type,
    value,
    // custom props
    label,
    hint,
    sizing = 'md',
    leading,
    rules,
    id,
    isValid,
}) => {
    const [error, setError] = useState<{
        message?: string
        status: boolean
    }>({
        status: true,
    })
    const [inputValue, setInputValue] = useState<string>('')
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const text = event.target.value
        if (rules) {
            const validationResult = validate(text, rules)
            setError(validationResult)
            isValid && isValid(validationResult.status)
        }
        setInputValue(text)
    }
    return (
        <div
            className={clsx(
                className,
                styles.TextField,
                styles[sizing],
                disabled && styles['disabled'],
                !error.status && styles['error']
            )}
        >
            <div className={styles.TextField__Label}>
                <label htmlFor={name}>{label}</label>
            </div>
            <div className={clsx(styles.TextField__Container)}>
                {leading}
                <input
                    title="input"
                    accessKey={accessKey}
                    placeholder={placeholder}
                    name={name}
                    type={type}
                    id={id}
                    onChange={handleInputChange}
                    autoComplete={autoComplete}
                    autoFocus={autoFocus}
                    disabled={disabled}
                    readOnly={readOnly}
                    value={inputValue}
                />
            </div>
            <div className={styles.TextField__Hint}>
                <span className={styles.TextField__Hint__Error}>
                    {!error.status && <WarningCircle />}
                    {error.message}
                </span>
                {hint}
            </div>
        </div>
    )
}

export default TextField
// TODO: readOnly
