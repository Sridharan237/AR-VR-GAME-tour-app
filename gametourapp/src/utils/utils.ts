//this util dependency is used for conditionally merging class names
//tailwind classnames merger

export const cn = (...classes: string[]) => {
    return classes.filter(Boolean).join(' ')
}