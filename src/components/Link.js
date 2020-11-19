import { Button } from 'react-bootstrap'

const Link = ({ active, event, title1, children, onFilterClick, filter }) => {
    if (active) {
        return <Button>{children}</Button>
    }

    return (
        <Button variant="secondary"
            onClick={e => {
                e.preventDefault()
                console.log("Click", filter)
                onFilterClick()
            }}>{children}</Button>
    )
}

export default Link