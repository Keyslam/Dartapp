## Views

Views are the actual pages that are served to the user

- A folder is created for each view, matching the view's name.
- The view's name is UpperCamelcase.
- A view consists of a source, style, and test file.
- A view should not contain business logic: Delegate this to services or utils.
- A view should not contain (much) HTML elements and logic: Delegate this to components. 

Example folder structure for 'MyView':
```
/views
└── /MyView
    ├── MyView.tsx
    ├── MyView.style.css
    └── MyView.test.ts
```

### Registering views
Views must be registered in `./src/index.tsx`: It handles the routing of the application.

Simply add a `Route` tag containing the relative URL and the View to render:
```jsx
<Route path="/MyView" element={<MyView/>}/>
```

### Subroutes
Sometimes routes might need to be accessed from sub url's: `/Statistics/Game`

The folder structure of the views must match this:

```
/views
└── /Statistics
    └── /Game
        ├── Game.tsx
        ├── Game.style.css
        └── Game.test.ts
```

Routing for this is uses the same sub url:
```jsx
<Route path="/Statistics/Game" element={<Game/>}/>
```