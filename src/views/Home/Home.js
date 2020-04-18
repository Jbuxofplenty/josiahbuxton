import React, { useCallback, useRef } from 'react';
import { dataActions } from '../../actions';
import { connect } from 'react-redux';
import { Canvas } from 'react-three-fiber';
import Scene from './Scene';
import Controls from './Controls';
import MenuButton from '../../components/MenuButton';

function HomePage() {
  const mouse = useRef([0, 0])
  const onMouseMove = useCallback(({ clientX: x, clientY: y }) => (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]), [])

  return (
    <div className='canvas'>
      <MenuButton />
      <Canvas
        camera={{ fov: 75, position: [0, 0, 40] }}
        onMouseMove={onMouseMove}>
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
