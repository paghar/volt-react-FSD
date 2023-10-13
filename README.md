
## volt-react-FSD


The first step to start a Front-End application is which architectural methodology is suitable for project concept. Feature-Sliced Design(FSD) is one most popular design approach which divide an application according to business and responsibility scope.This approach is commonly used in software development and may be used to front-end and mobile applications.

## The idea behind FSD is decompose a application into nested smaller pieces. First level in “Layer”, each layer may include some smaller manageable pieces that called “Slices”. Slice may break down into “Segments”.

![Screenshot](src/app/assets/img/FSD.jpg)

FSD strives to make a discipline. It creates a one-way controllable Unidirectional Encapsulated Flow.In theory, it indicates that the Bottom Layer (for example, shared) has no knowledge of the layers above or below it. Upper layers (for example, entities) can access all layers below.

[Volt React Dashboard Bootstrap 5](https://demo.themesberg.com/volt-react-dashboard) is re-factored base on FSD methodology in volt-react-FSD.

There are currently four layer (top to bottom) in Volt-React-FSD application.
 1. app : app settings, styles and providers.
 2. entities — business entities.
 3. pages — compositional layer to construct full pages from entities,
    features and widgets.
 4. shared — reusable functionality, detached from the specifics of the
    project/business.
