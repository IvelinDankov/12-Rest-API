### RESTFUL API project.

- [ ] Take all static files.
- [ ] All routes we need for restful api.

  - (POST) http://localhost:3030/users/register.
  - (POST) http://localhost:3030/users/login.
  - (GET) http://localhost:3030/users/logout.

  - Create--(POST) http://localhost:3030/data/catalog
  - All--(GET) http://localhost:3030/data/catalog
  - Details--(GET) http://localhost:3030/data/catalog/:id
  - Update--(PUT) http://localhost:3030/data/catalog/:id
  - delete--(DELETE) http://localhost:3030/data/catalog/:id
  - My Furniture--(GET) (http://localhost:3030/data/catalog?where=\_ownerId%3D%22{userId}%22)

  ## Restfull Api

- [ ] REST & CORS
- REST Standart. (Most) Representational State Transfer.
  -> Stucture for client-server communication.
  - Resources have (URI) exp.../users, products, recommendation, comments, reviews/. Allways Noun and Plurals. We can do CRUT (create, retrieve, modify, delete)
- AJAX request asyn js requests.

## Start project

- [ ] Install client and dependency `npm install`
- [ ] Install vite and setup.
- [ ] and make script "dev": "vite".
- [ ] Installing express and new server node
- [ ] Starting Client & Server at the same time.
- [ ] SOP - Same Origin
- host protocol port. are sane
- [ ] Different Origin. host, protocol or post are different.
- [ ] Setting up middleware cors 'Access-Contol-Allow-Origin', '\*'
- [ ] Make middleware setHeader('Access-Controll-Allow-Origin', '\*')

- [ ] Add cors middleware
- [ ] Add json middleware. app.use(express.json())
- [ ] Make Register id, email, accessToken,
- [ ] Do Logout!

- [ ] Create first furniture and redirect.
- [ ] Showed all furniture..

## Edit -> Make edit fn.

- [ ] Edit is easy.
  - Problem with some order app.use(routes) must be last middleware.
- [ ] Token is saved in req.header('X-Authorization') not in Cookie..
