
export const getCroppedSymbols = (text: string, number: number) => { 
    return text.split('').slice(0, number).join('') + '...'
}