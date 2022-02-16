import { LightningElement, wire, track } from "lwc";
import searchHotel from "@salesforce/apex/ApexController.searchHotel";

export default class SearchHotelsComponent extends LightningElement {
  @track hotelName = "";
  @track hotels_list = [];
  @track error;
  @track searchTitle = "Search For Hotels";

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
            "https://www.segen.co.uk/wp-content/uploads/2020/12/SE-25000-R4-APP.jpg";
        }
        console.log(row);
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
}
