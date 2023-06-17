export default function NotFound(props: {
    name: string
}) {
    return (
        <div style={{ color: 'red', border: '1px solid #eee', padding: '8px 16px' }}>
            <span>`{props.name}`</span>
            <span> component cannot be found</span>
        </div>
    )
}