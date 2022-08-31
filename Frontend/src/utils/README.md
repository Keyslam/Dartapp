## Utils

Utils are utility functions that are too simple or fragmented to put into a service

- A folder is created for each util, matching the util's name.
- The util's name is UpperCamelcase.
- The util consists of a source and test file.
- The util should be generic and reusable.
- The util is a pure function - It has no side effects

Example folder structure for 'MyUtil':
```
/services
└── /MyUtil
    ├── MyUtil.tsx
    └── MyUtil.test.ts
```

### Dependency injection

Utils should request their dependencies through arguments - It should not import them.
