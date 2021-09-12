import React, { Suspense, useEffect, useRef, useMemo } from "react";
import { Canvas, Dom, useLoader, useFrame } from "react-three-fiber";
import { TextureLoader, LinearFilter } from "three";
import lerp from "lerp";
import { Text } from "./Text";
import Plane from "./Plane";
import { Block, useBlock } from "./blocks";
import state from "./store";
import Loader from 'components/Loader.js';
import $ from 'jquery';

function Startup() {
  const ref = useRef()
  useFrame(() => (ref.current.material.opacity = lerp(ref.current.material.opacity, 0, 0.025)))
  return <Plane ref={ref} color="#0e0e0f" position={[0, 0, 200]} scale={[100, 100, 1]} />
}

function Paragraph({ image, index, offset, factor, header, aspect, text, techStack, link, businessLink, github, pdf }) {
  const { contentMaxWidth: w, canvasWidth, margin, mobile } = useBlock()
  const size = aspect < 1 && !mobile ? 0.65 : 1
  const alignRight = (canvasWidth - w * size - margin) / 2
  const pixelWidth = w * state.zoom * size
  const left = !(index % 2)
  const color = index % 2 ? "#2011ed" : "#2FE8C3"
  return (
    <Block factor={factor} offset={offset}>
      <group position={[left ? -alignRight : alignRight, 0, 0]}>
        <Plane map={image} args={[1, 1, 32, 32]} shift={200} size={size} aspect={aspect} scale={[w * size, (w * size) / aspect, 1]} frustumCulled={false} />
        <Dom
          style={{ width: pixelWidth / (mobile ? 1 : 2), textAlign: left ? "left" : "right" }}
          position={[left || mobile ? (-w * size) / 2 : 0, (-w * size) / 2 / aspect - 0.4, 1]}>
          <div>{text}</div>
          {techStack !== '' && <div style={{ height: '1rem' }}></div>}
          {techStack !== '' && <div>{techStack}</div>}
          {link !== '' && <div style={{ height: '1rem' }}></div>}
          {link !== '' && <span>Link: <a href={link}>{link}</a></span>}
          {businessLink !== '' && <div style={{ height: '1rem' }}></div>}
          {businessLink !== '' && <span>Business Website Link: <a href={businessLink}>{businessLink}</a></span>}
          {github !== '' && <div style={{ height: '1rem' }}></div>}
          {github !== '' && <span>Github: <a href={github}>{github}</a></span>}
          {pdf !== '' && <div style={{ height: '1rem' }}></div>}
          {pdf !== '' && <span>PDF: <a href={pdf} download>{pdf.split("/assets/").pop()}</a></span>}
        </Dom>
        <Text left={left} right={!left} size={w * 0.04} color={color} top position={[((left ? -w : w) * size) / 2, (w * size) / aspect / 2 + 0.5, -1]}>
          {header}
        </Text>
        <Block factor={0.2}>
          <Text opacity={0.5} size={w * 0.1} color="#1A1E2A" position={[((left ? w : -w) / 2) * size, (w * size) / aspect / 1.5, -10]}>
            {"0" + (index + 1)}
          </Text>
        </Block>
      </group>
    </Block>
  )
}

function Content() {
  const images = useLoader(
    TextureLoader,
    state.paragraphs.map(({ image }) => image)
  )
  useMemo(() => images.forEach(texture => (texture.minFilter = LinearFilter)), [images])
  const { contentMaxWidth: w } = useBlock()
  return (
    <>
      <Block factor={1} offset={0}>
        <Block factor={1.2}>
          <Text left size={w * 0.08} position={[-w / 3.2, 0.5, -1]} color="#2011ed">
            Projects
          </Text>
        </Block>
      </Block>
      {state.paragraphs.map((props, index) => (
        <Paragraph key={index} index={index} {...props} image={images[index]} />
      ))}
      {state.stripes.map(({ offset, color, height }, index) => (
        <Block key={index} factor={-1.5} offset={offset}>
          <Plane args={[50, height, 32, 32]} shift={-4} color={color} rotation={[0, 0, Math.PI / 8]} position={[0, 0, -10]} />
        </Block>
      ))}
    </>
  )
}

export default function Projects() {
  const scrollArea = useRef()
  const onScroll = e => {
    state.top.current = e.target.scrollTop;
    $("#canvas").addClass("z-10");
  }
  useEffect(() => void onScroll({ target: scrollArea.current }), [])

  return (
    <div className="projects">
      <Suspense fallback={<Loader />}>
        <Canvas id="canvas"
          concurrent 
          pixelRatio={1} 
          orthographic 
          camera={{ zoom: state.zoom, position: [0, 0, 500] }} 
          onWheel={()=>{$("#canvas").removeClass("z-10");}}
        >
          <Suspense fallback={<Loader />}>
            <Content />
            <Startup />
          </Suspense>
        </Canvas>
      </Suspense>
      <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
        {new Array(state.sections).fill().map((_, index) => (
          <div key={index} id={"0" + index} style={{ height: `${(state.pages / state.sections) * 100}vh` }} />
        ))}
      </div>
      <div className="frame">
        <div className="frame__nav">
          <a className="frame__link" href="#00" children="Projects" />
          <a className="frame__link" href="#01" children="Weighted.io" />
          <a className="frame__link" href="#02" children="AtlasOne" />
          <a className="frame__link" href="#03" children="DejaFood" />
          <a className="frame__link" href="#04" children="Coffee Maker" />
          <a className="frame__link" href="#05" children="Resume" />
        </div>
      </div>
    </div>
  )
}
