# Hotel-Reservations-Management
## LWC: Three components :<br> 
### •	addNewRecordsComponent : Displays vertical navigation bar for the different actions of creating new records (account, room type, room reservation), and after clicking on an action -> there will be a modal window with the ability of creating a record.<br>
### •	hotelsMapComponent : Displaying all of the hotels locations on GoogleMap. Added description field to add more details to the map.<br>
### •	searchHotelsComponent : Displaying hotel search result in modal window, with a layout grid of images. An image will be presented as default if there is no image to the hotel, there is a link to the hotel profile on the image.<br>
## APEX: One controller to retrieve DB information, with two functions:<br>
### •	searchHotel : The function is getting search key as input (from the user), and returns list of hotels, each contains : (id, name, picture, description), in order to present on the layout.<br>
### •	getHotelAddresses : The function returns list of hotels, each contains : (id, name, description, billingaddress), in order to present on the google map.<br>
## Validation using: 
### •	Trigger - for validating date on all relevant room reservations of a contact.
### •	Roll-Up Summary field - for summing amount of rooms booked for room type.
### • Rule Validations on Room Type & Room Reservation for basic field validations.
