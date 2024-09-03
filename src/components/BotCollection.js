import React from 'react';
import BotCard from './BotCard';

function BotCollection({ bots, onViewBot }) {
  return (
    <div>
      <h1>Bot Collection</h1>
      <div className="ui four column grid">
        <div className="row">
          {bots.length > 0 ? (
            bots.map((bot) => (
              <BotCard
                key={bot.id}
                bot={bot}
                onViewBot={() => onViewBot(bot)}
              />
            ))
          ) : (
            <div>No bots available</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BotCollection;
