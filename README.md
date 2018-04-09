# Húlí Express Heartbeat module

This module mounts a heartbeat endpoint to your Express application, which can be used to test if the app is still running and if the database behind it is still accessable.

This module is depending on the Húlí-db module for query execution, and on the MySQL-Bricks module as Húlí-db only accepts Bricks query-objects.

The module exports an Express-endpoint which can be mounted with:

```JAVASCRIPT
app.use(huli-hb.endpoint);
```

Then a HTTP request to the **/heartbeat** route will return a JSON object containing a **Status** and a conditional **Error** key with the apropriate value(s);
