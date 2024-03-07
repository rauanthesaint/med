import { HTMLAttributes } from 'react'

// Interface for Paragraph Props, extending HTMLAttributes for additional attributes
export interface IParagraphProps extends HTMLAttributes<HTMLParagraphElement> {}

// Interface for Label Props, extending HTMLAttributes for additional attributes
export interface ILabelProps extends HTMLAttributes<HTMLSpanElement> {
    size?: 'sm' | 'md' | 'lg'
}

// Interface for Heading Props, extending HTMLAttributes for additional attributes
export interface IHeadingProps extends HTMLAttributes<HTMLHeadingElement> {}

// Interface for Display Props, extending HTMLAttributes for additional attributes
export interface IDisplayProps extends HTMLAttributes<HTMLHeadingElement> {}
