import { connect } from 'react-redux'
import {
    setVisibilityFilter
} from '../actions'
import Link from '../components/Link'

// Chon state cho connect
const mapStateToProps = (state, ownProps) => {
    // return 1 state la active: 
    // ownProps la prop cua component
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}

// chon dispatch cho connect
const mapDispatchToProps = (dispatch, ownProps) => {
    // Dinh nghia 1 onClick cho Link
    return {
        onFilterClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)

export default FilterLink
