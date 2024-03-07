export type Rules = {
    required?: { message: string }
    maxLength?: { value: number; message: string }
    minLength?: { value: number; message: string }
    pattern?: { value: RegExp; message: string }
}

export const validate = (
    value: string,
    rules: Rules
): { message?: string; status: boolean } => {
    if (rules.required && value.length < 1) {
        return { message: rules.required.message, status: false }
    }
    if (rules.minLength && value.length < rules.minLength.value) {
        return { message: rules.minLength.message, status: false }
    }
    if (rules.maxLength && value.length > rules.maxLength.value) {
        return { message: rules.maxLength.message, status: false }
    }
    if (rules.pattern && !rules.pattern.value.test(value)) {
        return { message: rules.pattern.message, status: false }
    }
    return { status: true }
}
