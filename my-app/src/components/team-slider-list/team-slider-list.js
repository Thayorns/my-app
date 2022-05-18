import TeamSliderListItem from '../teamslider-list-item/teamslider-list-item'


import './team-slider-list.scss'

const TeamSliderList = ({data}) => {
    const elements = data.map(item => {
        const {id, ...itemProps} = item
        return (
            <TeamSliderListItem
                key = {id}
                {...itemProps}/>
        )
    })
    return (
        <ul>
            {elements}
        </ul>
    )
     
}

export default TeamSliderList