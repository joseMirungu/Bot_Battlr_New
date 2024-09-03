import React from 'react';
import BotCard from './BotCard';

function YourBotArmy({ bots, onRemoveBot }) {
  return (
    <div>
      <h1>Your Bot Army</h1>
      <div className="ui four column grid">
        <div className="row">
          {bots.length > 0 ? (
            bots.map((bot) => (
              <BotCard
                key={bot.id}
                bot={bot}
                onRemoveBot={onRemoveBot}
              />
            ))
          ) : (
            <div>No bots enlisted</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
