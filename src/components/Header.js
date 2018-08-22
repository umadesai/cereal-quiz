import React from 'react';
import FL from '../cereals/fruitLoops.gif';
import CH from '../cereals/cheerios.png';
import AJ from '../cereals/appleJacks.gif';
import LC from '../cereals/luckyCharms.png';
import PP from '../cereals/pops.gif';
import HB from '../cereals/honeyBunches.png';
import FF from '../cereals/frostedFlakes.png';
import FP from '../cereals/fruityPebbles.png';
import CB from '../cereals/crunchBerries.GIF'
import CT from '../cereals/cinnamonToast.png'
import CC from '../cereals/capnCrunch.GIF'
import MW from '../cereals/miniWheats.gif'


function Header(props) {
  return (
    <header className="App-header">
      <img className="Cereal-logo" src={FL} alt="cereal"/>
      <img className="Cereal-logo" src={CH} alt="cereal"/>
      <img className="Cereal-logo" src={AJ} alt="cereal"/>
      <img className="Cereal-logo" src={LC} alt="cereal"/>
      <img className="Cereal-logo" src={PP} alt="cereal"/>
      <img className="Cereal-logo" src={HB} alt="cereal"/>
      <img className="Cereal-logo" src={FF} alt="cereal"/>
      <img className="Cereal-logo" src={FP} alt="cereal"/>
      <img className="Cereal-logo" src={CB} alt="cereal"/>
      <img className="Cereal-logo" src={CT} alt="cereal"/>
      <img className="Cereal-logo" src={CC} alt="cereal"/>
      <img className="Cereal-logo" src={MW} alt="cereal"/>
      <h1 className="App-title">Which Cereal Are You?</h1>
    </header>
  );
}

export default Header;
