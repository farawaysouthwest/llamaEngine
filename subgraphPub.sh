rover subgraph introspect \
  http://localhost:4000 | \
  rover subgraph publish llamas@current \
  --name llama --schema - \
  --routing-url http://localhost:4000