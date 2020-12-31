# Being_Express.Js


1. ExpresJs Routing

	Routing refers to determining how an application responds to a client request to a particular endpoint,
	which is a URI (path) and a specific HTTP request method (GET, POST, PUT, Delete).
	
2. 	How To Send HTML & JSON Data as a Response

	You can send the JSON response by using res.json() method. It accepts an object and converts it into JSON before sending it as a response.
	
3. Serve HTML CSS & JS Files | Middleware in Express JS
	
	using built-in middleware (express.static)
		
		syntax: express.static(root, [options])
		
4. How to Serve Static Website in Node JS(Express)

5. Template Engines (Pug, hbs, EJS) in Node JS
	
	A template engine enables you to use static template files in your application.
	Some popular template engines that work with Express are Pug, Mustache, and EJS.
	To render template files, set the following application setting properties, set in app.js in the default app created by the generator:

		views, the directory where the template files are located. Eg: app.set('views', './views').
		This defaults to the views directory in the application root directory.
		view engine, the template engine to use.
		For example, to use the Pug template engine: app.set('view engine', 'pug').

6. Add Dynamic Content in Express JS

7. Customizing the Views Directory in Express JS

8. Using Partials in ExpresJs.

9. Add 404 error page in Dynamic Website using Express JS

10. Adding Responsive Styles to Complete Dynamic Website using CSS in Express Website.



# IMP

## Callback function as two parameters req(request) & res (response).
	1.The request object represents the HTPP request & has properties for the
	  request query string, parameters, body, HTPP headers etc.
	2.The response object represents the HTPP response
	  that the express app sends when it receives an HTPP request.
		
