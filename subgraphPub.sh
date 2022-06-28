rover subgraph introspect \
  http://localhost:4003 | \
  rover subgraph publish llamas-kvru3i@current \
  --name llama --schema - \
  --routing-url http://localhost:4003

  rover subgraph introspect \
  http://localhost:4002 | \
  rover subgraph publish llamas-kvru3i@current \
  --name llamaSaddles --schema - \
  --routing-url http://localhost:4002