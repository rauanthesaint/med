/*
   This React component represents a customizable button in the UI library.

   Props:
   - accessKey: A keyboard shortcut to activate or focus the button.
   - autoFocus: If true, the button will be focused on mount.
   - children: The content inside the button, typically text or other React components.
   - className: Additional CSS classes to be applied to the button.
   - disabled: If true, the button is disabled and cannot be interacted with.
   - id: A unique identifier for the button.
   - type: The type of the button, e.g., 'button', 'submit', or 'reset'.
   - genre: The visual style of the button, which can be 'primary', 'secondary', or 'tertiary'.
   - size: The size of the button, which can be 'sm' (small), 'md' (medium), or 'lg' (large).

   Note: The styles for the button are imported from the 'button.module.scss' file, 
   and the 'clsx' utility is used for conditional class application.
*/

// --- Importing Deps ---
import React, { ButtonHTMLAttributes, JSX } from 'react'
import clsx from 'clsx'
import styles from './button.module.scss'

// --- Props Interface ---
export interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    genre?: 'primary' | 'secondary' | 'tertiary'
    size?: 'sm' | 'md' | 'lg'
}

// --- Component Definition ---
export default function Button({
    accessKey,
    autoFocus,
    children,
    className,
    disabled,
    id,
    type,
    onClick,
    style,
    genre = 'primary',
    size = 'md',
}: IProps): JSX.Element {
    return (
        /*
           The button element with dynamic classes for styling based on props.
           - 'styles.Button' provides base styling.
           - 'styles[genre]' adds genre-specific styling (primary, secondary, tertiary).
           - 'styles[size]' adds size-specific styling (sm, md, lg).
           Additional classes passed through the 'className' prop are also applied.

           The button has a title attribute set to "button" for accessibility.
        */
        <button
            title={`Button:${genre}`}
            className={clsx(
                className,
                styles.Button,
                styles[genre],
                styles[size]
            )}
            accessKey={accessKey}
            onClick={onClick}
            autoFocus={autoFocus}
            id={id}
            disabled={disabled}
            type={type}
            style={style}
        >
            {children}
        </button>
    )
}
