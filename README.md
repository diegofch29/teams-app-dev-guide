# **Building a React Application with Microsoft Teams Authentication**

### Introduction:

In this post, you'll learn how to configure and build a React application that authenticates exclusively within Microsoft Teams. This guide focuses on integrating authentication directly with Teams, providing a seamless user experience in the platform. While it's possible to add browser-based authentication using MSAL, we'll keep the focus solely on Teams authentication for simplicity.

> [!CAUTION]
> In order for you not to waste time you should be working with your Teams administrator or be one to approve our application in Teams, also you need to have Application Administrator, Cloud Application Administrator or above to create the App Registration both are necessary for our authentication.

**Why Authenticate in Microsoft Teams?**

- Streamlined Experience: Users stay within the familiar Teams environment without needing to switch apps or browsers.
- Enhanced Security: By leveraging Teams authentication, you reduce the risk of unauthorized access outside the platform.
- Seamless User Management: Leverage Microsoft’s existing identity platform, making user management and permissions easier within your app.

Feel free to extend the project with browser authentication using MSAL if needed, but this guide will help you set up Teams-first authentication.

## let's set up our development environment

### App Registration Configuration

First thing is to configure your app registrationso if you don't know what azure app registration is here you have a simple description.

> [!TIP]
> Azure App Registration is a process in Azure Active Directory that lets you register your apps to give them an identity. This allows your apps to securely access and use Azure services. By registering, you can set up how your app will authenticate, define what it can access, and manage permissions. It's essential for integrating your apps with Azure and ensuring secure, managed access to resources.
>
> Find More information [Azure App Registration](https://learn.microsoft.com/en-us/security/zero-trust/develop/app-registration)

<br>

1. First let's create the your App registration in [Azure Portal](https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps/ApplicationsListBlade)

   > Note: if don't have admin role in your tenant or the necessary permissions you will not be able to create the App registration

   1. You or your tenant admin needs to create the app registration

   <br>

   ![App Registration](./ScreenShots/AppRegistration/App-Registration-Creation.png)

   <br>

   2. We are going to configure our ID URI which will be our audience and will help us identify our application and protect our backend that we can configure to accept only token with this specific audience.

   <br>

   ![App Registration Adding ID URI](./ScreenShots/AppRegistration/App-Registration-ID-URI.png)

   <br>

   3. Add a scope for delegated permissions only recommended, you can handle higher permissions in the backend with the "on_behalf" permission so your app is more secure.

   <br>

   ![App Registration Adding ID URI](./ScreenShots/AppRegistration/App-Registration-scope.png)

   <br>

   ### Create your application in teams

2. Next we have to do is create and configure an application in the [Developer Portal](https://dev.teams.microsoft.com/apps).

   <br>

   1. You can go to the [Developer Portal](https://dev.teams.microsoft.com/apps) and create your application.

   <br>

   ![Developer Portal Create Application](./ScreenShots/DeveloperPortal/Developer-Portal-App-Creation.png)

   2. Once created we need to configure some values in the "Basic Information" section, fill the names and descriptions this way the user can know what the application does and identify it easier, to enable the authentication you will need the Client ID of your App Registration this is extremely important for the next step.

   <br>

   ![Developer Portal Configure your application Create](/ScreenShots/DeveloperPortal/Developer-Portal-App-Configuration-1.png)

   <br>

   3. Go to the "single sign-on" section and here we are going to add the ID URI, if you did not configure correctly the "App Id" in the last step you will get an error, once you added your ID save and go to the next step.

   <br>

   ![Developer Portal Configure your application SSO](/ScreenShots/DeveloperPortal/Developer-Portal-App-Configuration-2.png)

   <br>

   4. Go to the "App features" section here we will configure the the URL of our service, you will see several options you can go in detail for each if you want but for this exercise we will focus on the "Personal app" feature.

   <br>

   ![Developer Portal Configure your application App features](/ScreenShots/DeveloperPortal/Developer-Portal-App-Configuration-3.png)

   <br>

   5. In here we will configure our URL application you can put your your environment URL since we are going to work locally i will use "https://localhost:3000", you have to use HTTPS protocol Teams will not accept HTTP.

   <br>

   ![Developer Portal Configure your application Personal app](/ScreenShots/DeveloperPortal/Developer-Portal-App-Configuration-4.png)

   <br>

   6. Now we have to publish our application click on the "Publish" button and choose "Publish to your org" or go to the "Publish to org" section and Publish your app.

   <br>

   ![Developer Portal Configure your application Publish app](/ScreenShots/DeveloperPortal/Developer-Portal-App-Configuration-4.png)

   <br>

   7. Now that our application is publish we need a Teams Administrator to approve our application so it will be visible for the organization.

\*. Add your Teams Application ID to your App Registration, yes you have two application Id's one for your App registration and another for your Teams Application
