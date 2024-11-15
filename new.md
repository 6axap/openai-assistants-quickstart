The error message you're encountering indicates a Cross-Origin Resource Sharing (CORS) issue when trying to make a request from one origin (`http://localhost:3002`) to another (`http://localhost:3000`).

Here are the steps you can take to resolve this issue:

### 1. Modify the Server CORS Configuration

You need to set up your server to allow requests from specific origins instead of using the wildcard '*'. If you're using a Node.js server with Express, you can do this using the `cors` middleware. Here's how you can configure it:

```javascript
const express = require('express');
const cors = require('cors');
const app = express();

const corsOptions = {
  origin: 'http://localhost:3002', // Allow requests only from this origin
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};

app.use(cors(corsOptions));

// Your other middleware and routes here
app.get('/api/chat-history', (req, res) => {
  // Handle your request here
  res.json({ message: 'Chat history response' });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
```

### 2. Ensure withCredentials is Set Correctly

On the client side, make sure that when you're making the request using `XMLHttpRequest`, you set the `withCredentials` attribute to `true`:

```javascript
var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://localhost:3000/api/chat-history', true);
xhr.withCredentials = true; // Include credentials
xhr.onload = function () {
  if (xhr.status === 200) {
    console.log(xhr.responseText);
  } else {
    console.error('Request failed:', xhr.status);
  }
};
xhr.send();
```

### 3. Test Your Changes

After making these changes, restart your server to ensure that it’s running with the new CORS configuration. Then, try making your XMLHttpRequest from the client again.

### Additional Tips:

- If you need to allow multiple origins, you can implement a function for the `origin` option in the CORS configuration.
- Check your browser's developer console for any additional errors or warnings related to CORS.

By following these steps, you should be able to resolve the CORS issue you are experiencing.
