import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

// Funció per carregar els personatges des de localStorage
// Si no hi ha cap personatge, retorna una llista buida
const loadFromLocalStorage = (): Character[] => {
  const characters = localStorage.getItem('characters');
  return characters ? JSON.parse(characters) : [];
};

@Injectable({ providedIn: 'root' })
export class DragonballService {
  characters = signal<Character[]>(loadFromLocalStorage());

  //per guardar la llista de personatges a localStorage
  saveToLocalStorage = effect(() => {
    // Cada vegada que la llista de personatges canvia, s'actualitza localStorage
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  });

  addCharacter(character: Character) {
    this.characters.update((list) => [...list, character]);
  }
}
