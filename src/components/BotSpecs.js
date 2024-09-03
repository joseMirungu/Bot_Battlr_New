import React from 'react';

function BotSpecs({ bot, onBack, onEnlist }) {
  return (
    <div>
      <h1>Bot Specs</h1>
      <div className="ui card">
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name}
            <i className={botTypeClasses[bot.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
          <div className="description">
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
          </div>
        </div>
        <div className="extra content">
          <button className="ui button" onClick={onBack}>Back</button>
          <button className="ui button" onClick={onEnlist}>Enlist</button>
        </div>
      </div>
    </div>
  );
}

const botTypeClasses = {
  Assault: 'icon military',
  Defender: 'icon shield',
  Support: 'icon plus circle',
  Medic: 'icon ambulance',
  Witch: 'icon magic',
  Captain: 'icon star',
};

export default BotSpecs;
