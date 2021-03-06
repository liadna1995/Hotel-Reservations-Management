import { LightningElement, track } from "lwc";
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class AddNewRecordsComponent extends LightningElement {
  // Object we'll create new record from
  @track ObjectApiName = "";
  @track fields = [];
  @track title = "";
  @track toast_title = "";
  // Choice on "Actions" navigation bar
  @track choice = "";
  // Flag for creating new records's modal window
  @track isModalOpen = false;
  handleChoiceMade(event) {
    // Get name of object got clicked
    this.choice = event.target.name;
    if (this.choice === "menu_add_hotel") {
      this.ObjectApiName = "Account";
      this.title = "Add New Hotel";
      this.toast_title = "New Hotel";
      this.fields = ["Name", "Picture__c", "BillingAddress"];
      this.isModalOpen = true;
    } else if (this.choice === "menu_add_room_type") {
      this.ObjectApiName = "Room_Type__c";
      this.title = "Add New Room Type";
      this.toast_title = "New Room Type";
      this.fields = ["Name", "Hotel__c", "Number_Of_Available_Rooms__c"];
      this.isModalOpen = true;
    } else if (this.choice === "menu_book_reservation") {
      this.ObjectApiName = "Room_Reservation__c";
      this.title = "Add New Room Reservation";
      this.toast_title = "New Room Reservation";
      this.fields = [
        "Contact__c",
        "Number_Of_Rooms__c",
        "Reservation_Date__c",
        "Room_Type__c"
      ];
      this.isModalOpen = true;
    }
  }
  openModal() {
    // to open modal set isModalOpen track value as true
    this.isModalOpen = true;
  }
  closeModal() {
    // to close modal set isModalOpen track value as false
    this.isModalOpen = false;
  }
  handleSuccess(event) {
    this.closeModal();
    const evt = new ShowToastEvent({
      title: this.toast_title + " created",
      message: "Record ID: " + event.detail.id,
      variant: "success"
    });
    this.dispatchEvent(evt);
  }
}
