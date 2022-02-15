import { LightningElement, wire, track } from "lwc";
import searchHotel from "@salesforce/apex/ApexController.searchHotel";

export default class SearchHotelsComponent extends LightningElement {
  hotelName;
  hotelImgUrl;

  @track hotels_list;
  @track error_hotels_list;

  @wire(searchHotel, { hotelName: "$hotelName" })
  dataTableAcc({ data, error }) {
    if (data) {
      this.hotels_list = data;
    } else if (error) {
      this.error_hotels_list = error;
    }
  }

  // Update new hotel search input
  handleSearchInputChange(event) {
    const searchString = event.target.value;
    this.hotelName = searchString;
  }
}
