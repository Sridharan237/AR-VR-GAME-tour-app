// this is for using conditional tailwind using the below class

//tailwindcss classnames merger
export const cn = (...classes: string[]) => {
    return classes.filter(Boolean).join(' ');
}