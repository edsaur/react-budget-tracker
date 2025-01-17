# Budget Tracker Features

This budget tracker will have the following features:

## Libraries:
- Redux (for state management), ✅
- Router (For tracking each budget), ✅
- Tailwind (For CSS), ✅

## FOLDER STRUCTURE 

## User Data:
- user
    - User add their own name
        - if new user, app will generate new unique id for user
        - if old user, app will check if username is in the api/db
        - user can delete their account

- money tracker
    - User can add their current cash on hand (initial funds...)

    - User can add a specific expense or additionals to their expense, update expenses.
        - (date, price of expense, details)
    
    - App should compute the weekly, monthly, yearly average expense, income

- api 
    - insert data, update data, delete data in the api (both for user and money tracker)

