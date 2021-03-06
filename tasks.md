- [x] Get Express up and running
- [x] Add scaffolding for routes
    - [x] GET route `/api/travellers`
    - [x] GET route `/api/travellers/:id`
    - [x] POST route `/api/travellers`
    - [x] DELETE route `/api/travellers/:id`
    - [x] GET route `/api/locations`
    - [x] POST route `/api/locations`
    - [x] GET route `/api/locations/:id`
    - [x] DELETE route `/api/locations/:id`
    - [x] POST route `/api/trips`
    - [x] DELETE route `/api/trips/:id`
- [x] Create Traveller Model
    - * `id`: primary key
    - * `name`
    - * `email`
- [x] Create the Locations Model
    - * `id`: primary key
    - * `name`
- [x] Create Trips Model
    - * `id`: primary key
    - * `trip_budget` 
    - * `traveller_amount`
    - * `traveller_id`: non-unique foreign key that references the `Traveller` model's `id` field (`Traveller.id`)
    - * `location_id`: non-unique foreign key that references the `Location` model's `id` field (`Location.id`)
- [ ] Connect the models to the routes
- [ ] Deploy the app to heroku


# Details

## User Stories

* As a traveller, I want to be able to create an account.

* As a traveller, I want to be able to create a new trip for myself using a location from a list.

* As a traveller, I want to be able to create and view location data.

* As a traveller, I want to be able to view all of the trips I'm taking, along with their locations.

## Acceptance Criteria

* It's done when the GET route `/api/travellers` returns all traveller data without associated trips in Insomnia Core.

* It's done when the POST route `/api/travellers` creates traveller data and returns a successful response in Insomnia Core.

* It's done when the GET route `/api/travellers/:id` returns a single traveller's data with their associated trips and a list of locations in Insomnia Core. 

* It's done when the DELETE route `/api/travellers/:id` removes a traveller and any trips associated with them and returns a successful response in Insomnia Core.

* It's done when the GET route `/api/locations` returns all location data in Insomnia Core.

* It's done when the POST route `/api/locations` creates location data and returns a successful response in Insomnia Core.

* It's done when the GET route `/api/locations/:id` returns a single location's data, with its associated trips, in Insomnia Core. 

* It's done when the DELETE route `/api/locations/:id` removes a location and any trips associated with it and returns a successful response in Insomnia Core.

* It's done when the POST route `/api/trips` creates trip data between associated travellers and locations.

* It's done when the DELETE route `/api/trips/:id` removes a trip and returns a successful response in Insomnia Core.

* It's done when the API is successfully deployed to Heroku with a MySQL database.

## Specifications 

* Database models should have the following fields and associations:

  * `Traveller`

    * `id`: primary key

    * `name`
      
    * `email`

  * `Location`

    * `id`: primary key
    
    * `name`

  * `Trips`
      
    * `id`: primary key

    * `trip_budget` 
      
    * `traveller_amount`
      
    * `traveller_id`: non-unique foreign key that references the `Traveller` model's `id` field (`Traveller.id`)

    * `location_id`: non-unique foreign key that references the `Location` model's `id` field (`Location.id`)

  * Travellers have many locations, and locations have many travellers through trips (many-to-many association).

  * Set the `unique` flag to `false` to avoid a SQL error when creating the many-to-many relationship, because travellers can take multiple trips.

  Use the following sample data as the request body POST `/api/trips` route:

  ```json
  {
    "trip_budget": 2000.50,
    "traveller_amount": 6,
    "traveller_id": 1,
    "location_id": 2
  }
  ```