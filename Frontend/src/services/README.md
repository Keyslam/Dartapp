## Services

Services contain most of the logic of the application

- A folder is created for each service, matching the service's name.
- The service's name is UpperCamelcase.
- The service consists of a source and test file.
- The service should not concern itself with rendering.
- The service should be generic and reusable.

Example folder structure for 'MyService':
```
/services
└── /MyService
    ├── MyService.ts
    └── MyService.test.ts
```

### Dependency injection

Services can import their concrete dependencies.

When unit testing, these dependencies can be mocked.