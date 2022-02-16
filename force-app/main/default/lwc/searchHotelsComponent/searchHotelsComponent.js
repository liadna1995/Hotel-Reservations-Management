import { LightningElement, wire, track } from "lwc";
import searchHotel from "@salesforce/apex/ApexController.searchHotel";

export default class SearchHotelsComponent extends LightningElement {

  @track hotelName = '';
  @track hotels_list = [];
  @track error;
  @track searchTitle = 'Search For Hotels';
  
  

  @wire(searchHotel, { hotelNameArg: '$hotelName' })
  dataTableAcc({ error, data }) {
    if (data) { 
      this.hotels_list = data;
      this.error = undefined;
    } else if (error) {
        this.error = error;
    }
  }
  
  // Update new hotel search input
  handleSearchInputChange(event) {
    const searchString = event.target.value;
    this.hotelName = searchString;
  }



  
}
