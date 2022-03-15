import { Mission } from '@typings/mission'
import Image from 'next/image'
import React from 'react'

interface ComponentProps {
  mission: Mission
}

const MissionCard = ({mission}: ComponentProps) => {
  return (
    <div className='mission-card'>
      <a href={`/missions/${mission.id}`}>
        <Image src={mission.patchURL} width='200px' height='200px' alt={`Mission patch for ${mission.id}`}/>
        <h2 className='link'>{mission.id}</h2>
      </a>
    </div>
  )
}

export default MissionCard