# Gradient Clock

<img width="350" alt="Screenshot 2025-03-02 at 12 09 12" src="https://github.com/user-attachments/assets/d8a2dbb6-2e95-4b88-a90a-7cae904da7c2" />

Gradient clock, with custom colours, at 12:09 pm. 

## Overview

Gradient Clock is a visually appealing clock that displays the current time with gradient-colored hands. The clock allows users to customize the colors and gradients of the hour and minute hands, providing a unique and personalized experience.

## Features

- **Client-Side Time**: The clock displays the current time based on the client's local time.
- **Customizable Gradients**: Users can select colors for the hour and minute hands, and control the gradient extent.
- **Full-Screen Mode**: The clock can be displayed in full-screen mode for a more immersive experience.
- **Color Selection**: A grid of tiles allows users to choose from a preselected set of colors.
- **Minute Hand Width Control**: Users can adjust the width of the minute hand.
- **Gradient Extent Control**: Users can control the extent of the gradient on both the hour and minute hands.
- **Color Blending**: Smooth color transitions between minutes and hours.
- **Interactive Controls**: Users can interact with the clock to customize its appearance.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/gradient-clock.git
    ```
2. Navigate to the project directory:
    ```bash
    cd gradient-clock
    ```
3. Open `index.html` in your preferred web browser.

## Usage

- **Toggle Controls**: Click on the invisible button at the top of the screen to toggle the control panel.
- **Select Colors**: Use the color buttons to select colors for the hour and minute hands.
- **Adjust Gradient Extent**: Use the sliders to adjust the extent of the gradient for the hour and minute hands.
- **Full-Screen Mode**: Press `F11` or use the browser's full-screen option to view the clock in full-screen mode.

## Customization

### Color Definitions

You can customize the available colors by modifying the `colours` array in `controls.js`:

```javascript
const colours = [
    "transparent",
    "black",
    "white",
    "#32a8a2",
    "#9432a8",
    "#4ea832",
    "#a83250",
    "#cfa12d",
    "#cf2d7b",
];
