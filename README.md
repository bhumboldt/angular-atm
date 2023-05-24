# Angular ATM

## Description

Angular ATM allows clients to withdraw money from the available funds. You can navigate to /public/withdraw to see this in action

Admins are able to view the current funds and transaction history at /admin/overview, and restock funds at /admin/restock

## Development

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Project Architecture

This project is set up kind of like an Nx repo, where we have an app folder that contains
app specific files (like the routing) and many libs that are split up into categories and domains

### App

This folder is where any app specific files go -- like the routing

### Lib/Core

This is where all business logic and core functionalities go, typically anything non-ui related.
This is then split up by domains

### Lib/Modals

This is where any modal UI belongs

### Lib/Pages

This is where the main UI pages live -- things like the overview page, the restock page, the withdrawal page

### Lib/Shared

This is where files go that will be used across many pages, core libs, etc. -- things like
non-domain specific utility functions, validators, components, etc.
