import React from 'react'
import PropTypes from 'prop-types';
import { Wrapper, Content } from './InfoBarStyles'
import {calcTime, convertMoney} from '../../helpers'
const InfoBar = ({time, budget, revenue}) => {
    return (
        <Wrapper>
            <Content>
                <div className='column'>
                    <p>Running Time: {calcTime(time)}</p>
                </div>

                <div className='column'>
                    <p>Budget: {convertMoney(budget)}</p>
                </div>

                <div className='column'>
                    <p>Revenue {convertMoney(revenue)}</p>
                </div>
            </Content>
        </Wrapper>
    )
}
InfoBar.propTypes = {
    time: PropTypes.number,
    budget: PropTypes.number,
    revenue: PropTypes.number
}

export default InfoBar
