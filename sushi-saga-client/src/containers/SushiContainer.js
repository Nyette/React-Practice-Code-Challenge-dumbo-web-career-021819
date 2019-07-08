import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          /*
             Render Sushi components here!
          */
          props.allSushi.map(sushiObj => <Sushi key={sushiObj.id} sushi={sushiObj} />)
        }
        <MoreButton />
      </div>
    </Fragment>
  )
}

export default SushiContainer
