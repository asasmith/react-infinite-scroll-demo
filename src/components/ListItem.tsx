export function ListItem({ data }: { data: string }): JSX.Element {
    const classes = 'h-16 text-left text-xl flex items-center pl-2'
    return <li className={classes}>{data}</li>
}
