import React from 'react'
import { SketchPicker } from 'react-color';
import { useSnapshot } from 'valtio';
import state from '../store';

const ColorPicker = () => {
  const snap = useSnapshot(state);


  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker color={snap.color} disableAlpha onChange={(color) => state.color = color.hex} presetColors={[
        "#000000",
        "#ffffff",
        "#939495",
        "#374650",
        "#8aadc5",
        "#ff7700",
        "#02642e",
        "#6fcf91",
        "#821d2b",
        "#f34976",
        "#55387a",
        "#8063d5"
      ]}/>
    </div>
  )
}

export default ColorPicker