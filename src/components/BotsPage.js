import React, { useState, useEffect } from 'react';
import YourBotArmy from './YourBotArmy';
import BotCollection from './BotCollection';
import BotSpecs from './BotSpecs';

function BotsPage() {
  const [bots, setBots] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8002/bots')
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  const handleRemoveBot = (botId) => {
    setBots(bots.filter((bot) => bot.id !== botId));
  };

  const handleViewBot = (bot) => {
    setSelectedBot(bot);
  };

  const handleEnlistBot = (bot) => {
    setBots(bots.map((b) => (b.id === bot.id ? { ...b, isEnlisted: true } : b)));
    setSelectedBot(null);
  };

  return (
    <div>
      {selectedBot ? (
        <BotSpecs
          bot={selectedBot}
          onBack={() => setSelectedBot(null)}
          onEnlist={() => handleEnlistBot(selectedBot)}
        />
      ) : (
        <>
          <YourBotArmy bots={bots.filter((bot) => bot.isEnlisted)} onRemoveBot={handleRemoveBot} />
          <BotCollection bots={bots.filter((bot) => !bot.isEnlisted)} onViewBot={handleViewBot} />
        </>
      )}
    </div>
  );
}

export default BotsPage;
