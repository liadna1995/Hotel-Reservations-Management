import { LightningElement, wire, track } from "lwc";
import searchHotel from "@salesforce/apex/ApexController.searchHotel";
export default class SearchHotelsComponent extends LightningElement {
  @track hotelName = "";
	@track hotels_list;
	@track error;
  // Flag for creating new records's modal window
  @track isModalOpen = false;

  // Wire will help get the output of our apex class function
  @wire(searchHotel, { hotelNameArg: "$hotelName" })
  dataTableAcc({ error, data }) {
    if (data) {
      let rows = [];
      let tempRows = JSON.parse(JSON.stringify(data));
      // Update json arr before presenting
      for (let i = 0; i < tempRows.length; i++) {
        let row = tempRows[i];
        // Update profile link for the href in the HTML
        row.profile_link =
          "https://ass-liad-dev-ed.lightning.force.com/lightning/r/Account/" +
          row.Id +
          "/view";
        if (row.Picture__c === undefined) {
          // No image available picture
          row.Picture__c =
            "https://www.yatra.com/content/globalcdn/bongo-cdn/images/hotel/no-photo.png";
        }
        rows.push(row);
      }
      this.hotels_list = rows;
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

  get hasResults() {
		return (this.hotels_list.length > 0);
	}

  openModal() {
    // to open modal set isModalOpen track value as true
    this.isModalOpen = true;
    // 
  }
  closeModal() {
      // to close modal set isModalOpen track value as false
    this.isModalOpen = false;
  }
  resetText(){
    this.hotelName = '';
  }
}



