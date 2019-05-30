# Android Studio

## Generating Project Key

To use Devnagri plugin user must have created a project on the website ([Follow the steps to add a project](https://docs.devnagri.com/guide/Client-Guide.html#adding-new-project)). User will only create the project with the instructions and move to project dashboard (**Note**: User need not to upload the file). Choose the project to get the project key.
Once on project summary page, user will be able to choose “CLI” option available on the last tab.

Initially there will a blank box, user is required to click “**Generate Key**” option to produce a Project key.
![Project Key](./images/ProjectKey.png)

On generating the key user is required to copy and store it separately for further usage.
![Project Key Generated](./images/Projectkey1.png)

## Creating OAuth Client

Go to, Account Settings>> OAuth Clients, “**Create New Client**”.
![Account Setting](./images/AccountSettings.png)
![OAuth Client](./images/oauthclient.png)

As soon as “Create New Client” option is clicked “**Client ID**” and “**Secret**” will be created.
![OAuth Client 2](./images/oauthclient2.png)

Copy and store them separately for further use.

## Creating Personal Access Token

Go to, Account Settings>> Personal Access Token option.
Next, click “**Create New Token**” and add the details Eg; name of the project and developer.
![Access Token](./images/accesstoken.png)

A token will be generated after clicking “**OK**” button. Copy and store externally on a file to use it further.
![Access Token Generated](./images/accesstoken1.png)

## Installing Plugin

After creating the tokens user need to go to “Android Studio” and follow the steps given below:

Go to File>>Settings>>Plugin
![Plugin](./images/plugin.png)
Search for the plugin with “**Devnagri**”, if unable to get in search result than click “Search In Repository”
![Plugin Search](./images/pluginsearch.png)
Click “**Install**” option, once done the application will restart.
![Install Devnagri Plugin](./images/devnagri.png)
![Install Plugin](./images/instalingplugin.png)
![Plugin Installed](./images/pluginsearch2.png)

After the restart, the plugin with name “Devnagri” will be available in right hand panel along with icon.
![Restart Plugin](./images/restartstudio.png)
![Plugin Installed and Activated](./images/plugininstall.png)

## Adding Access Tokens In Android Studio

Once the plugin is installed, click on the plugin and follow the steps:

Go to **Settings**, fill all field like Access token, Client id, Project Key, Client _Secret.You will get all value from creating project on Devnagri.
![Setting](./images/settings0.png)
Insert keys according to required fields carefully.
![Setting Keys](./images/settingscreen.png)
![Setting Keys1](./images/setting1.png)

Click “**ok**” to add the keys. “.devnagri.yml” file will be created in your app.
![Setting Keys1](./images/yml.png)

## Pushing files From Android Studio

Once the token keys are added and accepted, use the step given below to push and upload the file:

Go to “**Push**” icon and as soon as file is uploaded, user will get a success notification
![Push](./images/push.png)
![Push 1](./images/push1.png)

## Pulling the Translated File in Android Studio

Once the files are translated user can pull the files by following the steps given below:
**Note**: User can only the file once it is completely translated.
Go to “**Pull**” icon given on Devnagri plugin tab. Once the file is pulled it will store in resource “**res**” folder with “folder name and such as “**Value-hi**” along with **string.xml** file.
![Pull](./images/pull.png)
![Push 1](./images/pull1.png)

**Note**: The folder name will change according to the Target languages chosen.
![Push 2](./images/pull3.png)

## Check Status

Status icon available in Devnagri plugin will give the current status of the translated project. Ex; percentage of translated project with respect to language or review status of the project.
![Status](./images/status.png)
![Status 1](./images/status1.png)

## Sync

Using this option in Devngari plugin will help to sync the “local file folder” and the “Devnagri project server file folder”. Use this option when adding new words in the android application file.
![Sync](./images/sync.png)
![Sync1](./images/sync1.png)

## Help

To contact for any plugin or translation related issue, user can click the “Help” icon.
![Help](./images/help.png)

### Developers

**Gaurav Tyagi** (tyagigaurav@fourtek.com),
**Gaurav Sengar** (gauravsengar@fourtek.com)