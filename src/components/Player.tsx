import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const Player = ({ 
  name = "Unknown Player",
  team = "Free Agent", 
  nationality = "Unknown",
  jerseyNumber = 0,
  age = 0,
  imageUrl = "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=400&h=500&fit=crop"
}) => {
  return (
    <Card 
      className="relative overflow-hidden bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105 border-border/50"
      style={{
        background: 'var(--gradient-card)',
        boxShadow: 'var(--shadow-card)'
      }}
    >
      <CardContent className="p-0">
        {/* Header with Jersey Number */}
        <div className="relative bg-gradient-pitch p-4 text-center">
          <div 
            className="absolute top-2 right-2 w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center font-bold text-lg"
            style={{ background: 'var(--gradient-gold)' }}
          >
            {jerseyNumber}
          </div>
          <h2 className="text-xl font-bold text-primary-foreground mt-6">{name}</h2>
          <p className="text-primary-foreground/80 text-sm font-medium">{team}</p>
        </div>

        {/* Player Image */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            style={{
              filter: 'brightness(1.1) contrast(1.1)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent"></div>
        </div>

        {/* Player Details */}
        <div className="p-4 space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground text-sm font-medium">Nationality</span>
            <span 
              className="px-3 py-1 rounded-full text-sm font-bold bg-gradient-blue text-secondary-foreground"
              style={{ background: 'var(--gradient-blue)' }}
            >
              {nationality}
            </span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground text-sm font-medium">Age</span>
            <span className="text-foreground font-bold">{age} years</span>
          </div>

          <div className="pt-2 border-t border-border">
            <div className="flex justify-center">
              <div 
                className="px-4 py-2 rounded-lg bg-gradient-pitch text-primary-foreground font-bold text-sm"
                style={{ background: 'var(--gradient-pitch)' }}
              >
                #{jerseyNumber} • {team}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Player;