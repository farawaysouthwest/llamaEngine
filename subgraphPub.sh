rover subgraph introspect \
  http://localhost:4000 | \
  APOLLO_KEY=service:llamas:HgL1jXBcplycGjpcpRCnLg \
  rover subgraph publish llamas@current \
  --name llama --schema - \
  --routing-url http://localhost:4000