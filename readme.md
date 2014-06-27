# Information Radiator Scheduler #

A small application to be used with information radiators to cycle through different web applications at pre-defined intervals. The application will preload screens to be display and use the onload event to flip to the new screen.

To configure screens to display simply enter urls in app.config by modifying urlsToView variable:

> var urlsToView = 
> [
> 						{url:'http://www.bom.gov.au/'},
> 						{url:'http://www.azure.com'},
> 					 ]

## Setting default interval ##

If no keepInterval is set on a url then the defaultChangeInterval setting specified in miliseconds will be used.

## Setting time Range ##

It is possible to set a screen to be displayed only between certain hours by setting both the hourStart and hourEnd variables using 24 hour clock. Note this uses the browsers time.
 