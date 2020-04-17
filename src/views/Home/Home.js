import React, { useState, useCallback, useRef } from 'react';
import { dataActions } from '../../actions';
import { connect } from 'react-redux';
import { Canvas } from 'react-three-fiber';
import Scene from '../../components/Scene';
import Controls from '../../components/Controls';

function HomePage() {
  const [set] = useState(false)
  const mouse = useRef([0, 0])
  const onMouseMove = useCallback(({ clientX: x, clientY: y }) => (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]), [])

  return (
    <div className='canvas'>
      <Canvas
        onMouseMove={onMouseMove}
        onMouseUp={() => set(false)}
        onMouseDown={() => set(true)}>
        <Scene mouse={mouse}/>
        <Controls />
      </Canvas>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    isLoginSuccess: state.authentication.isLoginSuccess,
  };
}

const mapDispatchToProps = (dispatch, history) => {
  return {
    dataReset: () => dispatch(dataActions.dataReset())
  };
}

const Home = connect(mapStateToProps, mapDispatchToProps)(HomePage);
export default Home;
