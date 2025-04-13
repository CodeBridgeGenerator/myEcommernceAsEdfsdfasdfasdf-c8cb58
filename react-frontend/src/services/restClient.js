import feathers from "@feathersjs/feathers";
// import client from "@feathersjs/client";
import rest from "@feathersjs/rest-client";
import auth from "@feathersjs/authentication-client";
import axios from "axios";
// import io from "socket.io-client";

if (!process.env.REACT_APP_SERVER_URL)
  throw `Environmental variable 'REACT_APP_SERVER_URL' is required. Add it to '.env' file. Example: 'REACT_APP_SERVER_URL=http://localhost:3030'.`;
const app = feathers();
const restClient = rest(process.env.REACT_APP_SERVER_URL);
// Setup the transport (Rest, Socket, etc.) here
app.configure(restClient.axios(axios));


// Available options are listed in the "Options" section
app.configure(
  auth({
    storage: window.localStorage,
  }),
);

// console.debug('Rest client configured');
export default app;
