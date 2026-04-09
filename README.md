# PokeRecall

**Test your memory with PokeRecall, A React-based card game where the goal is to click every Pokémon exactly once. One wrong move (clicking a duplicate), and your score resets. How many can you remember?**

### 💡 Project Context
This project was designed to practice **React Hooks** and **Component Lifecycle** management. The core technical challenge was implementing a "shuffle-on-click" mechanic while maintaining a consistent game state and fetching high-quality assets from an external API.

## How to Play
1. Click on a Pokémon card to earn a point.
2. After every click, the cards will shuffle randomly.
3. **The Rule:** Do not click the same Pokémon more than once in a single round.
4. If you click a new Pokémon, your score increases. If you click a duplicate, your score resets to zero.

## Features
* **Dynamic Shuffling:** Randomizes cards after every interaction to test recall.
* **PokéAPI Integration:** Fetches Pokémon names and high-resolution sprites dynamically.
* **Score Tracking:** Tracks both your **Current Score** and your **Best Score** using React state.
* **Responsive Grid:** A clean, CSS-grid-based layout that adapts to different screen sizes.

## Tech Stack
* **Framework:** React.js
* **Build Tool:** Vite
* **Data Source:** [PokéAPI](https://pokeapi.co/)
* **State Management:** React `useState` & `useEffect`
* **Styling:** CSS3 (Flexbox/Grid)
