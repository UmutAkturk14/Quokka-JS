const exampleCodes = {
  basic:
`import { createStore } from 'your-library';

// Create a type-safe store with initial state
const store = createStore({
  user: {
    name: 'John',
    preferences: {
      theme: 'light',
      notifications: true
    }
  },
  posts: []
});

// Access nested properties with full type safety
const theme = store.get('user.preferences.theme');

// Update state immutably
store.set('user.preferences.theme', 'dark');

// Subscribe to changes
store.subscribe(state => {
  console.log('Store updated:', state);
});`,
  advanced: `import { createApi, withCache } from 'your-library';

// Create a typed API client with caching
const api = createApi({
  baseUrl: 'https://api.example.com',
  headers: {
    'Content-Type': 'application/json'
  }
})
.use(withCache({ ttl: 60 * 1000 }));

// Type-safe API calls with automatic type inference
interface User {
  id: string;
  name: string;
  email: string;
}

const getUser = async (id: string): Promise<User> => {
  return api.get(\`/users/\${id}\`);
};

// The return type is automatically inferred
const user = await getUser('123');
console.log(user.name); // fully typed!`,
  integration: `import { pipe, filter, map, reduce } from 'your-library';

// Process data with a functional pipeline
const numbers = [1, 2, 3, 4, 5, 6];

const sum = pipe(
  numbers,
  filter(n => n % 2 === 0), // [2, 4, 6]
  map(n => n * 2),          // [4, 8, 12]
  reduce((a, b) => a + b, 0) // 24
);

// Automatic type inference throughout the pipeline
console.log(sum); // 24`,
  eventManager: `import { createEventManager } from 'your-library';`
};

export default exampleCodes;
