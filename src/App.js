import React from 'react';
import { AMSynth } from 'tone';

const synth = new AMSynth().toMaster()

// synth.triggerAttackRelease('C4', '8n' )


function App() {
  return (
   <>
   <button onClick= {()=> synth.triggerAttackRelease('C4', '8n' )}>Play</button>
   </>
  );
}

export default App;
