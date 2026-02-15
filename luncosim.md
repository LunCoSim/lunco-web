# LunCoSim

EVERYONE CAN DO SPACE

## A virtual universe to design real space missions

LunCoSim is an open-source, collaborative space simulation platform for planning lunar and space missions, engineering complex systems, and training future space explorers. Built on the Godot 4 engine, it bridges the gap between gaming and professional space engineering.

[Try in Browser](https://alpha.lunco.space)

---

## Why LunCoSim?

### Real Engineering, Gamified
We use real physical models and engineering constraints, but make them accessible enough for enthusiasts. LunCoSim is not a toy — it's a professional-grade platform with a modern, user-friendly interface for modeling, testing, and validating lunar systems.

### Digital Twin Capability
Design your lunar base, simulate its operations, and validate requirements before bending a single piece of metal. Our solver engine supports multi-physics simulations, allowing you to balance accuracy and computational efficiency.

### Multiplayer Mission Control
Run missions with friends. One person drives the rover, another monitors telemetry through NASA's OpenMCT dashboard, and a third manages the power grid. Real-time collaboration across distributed teams.

### Open & Extensible
Built on open standards. Control your entities via Python scripts, HTTP API, or custom plugins. Import your own vehicles and assets.

---

## Core Features

### Simulation & Control
- **Multi-Entity Control:** Take direct control of astronauts (EVA activities), operators (remote presence), rovers (surface operations), and spacecraft (orbital maneuvers and landing)
- **Solver-Based Physics:** Complex interactions — power, thermal, data — are simulated using a graph-based solver, not simple game logic
- **Supply Chain Modeling:** Visualize and optimize resource flows (Oxygen, Hydrogen, Power) using a node-based graph editor

### Engineering Tools
- **Telemetry & OpenMCT:** Stream real-time data to NASA's OpenMCT dashboard for professional-grade mission monitoring
- **Modelica Support:** Integrate high-fidelity physics models for specialized components through the Modelica standard
- **Physics-Accurate Lunar Environment:** Realistic gravity, regolith mechanics, and radiation modeling

### AI-Powered Mission Design
LunCoSim integrates with [ai4space](https://github.com/LunCoSim/ai4space) to leverage AI for space mission design:
- **Requirements Generation** with automated conflict detection
- **Multiple ConOps** evaluated and ranked
- **Complete bid documentation** ready for export

### Extensibility
- **HTTP API:** Send commands to the simulation from external tools
- **Python Bridge:** Write your own control scripts in Python
- **Custom Models:** Import your own vehicles and assets

---

## For Professionals

LunCoSim provides advanced simulation capabilities including thermal analysis, power system modeling, communication link budgets, and trajectory planning. Our solver engine supports multi-physics simulations with customizable fidelity levels allowing you to balance accuracy and computational efficiency.

[View on GitHub](https://github.com/LunCoSim/lunco-sim) | [ai4space Guides](https://github.com/LunCoSim/ai4space)
