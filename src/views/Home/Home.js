import React, { useCallback, useRef } from 'react';
import NameSwarm from 'views/NameSwarm/NameSwarm';

function Home() {
  const mouse = useRef([0, 0])
  const onMouseMove = useCallback(({ clientX: x, clientY: y }) => (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]), [])

  return (
    <div className="home">
      <div id="name-swarm" className='name-swarm'>
        <NameSwarm mouse={mouse} onMouseMove={onMouseMove} />
      </div>
    </div>
  )
}

export default Home;
