import { LightningElement, wire, track } from "lwc";

import getHotelAddresses from "@salesforce/apex/ApexController.getHotelAddresses";

export default class hotelsMapComponent extends LightningElement {
  @track error; //this holds errors

  @track mapMarkers = [];
  @track markersTitle = "All Hotels";
  @track zoomLevel = 4;
  /* Load address information from Controller */
  @wire(getHotelAddresses, {})
  wiredHotelLocations({ error, data }) {
    if (data) {
      data.forEach((dataItem) => {
        this.mapMarkers = [
          ...this.mapMarkers,
          {
            location: {
              PostalCode: dataItem.PostalCode,
              Street: dataItem.BillingStreet,
              City: dataItem.BillingCity,
              Country: dataItem.BillingCountry,
              State: dataItem.State
            },

            icon: "standard:address",
            title: dataItem.Name,
            description: dataItem.Description
          }
        ];
      });
      this.error = undefined;
    } else if (error) {
      this.error = error;
    }
  }
}
