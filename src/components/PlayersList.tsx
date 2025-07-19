import React from 'react';
import Player from './Player';
import players from '../data/players';

const PlayersList = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold bg-gradient-pitch bg-clip-text text-transparent mb-4">
          FIFA Player Cards
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Discover the world's greatest football players with their stats and details in our premium card collection.
        </p>
        <div className="mt-6 h-1 w-24 bg-gradient-pitch mx-auto rounded-full"></div>
      </div>

      {/* Players Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {players.map((player, index) => (
          <div key={index} className="transform transition-all duration-300 hover:-translate-y-2">
            <Player {...player} />
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center mt-16">
        <div className="inline-flex items-center justify-center p-4 bg-gradient-card rounded-xl border border-border/50">
          <span className="text-muted-foreground">
            ⚽ Total Players: <span className="text-primary font-bold">{players.length}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlayersList;