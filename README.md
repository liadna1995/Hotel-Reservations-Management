---

![alt text](common/images/lendaicolorlogo.png "LendAILogo")

# lendai-sf-home-assignment

Lend AI is a fintech company that provides a simple and cost-effective financing to private investment properties in the US for non-US citizens.

This home assignment will allow you to demonstrate your development abilities. There is no single correct answer; there are many solutions that could work. We want you to demonstrate your abilities on the Salesforce platform and any additional tool that may be necessary.

<div style="page-break-after: always;"></div>

# Initial setup of a Salesforce Developer Edition Org and Visual Studio Code

1. First sign up for a [Developer Edition Org](https://developer.salesforce.com/signup).
2. Login to you new Developer Edition Org and go to **Setup**, under **My Domain**, [register a My Domain](https://help.salesforce.com/articleView?id=domain_name_setup.htm&type=5).
3. [Install Development Tools](https://trailhead.salesforce.com/content/learn/projects/set-up-your-lightning-web-components-developer-tools/install-development-tools?trail_id=build-lightning-web-components)

# Installing the Hotel Reservations Management App using a Developer Edition Org

1. Clone this repository:
   ```
   git clone https://github.com/Lend-AI/lendai-sf-home-assignment.git
   cd lendai-sf-home-assignment
   ```
2. Authorize your Developer Org and provide it with an alias (mydevorg in the command below):
   ```
   sfdx force:auth:web:login -s -a mydevorg
   ```
3. Run this command in a terminal to deploy the app.
   ```
   sfdx force:source:deploy -p force-app
   ```
4. Import some sample data:
   - Install texei plugin: `sfdx plugins:install texei-sfdx-plugin`
   - `sfdx texei:data:import --inputdir ./data --targetusername YourOrgUserName`
5. If your org isn't already open, open it now:
   ```
   sfdx force:org:open -u mydevorg
   ```
6. In your Developer Org App Launcher, select the Hotel Reservations Management App.

<div style="page-break-after: always;"></div>

## Optional Installation Instructions

This repository contains several files that are relevant if you want to integrate modern web development tooling to your Salesforce development processes, or to your continuous integration/continuous deployment processes.

### Code formatting

[Prettier](https://prettier.io "https://prettier.io/") is a code formatter used to ensure consistent formatting across your code base. To use Prettier with Visual Studio Code, install [this extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) from the Visual Studio Code Marketplace. The [.prettierignore](/.prettierignore) and [.prettierrc](/.prettierrc) files are provided as part of this repository to control the behavior of the Prettier formatter.

### Code linting

[ESLint](https://eslint.org/) is a popular JavaScript linting tool used to identify stylistic errors and erroneous constructs. To use ESLint with Visual Studio Code, install [this extension](https://marketplace.visualstudio.com/items?itemName=salesforce.salesforcedx-vscode-lwc) from the Visual Studio Code Marketplace. The [.eslintignore](/.eslintignore) file is provided as part of this repository to exclude specific files from the linting process in the context of Lightning Web Components development.

### Pre-commit hook

This repository also comes with a [package.json](./package.json) file that makes it easy to set up a pre-commit hook that enforces code formatting and linting by running Prettier and ESLint every time you `git commit` changes.

To set up the formatting and linting pre-commit hook:

1. Install [Node.js](https://nodejs.org) if you haven't already done so
2. Run `npm install` in your project's root folder to install the ESLint and Prettier modules (Note: Mac users should verify that Xcode command line tools are installed before running this command.)

Prettier and ESLint will now run automatically every time you commit changes. The commit will fail if linting errors are detected. You can also run the formatting and linting from the command line using the following commands (check out [package.json](./package.json) for the full list):

```
npm run lint:lwc
npm run prettier
```

<div style="page-break-after: always;"></div>

---

![alt text](common/images/lendaicolorlogo.png "LendAILogo")

# Assignment Description

Build a Hotel Reservations Management App. This app will allow a Hotel Account Manager to add new Hotels with their address, and for each a set of Room Types; See all the Hotels on a map; Search for a Hotel by Name and see it's details.

**Notes:**

- The links provided in the Tasks section provides general guidance and examples.
- Please feel free to add any feature or changes you like to the data model (e.g. adding new field).

## Tasks

1. Go over the [Data Modeling](https://trailhead.salesforce.com/content/learn/modules/data_modeling) module to understand Salesforce objects.
2. Create one or more [Lightning Web Components](https://trailhead.salesforce.com/content/learn/projects/quick-start-lightning-web-components?trailmix_creator_id=ngoldenberg&trailmix_slug=lwc-getting-started) where a Hotel Account Manager will be able to perform the following actions:
   - Add a new Hotel with an address and image.
   - Add a Room Type for the Hotel, with the amount of rooms available for that type.
   - Book a reservation for a Hotel room to a Contact with a specific date.
     - Note that a contact can't book two rooms on the same date, a message should appear on screen to indicate that.
     - Note that a contact can't book a room of a specific type where all the rooms are already booked, a message should appear on the screen to indicate that.
   - See all the Hotels in a Google Map compoennt.
   - Search for a Hotel and see the result in a grid view with the Hotel image and name.
3. Add the Lightning Web Components you built to the "Home" [App Page](https://trailhead.salesforce.com/content/learn/modules/lightning_app_builder/lightning_app_builder_apphome) under the Hotel Reservations Management App.
4. [Deploy](https://trailhead.salesforce.com/content/learn/projects/quick-start-lightning-web-components/create-a-hello-world-lightning-web-component?trailmix_creator_id=ngoldenberg&trailmix_slug=lwc-getting-started#-----------deploy-to-your-trailhead-playground--) the work you have done to your Salesforce developer edition organization.

<div style="page-break-after: always;"></div>

## Entity Relationship Diagram

![alt text](common/images/Hotel%20Reservation%20ERD.png "ERD")

**Good luck!**

_Lendai Team_
