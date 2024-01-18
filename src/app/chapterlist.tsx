export default function ChapterList(obj: {list: string[] }) {
    const optionChildren = obj.list.map(child => <option key={child}>{child}</option>)
    return (
        <select>
            {optionChildren}
        </select>
    )
}