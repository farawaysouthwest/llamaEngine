docker run -dp 4000:4000 --rm --name gateway --mount type=bind,source="$(pwd)"/schema.graphql,target=/app/schema.graphql gateway