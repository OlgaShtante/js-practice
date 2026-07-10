# REST HTTP Requests

Not a script but a **`.http` request file** (for the VS Code REST Client / a
JetBrains HTTP client) exercising a mock `my-json-server` REST API: `GET` all
topics, `GET` one by id, `POST` a new topic, then `GET` it back — demonstrating
that a mock server accepts the POST but doesn't actually persist it (the final
GET returns 404). Comments link to screenshots of each response.

**Practises:** REST verbs (`GET`/`POST`), request headers, JSON bodies, reading
status codes; how mock servers fake writes.

**Source:** [`src/modules/rest.http`](src/modules/rest.http)

**Run:** open the `.http` file in an editor with an HTTP-client plugin and send
each request.
