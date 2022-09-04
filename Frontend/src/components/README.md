## Components

Components are reusable UI elements.

- A folder is created for each component, matching the component's name.
- The component's name is UpperCamelcase.
- The component consists of a source, style, and test file.
- The component should not contain (much) logic: Delegate this to services or utils.
- The component should be generic and reusable.

Example folder structure for 'MyComponent':
```
/components
└── /MyComponent
    ├── MyComponent.tsx
    ├── MyComponent.style.css
    └── MyComponent.test.ts
```

### Grouping

Components may be grouped into overarching folders. For example, if a custom Form is developed, which consists of multiple elements, they may be grouped into a Forms directory. Then, that directory can contain a `index.ts` delegating the imports.

Example folder structure for 'Forms' grouping:
```
/components
└── /Forms
    └── /forms
        ├── /TextField
        │   ├── TextField.tsx
        │   ├── TextField.style.css
        │   └── TextField.test.ts
        ├── /Button
        │   ├── Button.tsx
        │   ├── Button.style.css
        │   └── Button.test.ts
        └── index.ts
```

Example `index.ts` for 'Forms' grouping:
```typescript
import { TextField } from './TextField/TextField'
import { Button } from './Button/Button'

export { TextField, Button }
```

Doing this makes importing cleaner:
```typescript
import { TextField } from './Forms/TextField/TextField'
import { Button } from './Forms/Button/Button'

...
```
Becomes:
```typescript
import { TextField, Button } from './Forms'

...
```

- Do not overuse groupings, since the project may then be bloated with `index.ts` files.
- Only group components that are strongly related to each other.