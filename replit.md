# Bokle AI Website

## Overview
This is a React-based frontend website for Bokle AI, built with Vite, TypeScript, and Tailwind CSS. The site features a modern design with 3D graphics (Three.js), smooth animations, and multiple sections including Hero, Services, About, and Contact.

## Project Structure
- **Frontend Only**: Pure React application with no backend
- **Build Tool**: Vite
- **UI Framework**: React 18 with shadcn/ui components
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js via @react-three/fiber and @react-three/drei
- **Routing**: React Router DOM
- **State Management**: TanStack Query

## Technology Stack
- React 18.3.1
- TypeScript
- Vite 5.4.19
- Tailwind CSS
- shadcn/ui components
- Three.js for 3D graphics
- React Router for navigation

## Development
- **Dev Server**: Runs on port 5000 at 0.0.0.0
- **Command**: `npm run dev`
- **Hot Module Replacement**: Enabled

## Deployment
- **Type**: Autoscale (stateless frontend)
- **Build**: `npm run build`
- **Preview**: `npm run preview`

## Key Features
- 3D hero section with interactive graphics
- Responsive navigation
- Services showcase
- About section
- Contact form
- Footer with branding

## Recent Changes (October 2, 2025)
- Configured Vite to run on port 5000 with host 0.0.0.0 for Replit environment
- Added @assets alias for easier asset imports
- Set up workflow for development server
- Configured deployment settings for Autoscale
